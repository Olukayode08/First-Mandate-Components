import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom'
import { useFirstMandateMutation } from '../../data-layer/utils'
import LandlordUnitTypeDropdown from '../Dropdowns/LandlordUnitTypeDropdown'

const ManagerAddUnit = () => {
  const navigate = useNavigate()
  const { propertyId } = useParams()
  const [buttonType, setButtonType] = useState()
  const [unitError, setUnitError] = useState(null)
  const [successError, setSuccessError] = useState(null)

  const [addUnit, setAddUnit] = useState({
    unit_name: '',
    unit_type: '',
    no_of_bedrooms: '',
    occupation_status: '',
  })
  const backProperties = () => {
    navigate(`/manager/property/${propertyId}`)
  }
  const handleChangeAddUnit = (e) => {
    setAddUnit({ ...addUnit, [e.target.name]: e.target.value })
  }
  // Clear Error
  useEffect(() => {
    setUnitError('')
  }, [
    addUnit.unit_name,
    addUnit.unit_type,
    addUnit.no_of_bedrooms,
    addUnit.occupation_status,
  ])

  const {
    mutateAsync: postUnit,
    isLoading,
    error: addUnitError,
  } = useFirstMandateMutation(
    `/property-manager/properties/${propertyId}/units`,
    {
      onSuccess: (data) => {
        const unitUuid = data?.data?.uuid
        if (addUnit.occupation_status === 'occupied') {
          setTimeout(() => {
            navigate(`/manager/add-tenant/${unitUuid}/tenants`, {
              state: { unitName: addUnit.unit_name },
            })
          }, 5000)
        }
      },
      onError: (error) => {},
    }
  )

  const payload = {
    unit_name: addUnit.unit_name,
    unit_type: addUnit.unit_type,
    no_of_bedrooms: addUnit.no_of_bedrooms,
    occupation_status: addUnit.occupation_status,
  }

  const handleAddUnit = async (_buttonType) => {
    setButtonType(_buttonType)
    if (
      !addUnit.unit_name ||
      !addUnit.unit_type ||
      !addUnit.no_of_bedrooms ||
      !addUnit.occupation_status
    ) {
      setUnitError('Please fill in all required fields.')
      return
    }
    try {
      await postUnit(payload)
      setTimeout(() => {
        if (addUnit.occupation_status === 'occupied') {
          setSuccessError(
            'Congratulations, your unit has been added successfully. You are required to add a tenant to the already occupied unit'
          )
        } else {
          setSuccessError(
            'Congratulations, your unit has been added successfully.'
          )
        }
        setAddUnit({
          unit_name: '',
          unit_type: '',
          no_of_bedrooms: '',
          occupation_status: '',
        })
        setTimeout(() => {
          setSuccessError('')
          if (
            _buttonType === 'continue' &&
            addUnit.occupation_status !== 'occupied'
          ) {
            navigate(`/manager/property/${propertyId}`)
          } else if (_buttonType === 'addNew') {
            setSuccessError('')
          }
        }, 5000)
      }, 200)
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <>
      <MAUnit>
        <section>
          <div className='upload-unit'>
            {!!(addUnitError || unitError) && (
              <p className='error'>{unitError || addUnitError?.error}</p>
            )}
            {!!successError && <p className='error success'>{successError}</p>}
            <h3>Add Unit</h3>
            <div className='section'>
              <div className='input'>
                <label>Unit Name</label>
                <input
                  type='text'
                  name='unit_name'
                  value={addUnit.unit_name}
                  onChange={handleChangeAddUnit}
                  autoComplete='off'
                  placeholder='Enter full name'
                  className='u-name-input'
                />
              </div>
            </div>
            <div className='unit-type'>
              <label>Unit Type*</label>
              <LandlordUnitTypeDropdown
                addUnit={addUnit}
                handleChangeAddUnit={handleChangeAddUnit}
              />
            </div>
            <div className='rent-status'>
              <label>
                Rent Status (Are there occupants in the apartment already)
              </label>
              <div className='radio-btns'>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='occupied'
                    name='occupation_status'
                    onChange={handleChangeAddUnit}
                    checked={addUnit.occupation_status === 'occupied'}
                    className='btn-input'
                  />
                  <p className='ppt-details'>Occupied</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    name='occupation_status'
                    value='vacant'
                    checked={addUnit.occupation_status === 'vacant'}
                    onChange={handleChangeAddUnit}
                    className='btn-input'
                  />
                  <p className='ppt-details'>Vacant</p>
                </div>
              </div>
            </div>
            <div className='step-buttons'>
              <div onClick={backProperties} className='back'>
                <IoMdArrowBack />
                <button>Go back</button>
              </div>
              <button
                onClick={() => handleAddUnit('addNew')}
                disabled={isLoading}
                type='submit'
                className={`btn add-unit ${
                  isLoading && buttonType === 'addNew' && 'btn-disabled'
                }`}
              >
                {isLoading && buttonType === 'addNew' ? (
                  <div className='login-spinner'>
                    <div className='spinner'></div>
                    <p>Save & Add New Unit</p>
                  </div>
                ) : (
                  <p className='login-btn'>Save & Add New Unit</p>
                )}
              </button>
              <button
                onClick={() => handleAddUnit('continue')}
                disabled={isLoading}
                type='submit'
                className={`next-btn next-button ${
                  isLoading && buttonType === 'continue' && 'next-btn-disabled'
                }`}
              >
                {isLoading && buttonType === 'continue' ? (
                  <div className='login-spinner'>
                    <div className='spinner'></div>
                    <p>Save & Continue</p>
                  </div>
                ) : (
                  <p className='login-btn'>Save & Continue</p>
                )}
              </button>
            </div>
          </div>
        </section>
      </MAUnit>
    </>
  )
}
const MAUnit = styled.section`
  .upload-unit {
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
    margin: 10px 0;
  }
  .section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;
  }
  input {
    outline: none;
    border: 1px solid black;
    background: transparent;
    padding: 0 20px;
    font-family: inherit;
    font-weight: 17px;
    color: #000;
    border-radius: 4px;
  }
  .u-name-input {
    width: 500px;
    height: 48px;
  }
  .unit-type {
    margin: 10px 0;
  }
  /* Rent Status */
  .rent-status {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 10px 0;
    font-size: 18px;
  }
  .radio-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    width: 280px;
  }
  .radio-btn {
    display: flex;
    align-items: center;
    width: 130px;
    flex-shrink: 0;
  }
  .btn-input {
    width: 18px;
    height: 18px;
  }
  .ppt-details {
    margin-left: 10px;
    flex-shrink: 0;
  }
  /* Step buttons */
  .step-buttons {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-shrink: 0;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #000;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 16px;
    height: 50px;
  }
  .add-unit,
  .back,
  .next-button {
    border-radius: 4px;
    padding: 0 18px;
  }
  .back {
    background-color: #ffdfe2;
  }
  .add-unit {
    height: 48px;
  }
  .btn {
    background-color: #ffffff;
    border: 1px solid black;
    color: #000;
    height: 48px;
  }
  .btn-disabled {
    background: #00000080;
    color: #fff;
    cursor: not-allowed;
    border: none;
    height: 48px;
  }
  .next-btn {
    background-color: #fedf7e;
    color: #000;
  }
  .next-btn-disabled {
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
    .u-name-input {
      width: 98%;
    }
    label {
      font-size: 16px;
      line-height: 22px;
    }
  }
  @media screen and (max-width: 350px) {
    .u-name-input {
      width: 98%;
    }
  }
`

export default ManagerAddUnit
