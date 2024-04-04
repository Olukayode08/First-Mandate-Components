import React from 'react'
import styled from 'styled-components'
import ManagerRentTermsDropdown from '../Dropdowns/ManagerRentTermsDropdown'
import ManagerRentAmountDropdown from '../Dropdowns/ManagerRentAmountDropdown'

const ManagerUploadPropertyTwo = ({
  handleChangeAddProperty,
  setAddProperty,
  addProperty,
}) => {
  return (
    <>
      <MUploadPT>
        <section>
          <div>
            <ManagerRentTermsDropdown />
          </div>
          <div>
            <ManagerRentAmountDropdown />
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
      </MUploadPT>
    </>
  )
}
const MUploadPT = styled.section`
  .section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  label {
    margin: 10px 0;
    font-size: 18px;
  }
  .p-status {
    display: flex;
    gap: 20px;
  }
  .payment {
    height: 48px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
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
    border-radius: 4px;
    background: transparent;
  }
  /* Checkbox */
  .utilities {
    margin: 10px 0;
  }
  .checkboxes {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 450px;
    justify-content: space-between;
    align-items: center;
  }
  .checkbox {
    display: flex;
    align-items: center;
    margin: 20px 0;
    gap: 10px;
    flex-shrink: 0;
  }
  .ppt-details {
    flex-shrink: 0;
  }
  .checkbox-input {
    width: 18px;
    height: 18px;
  }
  @media screen and (max-width: 750px) {
    .p-status {
      flex-direction: column;
      gap: 15px;
    }
  }
  @media screen and (max-width: 520px) {
    .checkboxes {
      justify-content: space-between;
      width: 95%;
    }
  }
`
export default ManagerUploadPropertyTwo
