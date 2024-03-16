import React from 'react'
import styled from 'styled-components'

const TenantPaymentForm = () => {
  return (
    <>
      <TenantPF>
        <section>
          <div className='ap-section'>
            <h1>Pay Bills</h1>
            <div className='section'>
              <label>Property Name</label>
              <div className='select'>
                <select required>
                  <option value='one'>House of Elovia</option>
                  <option value='one'>House of Love</option>
                  <option value='two'>House of Peace</option>
                  <option value='three'>House of Joy</option>
                </select>
              </div>
            </div>
            <div className='section'>
              <label>Unit Name / Number</label>
              <div className='select'>
                <select required>
                  <option value='one'>Love Unit</option>
                  <option value='two'>Peace Unit</option>
                  <option value='three'>Joy Unit</option>
                </select>
              </div>
            </div>
            <div className='section'>
              <label>Payment For</label>
              <div className='d-date-input'>
                <select required>
                  <option value='one'>Rent</option>
                  <option value='one'>Water</option>
                  <option value='two'>Electricity</option>
                  <option value='three'>Waste</option>
                </select>
              </div>
            </div>

            <div className='input'>
              <label>Amount</label>
              <input
                type='text'
                placeholder='#300,000.00k'
                className='d-date-input'
              />
            </div>
            <div className='section'>
              <label>Payment Method</label>
              <div className='d-date-input'>
                <select required>
                  <option value='one'>Flutterwave</option>
                  <option value='two'>Card</option>
                  <option value='three'>Transfer</option>{' '}
                  <option value='four'>Paystack</option>
                </select>
              </div>
            </div>
            <button className='add-review'>Review</button>
          </div>
        </section>
      </TenantPF>
    </>
  )
}
const TenantPF = styled.section`
  .ap-section {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
  }
  .section,
  .input {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  .select {
    width: 500px;
    height: 48px;
    padding: 0 10px;
    border: 1px solid black;
    border-radius: 4px;
  }
  select {
    width: 100%;
    height: 100%;
    background: transparent;
    border: transparent;
    outline: none;
    color: #000;
    font-family: inherit;
    font-size: 16px;
  }
  label {
    margin: 10px 0;
    font-size: 16px;
  }
  .d-date-input {
    width: 280px;
    height: 48px;
    padding: 0 10px;
    border: 1px solid black;
    border-radius: 4px;
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

  .add-review {
    width: 100px;
    text-align: center;
    background-color: #fedf7e;
    height: 50px;
    border-radius: 4px;
    border: transparent;
    margin: 10px 0;
    font-size: 16px;
    cursor: pointer;
    font-family: inherit;
    color: #000;
  }
  @media screen and (max-width: 550px) {
    .select {
      width: 95%;
    }
    .d-date-input {
      width: 86%;
    }
  }
`

export default TenantPaymentForm
