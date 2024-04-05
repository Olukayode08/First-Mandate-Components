import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useFirstMandateMutation,
  useFirstMandateQuery,
} from '../../data-layer/utils'

const token = localStorage.getItem('token')

const LandlordAddNewManager = () => {
  const { propertyId, managerId } = useParams()
  const [selectedPropertyuuid, setSelectedPropertyUuid] = useState(null)
  const navigate = useNavigate()

  const [addManager, setAddManager] = useState({
    name: '',
    email: '',
    phone: '',
    phone_two: '',
    property_name: '',
    property_uuid: propertyId,
  })

  const handleChangeAddManager = (e) => {
    setAddManager({ ...addManager, [e.target.name]: e.target.value })
  }

  const handleManagerUpdate = (fieldName, value) => {
    setAddManager((prev) => ({ ...prev, [fieldName]: value }))
  }

  const {
    mutateAsync: postManager,
    isLoading,
    error,
    isSuccess,
  } = useFirstMandateMutation(
    `/property-managers${managerId ? `/${managerId}` : ''}`,
    {
      method: managerId ? 'PUT' : 'POST',
      onSuccess: (data) => {
        console.log(data)
        setTimeout(() => {
          navigate('/landlord/managers')
        }, 3000)
      },
      onError: (error) => {
      },
    }
  )
  const { data } = useFirstMandateQuery(
    `/property-managers/${managerId}`,
    {
      enabled: !!token && !!managerId,
      onSuccess: (data) => {
        handleManagerUpdate('name', data?.data?.name)
        handleManagerUpdate('email', data?.data?.email)
        handleManagerUpdate('phone', data?.data?.phone)
      },
    }
  )

  const { data: propertiesData } = useFirstMandateQuery('/properties', {
    enabled: !!token && !propertyId,
    select: (data) => data?.data?.data
  })


  const handleManager = async (e) => {
    e.preventDefault()

    const payload = {
      email: addManager.email,
      phone: addManager.phone,
      name: addManager.name,
      property_uuid: propertyId || selectedPropertyuuid,
    }

    try {
      await postManager(payload)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <LANManager>
        <section className='m-section'>
          <form onSubmit={handleManager}>
            {error && <p className='error'>{error?.message}</p>}
            {isSuccess && (
              <p className='error success'>
                {managerId
                  ? 'Manager edited successfully'
                  : 'Manager was added successfully'}
              </p>
            )}
            <h3>{managerId ? 'Edit Manager' : 'Add New Manager'}</h3>
            <div>
              {!propertyId && (
                <div className='input'>
                  <label>Select Property</label>
                  {propertiesData?.length > 0 ? (
                    <div className='select'>
                      <select
                        name='property-select'
                        id='property-select'
                        required
                        onChange={(e) => {
                          const _selectedPropertyuuid = e.target.value
                          setSelectedPropertyUuid(_selectedPropertyuuid)
                        }}
                      >
                        <option value=''>Select</option>
                        {propertiesData?.map((property) => (
                          <option key={property.uuid} value={property.uuid}>
                            {property.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <p>No Property</p>
                  )}
                </div>
              )}
            </div>

            <div className='input'>
              <label>Name</label>
              <input
                type='text'
                name='name'
                required
                value={addManager.name}
                onChange={handleChangeAddManager}
                autoComplete='off'
                placeholder="Enter manager's name"
                className='t-name-input'
              />
            </div>
            <div className='input'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                required
                value={addManager.email}
                onChange={handleChangeAddManager}
                autoComplete='off'
                placeholder='Enter email address'
                className='t-name-input'
              />
            </div>
            <div className='input'>
              <label>Phone</label>
              <input
                type='text'
                name='phone'
                required
                value={addManager.phone}
                onChange={handleChangeAddManager}
                autoComplete='off'
                placeholder='+234'
                className='t-name-input'
              />
            </div>
            {!managerId && (
              <>
                <div className='input'>
                  <label>Phone</label>
                  <input
                    type='text'
                    name='phone_two'
                    value={addManager.phone_two}
                    onChange={handleChangeAddManager}
                    autoComplete='off'
                    placeholder='+234'
                    className='t-name-input'
                  />
                </div>
                <div className='input'>
                  <label>Property Name</label>
                  <input
                    type='text'
                    name='property_name'
                    value={addManager.property_name}
                    onChange={handleChangeAddManager}
                    autoComplete='off'
                    className='t-name-input'
                  />
                </div>
              </>
            )}
            <button
              disabled={isLoading}
              type={'submit'}
              className={
                isLoading ? 'btn-disabled add-manager' : 'btn add-manager'
              }
            >
              {isLoading ? (
                <div className='login-spinner'>
                  <div className='spinner'></div>
                  <p>{managerId ? 'Edit Manager' : 'Add Manager'}</p>
                </div>
              ) : (
                <p className='login-btn'>
                  {managerId ? 'Edit Manager' : 'Add Manager'}
                </p>
              )}
            </button>
          </form>
        </section>
      </LANManager>
    </>
  )
}
const LANManager = styled.section`
  .m-section {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .error {
    color: #ff0000;
    text-align: left;
    margin: 10px 0;
  }
  .success {
    color: green;
  }
  h3 {
    margin: 15px 0;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  input {
    outline: none;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-size: 17px;
    color: #000;
    outline: none;
    border-radius: 4px;
    background: transparent;
  }
  .select {
    width: 180px;
    height: 48px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 15px;
  }
  select {
    width: 100%;
    height: 100%;
    outline: none;
    font-family: inherit;
    font-size: 16px;
    color: #000;
    outline: none;
    background: transparent;
    border: none;
  }
  label {
    margin: 10px 0;
    font-size: 16px;
  }
  .t-name-input {
    width: 500px;
    height: 48px;
  }
  .add-manager {
    width: 220px;
    text-align: center;
    height: 50px;
    border-radius: 4px;
    border: transparent;
    margin: 10px 0;
    font-size: 16px;
    cursor: pointer;
  }
  .btn {
    background-color: #fedf7e;
    color: #000;
  }
  .btn-disabled {
    background: #00000080;
    color: #fff;
    cursor: not-allowed;
  }
  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  .login-spinner {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .spinner {
    border: 3px solid #fff;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 550px) {
    .t-name-input {
      width: 96%;
    }
  }
`

export default LandlordAddNewManager
