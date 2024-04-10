import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const paymentTypes = ['One Time', 'Installment']

const LandlordInstallmentDropdown = ({
  handleChangeAddTenant,
  addTenant,
  handlePaymentTypeChange,
  handleInstallmentChange,
}) => {
  const [amountPerInstallment, setAmountPerInstallment] = useState('')

  useEffect(() => {
    if (addTenant.payment_type === 'One Time') {
      handleInstallmentChange({ target: { value: '1' } })
      setAmountPerInstallment(addTenant.rent_amount)
    } else if (
      addTenant.no_of_installments !== '' &&
      addTenant.rent_amount !== ''
    ) {
      const amountPerInstallment =
        parseFloat(addTenant.rent_amount) /
        parseFloat(addTenant.no_of_installments)
      setAmountPerInstallment(amountPerInstallment.toFixed(2))
    }
  }, [
    addTenant.payment_type,
    addTenant.no_of_installments,
    addTenant.rent_amount,
  ])


  return (
    <>
      <MInstallmentD>
        <div className='installment-amount'>
          <div className='due-date'>
            <label>Rent Amount</label>
            <input
              type='text'
              name='rent_amount'
              required
              value={addTenant.rent_amount}
              onChange={handleChangeAddTenant}
              autoComplete='off'
              placeholder='100,000'
              className='due-date-input'
            />
          </div>
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
                <input
                  type='text'
                  id='no_of_installments'
                  name='no_of_installments'
                  value={addTenant.no_of_installments}
                  onChange={handleInstallmentChange}
                  disabled={!addTenant.payment_type}
                  placeholder='Enter number of installments'
                />
            </div>
            <div className='select'>
              <label>Amount for each Installment*</label>
              <input type='text' value={amountPerInstallment} disabled />
            </div>
          </section>
        </div>
      </MInstallmentD>
    </>
  )
}
const MInstallmentD = styled.section`
  .install-ment-amount {
    display: flex;
    flex-direction: column;
  }
  .select-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
export default LandlordInstallmentDropdown
