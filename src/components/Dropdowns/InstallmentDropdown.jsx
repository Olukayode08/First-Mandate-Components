import React from 'react'
import styled from 'styled-components'
const paymentTypes = ['Cash', 'Credit Card', 'Bank Transfer']
const paymentInstallment = ['1', '2', '3', '4', '5']

const InstallmentDropdown = ({
  handleChangeAddTenant,
  addTenant,
  handlePaymentTypeChange,
  handleInstallmentChange,
}) => {
  return (
    <>
      <InstallmentDD>
        <section className='select-section'>
          <div className='select'>
            <label>Rent Payment Type*</label>
            <div className='user-select'>
              <select
                id='payment_type'
                name='payment_type'
                value={addTenant.payment_type}
                onChange={handlePaymentTypeChange}
              >
                <option value=''>Select</option>
                {paymentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='select'>
            <label>Number of Installments*</label>
            <div className='user-select'>
              <select
                id='no_of_installments'
                name='no_of_installments'
                value={addTenant.no_of_installments}
                onChange={handleInstallmentChange}
                disabled={!addTenant.payment_type}
              >
                <option value=''>Select Installment</option>
                {paymentInstallment.map((installment) => (
                  <option key={installment} value={installment}>
                    {installment}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='select'>
            <label>Amount for each Installment*</label>
              <input
                type='text'
                id='rent_amount'
                name='rent_amount'
                placeholder='#100,000.00'
                value={addTenant.rent_amount}
                onChange={handleChangeAddTenant}
                disabled={!addTenant.no_of_installments}
              />
            </div>
        </section>
      </InstallmentDD>
    </>
  )
}
const InstallmentDD = styled.section`
  .select-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 10px 0;
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
  input {
    width: 200px;
    height: 48px;
  }
  option {
    flex-shrink: 0;
  }
`
export default InstallmentDropdown
