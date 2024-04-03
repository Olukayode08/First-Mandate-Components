import React, { useState } from 'react'
import styled from 'styled-components'
import AddApartmentDropdown from '../Dropdowns/AddApartmentDropdown'
import UnitDropdown from '../Dropdowns/UnitDropdown'
import { useFirstMandateMutation } from '../../data-layer/utils'
import { useNavigate } from 'react-router-dom'

const TenantAddApartmentDetails = () => {
  const navigate = useNavigate()

  const [addApartment, setAddApartment] = useState({
    property_title: '',
    address: '',
    city: '',
    state: '',
    unit_name: '',
    unit_type: '',
    no_of_bedrooms: '',
    lease_start: '',
    lease_end: '',
    rent_amount: '',
    rent_payment_status: '',
    rent_due_date: '',
    renew_rent: true,
  })

  const handleChangeAddApartment = (e) => {
    setAddApartment({ ...addApartment, [e.target.name]: e.target.value })
  }

  const handleChangeUnitName = (e) => {
    const { value } = e.target
    setAddApartment({
      ...addApartment,
      unit_name: value,
      unit_type: '',
    })
  }

  const handleChangeUnitType = (e) => {
    const { value } = e.target
    setAddApartment({ ...addApartment, unit_type: value })
  }

  const handleChangeRenewTerms = (e) => {
    const { name, value } = e.target
    const newValue = name === 'renew_rent' ? value === 'Yes' : value
    setAddApartment((prevState) => ({
      ...prevState,
      [name]: newValue,
    }))
  }
  const {
    mutateAsync: postApartment,
    isLoading,
    error,
    isSuccess,
  } = useFirstMandateMutation(`/tenant/apartments`, {
    method: 'POST',
    onSuccess: (data) => {
      console.log(data)
      setTimeout(() => {
        navigate('/tenant/apartment-details')
      }, 3000)
    },
    // onError: (error) => {
    //   console.error(error)
    // },
  })

  const handleApartment = async (e) => {
    e.preventDefault()
    const payload = {
      property_title: addApartment.property_title,
      address: addApartment.address,
      city: addApartment.city,
      state: addApartment.state,
      unit_name: addApartment.unit_name,
      unit_type: addApartment.unit_type,
      no_of_bedrooms: addApartment.no_of_bedrooms,
      lease_start: addApartment.lease_start,
      lease_end: addApartment.lease_end,
      rent_amount: addApartment.rent_amount,
      rent_payment_status: addApartment.rent_payment_status,
      rent_due_date: addApartment.rent_due_date,
      renew_rent: addApartment.renew_rent,
    }
    try {
      await postApartment(payload)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <TenantAAD>
        <section>
          <form onSubmit={handleApartment} className='ap-section'>
            {error && <p className='error'>{error?.message}</p>}
            {isSuccess && (
              <p className='error success'>
                Apartment Details was added successfully
              </p>
            )}
            <h3>Add Apartment</h3>
            <div>
              <div className='input'>
                <label>Property Name</label>
                <input
                  type='text'
                  className='t-name-input'
                  name='property_title'
                  value={addApartment.property_title}
                  onChange={handleChangeAddApartment}
                  required
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='input'>
              <label>Location</label>
              <input
                type='text'
                className='t-name-input'
                name='address'
                value={addApartment.address}
                onChange={handleChangeAddApartment}
                required
                autoComplete='off'
              />
            </div>
            <div className='add-ap'>
              <AddApartmentDropdown
                addApartment={addApartment}
                handleChangeAddApartment={handleChangeAddApartment}
              />
            </div>
            <div className='add-ap'>
              <UnitDropdown
                addApartment={addApartment}
                handleChangeUnitType={handleChangeUnitType}
                handleChangeUnitName={handleChangeUnitName}
                handleChangeAddApartment={handleChangeAddApartment}
              />
            </div>
            <div className='input'>
              <label>Rent Amount</label>
              <input
                type='text'
                className='r-date-input'
                name='rent_amount'
                value={addApartment.rent_amount}
                onChange={handleChangeAddApartment}
                required
                autoComplete='off'
              />
            </div>
            <div className='rent-date'>
              <div className='start-date'>
                <label>Rent Start Date</label>
                <input
                  type='date'
                  placeholder='dd/mm/yyyy'
                  name='lease_start'
                  value={addApartment.lease_start}
                  onChange={handleChangeAddApartment}
                  required
                  autoComplete='off'
                  className='r-date-input'
                />
              </div>
              <div className='end-date'>
                <label>Rent End Date</label>
                <input
                  type='date'
                  name='lease_end'
                  value={addApartment.lease_end}
                  onChange={handleChangeAddApartment}
                  required
                  autoComplete='off'
                  placeholder='dd/mm/yyyy'
                  className='r-date-input'
                />
              </div>
            </div>
            <div className='input'>
              <label>Rent Payment Status</label>
              <div className='user-select'>
                <select
                  id='rent_payment_status'
                  name='rent_payment_status'
                  required
                  value={addApartment.rent_payment_status}
                  onChange={handleChangeAddApartment}
                >
                  <option value=''>Select</option>
                  <option value='Paid in part'>Paid in part</option>
                  <option value='Paid in full'>Paid in full</option>
                  <option value='Not Paid'>Not Paid</option>
                </select>
              </div>
            </div>
            <div className='input'>
              <label>Rent Payment Due Date</label>
              <input
                type='date'
                placeholder='dd/mm/yyyy'
                name='rent_due_date'
                value={addApartment.rent_due_date}
                onChange={handleChangeAddApartment}
                required
                autoComplete='off'
                className='r-date-input'
              />
            </div>
            <div className='renew-status'>
              <label>Would you love to renew your rent </label>
              <div className='radio-btns'>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    name='renew_rent'
                    value='Yes'
                    checked={addApartment.renew_rent === true}
                    onChange={handleChangeRenewTerms}
                    className='btn-input'
                  />
                  <p className='ppt-details'>Yes</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    name='renew_rent'
                    value='No'
                    checked={addApartment.renew_rent === false}
                    onChange={handleChangeRenewTerms}
                    className='btn-input'
                  />
                  <p className='ppt-details'>No</p>
                </div>
              </div>
            </div>
            <button
              disabled={isLoading}
              className={
                isLoading ? 'btn-disabled add-tenant' : 'btn add-tenant'
              }
            >
              {isLoading ? (
                <div className='login-spinner'>
                  <div className='spinner'></div>
                  <p>Add Apartment</p>
                </div>
              ) : (
                <p className='login-btn'>Add Apartment</p>
              )}
            </button>
          </form>
        </section>
      </TenantAAD>
    </>
  )
}
const TenantAAD = styled.section`
  .ap-section {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
  }
  .error {
    color: #ff0000;
    text-align: left;
    margin: 10px 0;
  }
  .success {
    color: green;
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
    font-weight: 17px;
    color: #000;
    border-radius: 3px;
    background: transparent;
  }
  .user-select {
    width: 200px;
    height: 48px;
    border: 1px solid black;
    padding: 0 10px;
    border-radius: 4px;
  }
  select {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    outline: none;
    background: transparent;
    border: transparent;
    color: #000;
    font-family: inherit;
  }
  label {
    margin: 10px 0;
    font-size: 16px;
  }
  .t-name-input {
    width: 500px;
    height: 48px;
  }
  .rent-date {
    display: flex;
    gap: 20px;
    width: 500px;
    margin: 10px 0;
  }
  .r-date-input {
    height: 48px;
    width: 240px;
  }
  .start-date,
  .end-date {
    display: flex;
    flex-direction: column;
  }

  .d-date-input {
    width: 280px;
    height: 48px;
  }
  /* Renew Status */
  .renew-status {
    display: flex;
    flex-direction: column;
  }
  .radio-btns {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 10px 0;
    width: 200px;
  }
  .radio-btn {
    display: flex;
    align-items: center;
    width: 80px;
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
  .add-tenant {
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
      width: 95%;
    }
    .rent-date {
      width: 95%;
    }
    .start-date,
    .end-date {
      width: 50%;
    }
    .r-date-input {
      width: 86%;
    }
  }
`

export default TenantAddApartmentDetails
