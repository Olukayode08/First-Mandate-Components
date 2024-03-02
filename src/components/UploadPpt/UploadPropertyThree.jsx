import React from 'react'
import styled from 'styled-components'
import RentTermsDropdown from '../Dropdowns/RentTermsDropdown'
import RentAmountDropdown from '../Dropdowns/RentAmountDropdown'
import RentPaymentDropdown from '../Dropdowns/RentPaymentDropdown'

const UploadPropertyThree = () => {
  return (
    <>
      <UploadPThree>
        <section>
          <div>
            <RentTermsDropdown />
          </div>
          <div>
            <RentAmountDropdown />
          </div>
          <div className='input'>
            <label>Current Rent Payment Status*</label>
            <div className='p-status'>
              <p className='payment part-p'>Paid in Part</p>
              <p className='payment full-p'>Paid in Full</p>
              <p className='payment not-p'>Not Paid</p>
            </div>
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
  .p-status {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .payment {
    padding: 10px 0;
    width: 200px;
    border-radius: 3px;
    color: #ffff;
    text-align: center;
  }
  .part-p {
    background-color: #ff7a00;
  }
  .full-p {
    background-color: #159e23;
  }
  .not-p {
    background-color: #ff0000;
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
  }
  @media screen and (max-width: 350px) {
    .checkboxes {
      width: 300px;
    }
  }
`
export default UploadPropertyThree
