import React from 'react'
import styled from 'styled-components'
import RentTermsDropdown from '../Dropdowns/RentTermsDropdown'
import RentAmountDropdown from '../Dropdowns/RentAmountDropdown'
import RentPaymentDropdown from '../Dropdowns/RentPaymentDropdown'

const UploadPptThree = () => {
  return (
    <>
      <UploadPThree>
        <section>
          <div className='section'>
            <div className='input'>
              <label>Tenants Name*</label>
              <input
                type='text'
                placeholder='Enter Full Name '
                className='phone-number'
              />
            </div>
          </div>
          <div className='section'>
            <div className='input'>
              <label>Tenant Email*</label>
              <input
                type='email'
                placeholder='Enter Email'
                className='phone-number'
              />
            </div>
          </div>
          <div className='section'>
            <div className='input'>
              <label>Tenant Phone*</label>
              <input
                type='text'
                placeholder='Enter Phone Number'
                className='phone-number'
              />
            </div>
          </div>
          <div>
            <RentTermsDropdown />
          </div>
          <div>
            <RentAmountDropdown />
          </div>
            <div className='input'>
              <label>Current Rent Payment Status*</label>
              <p className='part-payment'>Paid in Part</p>
            </div>
          <div>
            <RentPaymentDropdown />
          </div>
          <div className='utilities'>
            <label>Payments to be managed apart from Rent</label>
            <div className='checkboxes'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Security</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Electricity</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Water</p>
              </div>
            </div>
          </div>
        </section>
      </UploadPThree>
    </>
  )
}
const UploadPThree = styled.section`
  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
    margin: 10px 0;
  }
  label {
    margin: 10px 0;
    font-size: 18px;
  }
  input {
    outline: none;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-size: 15px;
    color: #000;
    border-radius: 3px;
    background: transparent;
  }
  .phone-number {
    height: 40px;
    width: 500px;
  }
  .part-payment {
    background-color: #ff7a00;
    padding: 10px 0;
    width: 200px;
    border-radius: 3px;
    color: #ffff;
    text-align: center;
  }
  /* Checkbox */
  .utilities {
    margin: 10px 0;
  }
  .checkboxes {
    width: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    align-items: center;
  }
  .checkbox {
    display: flex;
    align-items: center;
    margin: 20px 0;
    width: 130px;
    flex-shrink: 0;
  }
  .ppt-details {
    margin-left: 10px;
    flex-shrink: 0;
  }
  .checkbox-input {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: 520px) {
    .checkboxes {
      width: 350px;
      grid-template-columns: repeat(2, 1fr);
    }
    .phone-number {
      width: 350px;
    }
  }
  @media screen and (max-width: 350px) {
    .checkboxes {
      width: 300px;
    }
    .phone-number {
      width: 280px;
    }
  }
`
export default UploadPptThree
