import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useFirstMandateMutation,
  useFirstMandateQuery,
} from '../../data-layer/utils'

const ManagerSendNotice = () => {
  const navigate = useNavigate()
  const { tenantId } = useParams()
  const [selectedTenantUuid, setSelectedTenantUuid] = useState(null)

  const [addReminder, setAddReminder] = useState({
    type: '',
    description: '',
    notice_date: '',
    notice_time: '',
    tenant_uuid: tenantId,
  })

  const handleChangeAddReminder = (e) => {
    setAddReminder({ ...addReminder, [e.target.name]: e.target.value })
  }

  const {
    mutateAsync: postReminder,
    isLoading,
    error,
    isSuccess,
  } = useFirstMandateMutation(`/property-manager/notices`, {
    method: 'POST',
    onSuccess: (data) => {
      setTimeout(() => {
        navigate('/manager/notices')
      }, 3000)
    },
    onError: (error) => {},
  })

  const { data: tenantsData } = useFirstMandateQuery(
    '/property-manager/property-tenants',
    {
      enabled: !tenantId,
      select: (data) => data?.data?.data,
    }
  )

  const handleNotification = async (e) => {
    e.preventDefault()
    const payload = {
      type: addReminder.type,
      description: addReminder.description,
      notice_date: addReminder.notice_date,
      notice_time: addReminder.notice_time,
      tenant_uuid: tenantId || selectedTenantUuid,
    }

    try {
      await postReminder(payload)
    } catch (e) {}
  }

  return (
    <>
      <MSNotice>
        <section>
          <form onSubmit={handleNotification} className='n-section'>
            {error && <p className='error'>{error?.message}</p>}
            {isSuccess && (
              <p className='error success'>Notice was sent successfully</p>
            )}
            <div className='input'>
              <label className='reminder-h'>Send Notice</label>
            </div>
            <div className='n-status'>
              <label>Notices Type</label>
              <div className='radio-btns'>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='Rent amount review'
                    name='type'
                    onChange={handleChangeAddReminder}
                    checked={addReminder.type === 'Rent amount review'}
                    className='btn-input'
                  />
                  <p className='n-details'>Rent amount review</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='Tenancy term renewal'
                    name='type'
                    onChange={handleChangeAddReminder}
                    checked={addReminder.type === 'Tenancy term renewal'}
                    className='btn-input'
                  />
                  <p className='n-details'>Tenancy term renewal</p>
                </div>
              </div>
            </div>
            {/* Text Boxes */}
            <div className='input'>
              <label>Short description</label>
              <input
                type='text'
                required
                name='description'
                value={addReminder.description}
                onChange={handleChangeAddReminder}
                autoComplete='off'
                className='r-desc-input'
              />
            </div>

            <div>
              {!tenantId && (
                <div className='input'>
                  <label>Select Tenant</label>
                  {tenantsData?.length > 0 ? (
                    <div className='select'>
                      <select
                        name='property-select'
                        id='property-select'
                        required
                        onChange={(e) => {
                          const _selectedTenantUuid = e.target.value
                          setSelectedTenantUuid(_selectedTenantUuid)
                        }}
                      >
                        <option value=''>Select</option>
                        {tenantsData?.map((tenant) => (
                          <option key={tenant.uuid} value={tenant.uuid}>
                            {tenant.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <p>No Tenant</p>
                  )}
                </div>
              )}
            </div>
            <div className='input'>
              <label>Date</label>
              <input
                type='date'
                required
                placeholder='dd/mm/yyy'
                name='notice_date'
                value={addReminder.notice_date}
                onChange={handleChangeAddReminder}
                autoComplete='off'
                className='r-date-input'
              />
            </div>
            <div className='input'>
              <label>Time</label>
              <input
                className='r-date-input'
                type='time'
                required
                name='notice_time'
                value={addReminder.notice_time}
                onChange={handleChangeAddReminder}
                autoComplete='off'
              />
            </div>
            <button
              disabled={isLoading}
              className={isLoading ? 'btn-disabled save-btn' : 'btn save-btn'}
            >
              {isLoading ? (
                <div className='login-spinner'>
                  <div className='spinner'></div>
                  <p>Send Notice</p>
                </div>
              ) : (
                <p>Send Notice</p>
              )}
            </button>
          </form>
        </section>
      </MSNotice>
    </>
  )
}
const MSNotice = styled.section`
  .n-section {
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
    margin: 10px 0 25px 0;
  }
  /* Notification Status */
  .n-status {
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 10px 0;
    font-size: 16px;
  }
  .reminder-h {
    font-size: 18px;
  }
  .radio-btns {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px 0;
    gap: 20px;
  }
  .radio-btn {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 5px 0;
    flex-shrink: 0;
  }
  .btn-input {
    width: 18px;
    height: 18px;
  }
  .n-details {
    font-size: 16px;
  }
  /* Text Boxes */
  .section {
    display: flex;
    flex-direction: column;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
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
  input {
    outline: none;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-size: 16px;
    color: #000;
    border-radius: 4px;
    background: transparent;
  }
  .user-select {
    width: 500px;
    height: 50px;
    border: 1px solid black;
    padding: 0 10px;
    border-radius: 4px;
  }
  select {
    width: 100%;
    height: 100%;
    outline: none;
    background: transparent;
    border: none;
    font-family: inherit;
    font-size: 16px;
  }
  .r-desc-input {
    height: 80px;
    width: 500px;
  }
  .r-date-input {
    height: 50px;
    width: 250px;
  }
  .save-btn {
    width: 200px;
    height: 50px;
    text-align: center;
    border: transparent;
    border-radius: 4px;
    margin: 20px 0;
    cursor: pointer;
    font-size: 16px;
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
  @media screen and (max-width: 600px) {
    .radio-btns {
      width: 95%;
    }
  }
  @media screen and (max-width: 550px) {
    .user-select,
    .save-btn,
    .r-desc-input {
      width: 95%;
    }
  }
`
export default ManagerSendNotice
