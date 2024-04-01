import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useFirstMandateMutation,
  useFirstMandateQuery,
} from '../../data-layer/utils'
import InstallmentDropdown from '../Dropdowns/InstallmentDropdown'

const token = localStorage.getItem('token')
const rentTerms = [
  '1 month',
  '2 month',
  '3 month,',
  '4 month',
  '5 month',
  '6 month',
  '7 month',
  '8 month',
  '9 month,',
  '10 month',
  '11 month',
  '12 month',
]

const LandlordAddNewTenant = () => {
  const navigate = useNavigate()
  const { unitId } = useParams()

  const endpoint = unitId
    ? `/tenants/${unitId}`
    : `/property-units/${unitId}/tenants`

  const [addTenant, setAddTenant] = useState({
    name: '',
    email: '',
    phone: '',
    phone_two: '',
    lease_start: '',
    lease_end: '',
    payment_type: '',
    no_of_installments: '',
    rent_amount: '',
    rent_payment_status: '',
    rent_terms: '',
    rent_due_date: '',
  })

  const handlePaymentTypeChange = (e) => {
    const { value } = e.target
    setAddTenant({ ...addTenant, payment_type: value, no_of_installments: '' })
  }

  const handleInstallmentChange = (e) => {
    const { value } = e.target
    setAddTenant({ ...addTenant, no_of_installments: value })
  }
  const handleChangeAddTenant = (e) => {
    setAddTenant({ ...addTenant, [e.target.name]: e.target.value })
  }

  const handleTenantUpdate = (fieldName, value) => {
    setAddTenant((prev) => ({ ...prev, [fieldName]: value }))
  }

  const {
    mutateAsync: postTenant,
    isLoading,
    error,
  } = useFirstMandateMutation(
    // `/${unitId ? `tenants/${unitId}` : `property-units/${unitId}/tenants`}`,
    // endpoint,
    `/property-units/${unitId}/tenants`,

    {
      method: 'POST',

      // method: unitId ? 'PUT' : 'POST',
      onSuccess: (data) => {
        console.log(data)
        setTimeout(() => {
          navigate('/landlord/tenants')
        }, 3000)
      },
      onError: (error) => {
        console.error(error)
      },
    }
  )

  const { data: tenantData } = useFirstMandateQuery(`/tenants/${unitId}`, {
    enabled: !!token && !!unitId,
    onSuccess: (data) => {
      console.log(data)
      handleTenantUpdate('name', data?.data?.name)
      handleTenantUpdate('email', data?.data?.email)
      handleTenantUpdate('phone', data?.data?.phone)
      handleTenantUpdate('lease_start', data?.data?.lease_start)
      handleTenantUpdate('lease_end', data?.data?.lease_end)
      handleTenantUpdate('payment_type', data?.data?.payment_type)
      handleTenantUpdate('no_of_installments', data?.data?.no_of_installments)
      handleTenantUpdate('rent_payment_status', data?.data?.rent_payment_status)
      handleTenantUpdate('rent_terms', data?.data?.rent_terms)
      handleTenantUpdate('rent_due_date', data?.data?.rent_due_date)
    },
  })

  const handleTenant = async (e) => {
    e.preventDefault()
    const payload = {
      name: addTenant.name,
      email: addTenant.email,
      phone: addTenant.phone,
      lease_start: addTenant.lease_start,
      lease_end: addTenant.lease_end,
      payment_type: addTenant.payment_type,
      no_of_installments: addTenant.no_of_installments,
      rent_amount: addTenant.rent_amount,
      rent_payment_status: addTenant.rent_payment_status,
      rent_terms: addTenant.rent_terms,
      rent_due_date: addTenant.rent_due_date,
    }
    try {
      await postTenant(payload)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <LANTenant>
        <section>
          <form onSubmit={handleTenant} className='l-section'>
            {error && <p className='error'>{error?.message}</p>}
            <h3>{unitId ? 'Add New Tenant' : 'Edit Tenant'}</h3>
            <p className='unit'>Love Unit</p>
            <div className='input'>
              <label>Name</label>
              <input
                type='text'
                name='name'
                required
                value={addTenant.name}
                onChange={handleChangeAddTenant}
                autoComplete='off'
                placeholder="Enter tenant's name"
                className='t-name-input'
              />
            </div>
            <div className='input'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                required
                value={addTenant.email}
                onChange={handleChangeAddTenant}
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
                value={addTenant.phone}
                onChange={handleChangeAddTenant}
                autoComplete='off'
                placeholder='+234'
                className='t-name-input'
              />
            </div>
            {!unitId && (
              <div className='input'>
                <label>Phone</label>
                <input
                  type='text'
                  name='phone_two'
                  value={addTenant.phone_two}
                  onChange={handleChangeAddTenant}
                  autoComplete='off'
                  placeholder='+234'
                  className='t-name-input'
                />
              </div>
            )}
            <div className='rent-date'>
              <div className='start-date'>
                <label>Lease Start Date</label>
                <input
                  type='date'
                  name='lease_start'
                  required
                  value={addTenant.lease_start}
                  onChange={handleChangeAddTenant}
                  autoComplete='off'
                  placeholder='dd/mm/yyyy'
                  className='r-date-input'
                />
              </div>
              <div className='end-date'>
                <label>Lease End Date</label>
                <input
                  type='date'
                  name='lease_end'
                  required
                  value={addTenant.lease_end}
                  onChange={handleChangeAddTenant}
                  autoComplete='off'
                  placeholder='dd/mm/yyyy'
                  className='r-date-input'
                />
              </div>
            </div>
            <div className='rent-date'>
              <InstallmentDropdown
                addTenant={addTenant}
                handleInstallmentChange={handleInstallmentChange}
                handlePaymentTypeChange={handlePaymentTypeChange}
                handleChangeAddTenant={handleChangeAddTenant}
              />
            </div>
            <div className='select'>
              <label>Rent Payment Status*</label>
              <div className='user-select'>
                <select
                  id='rent_payment_status'
                  name='rent_payment_status'
                  required
                  value={addTenant.rent_payment_status}
                  onChange={handleChangeAddTenant}
                >
                  <option value=''>Select</option>
                  <option value='Paid in part'>Paid in part</option>
                  <option value='Paid in full'>Paid in full</option>
                  <option value='Not Paid'>Not Paid</option>
                </select>
              </div>
            </div>
            <div className='select'>
              <label>Rent Terms*</label>
              <div className='user-select'>
                <select
                  id='rent_terms'
                  name='rent_terms'
                  value={addTenant.rent_terms}
                  required
                  onChange={handleChangeAddTenant}
                >
                  <option value=''>Select</option>
                  {rentTerms.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='due-date'>
              <label>Rent Payment Due Date</label>
              <input
                type='date'
                name='rent_due_date'
                required
                value={addTenant.rent_due_date}
                onChange={handleChangeAddTenant}
                autoComplete='off'
                placeholder='dd/mm/yyyy'
                className='due-date-input'
              />
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
                  <p>{unitId ? 'Add Tenant' : 'Edit Tenant'}</p>
                </div>
              ) : (
                <p className='login-btn'>
                  {unitId ? 'Add Tenant' : 'Edit Tenant'}
                </p>
              )}
            </button>
          </form>
        </section>
      </LANTenant>
    </>
  )
}
const LANTenant = styled.section`
  .l-section {
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
  .add-t {
    margin: 20px 0;
  }
  .unit {
    margin: 10px 0;
    padding: 10px;
    max-width: 150px;
    border: 1px solid black;
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    margin: 10px 0;
    width: 100%;
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
  label {
    margin: 10px 0;
    font-size: 18px;
  }
  .t-name-input {
    width: 500px;
    height: 48px;
  }
  .rent-date {
    display: flex;
    gap: 20px;
    width: 100%;
    margin: 10px 0;
  }
  .due-date-input,
  .r-date-input {
    height: 48px;
    width: 220px;
  }
  .due-date,
  .start-date,
  .end-date,
  .rent-status {
    display: flex;
    flex-direction: column;
  }
  .due-date,
  .rent-status {
    margin: 10px 0;
  }
  .not-p {
    background-color: #ff0000;
    color: #ffffff;
    padding: 12px 0;
    width: 120px;
    text-align: center;
    border-radius: 4px;
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
  .select {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  option {
    flex-shrink: 0;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 600px) {
    .rent-date {
      gap: 10px;
    }
    .start-date,
    .end-date {
      width: 100%;
    }
    .t-name-input {
      width: 95%;
    }
    .r-date-input {
      width: 90%;
    }
    .due-date-input {
      width: 280px;
    }
  }
`

export default LandlordAddNewTenant
