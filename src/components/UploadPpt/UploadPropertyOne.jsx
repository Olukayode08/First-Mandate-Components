import React, { useState } from 'react'
import styled from 'styled-components'
import UnitTypeDropdown from '../Dropdowns/UnitTypeDropdown'

const UploadPropertyOne = () => {
  const [rentStatus, setRentStatus] = useState('option1')

  const handleRentStatus = (e) => {
    setRentStatus(e.target.value)
  }
  return (
    <>
      <UploadPO>
        <section>
          <div className='unit-h'>Unit 1</div>
          <div className='section'>
            <div className='input'>
              <label>Unit Name</label>
              <input
                type='text'
                placeholder='Enter full name'
                className='u-name-input'
              />
            </div>
          </div>
          <div className='unit-type'>
            <UnitTypeDropdown />
          </div>
          {/* <div className='utilities'>
            <div className='checkboxes'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Furnished</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Serviced</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox-input' />
                <p className='ppt-details'>Newly built</p>
              </div>
            </div>
          </div> */}
          <div className='rent-status'>
            <label>
              Rent Status (Are there occupants in the apartment already)
            </label>
            <div className='radio-btns'>
              <div className='radio-btn'>
                <input
                  type='radio'
                  value='option1'
                  checked={rentStatus === 'option1'}
                  onChange={handleRentStatus}
                  className='btn-input'
                />
                <p className='ppt-details'>Yes</p>
              </div>
              <div className='radio-btn'>
                <input
                  type='radio'
                  value='option2'
                  checked={rentStatus === 'option2'}
                  onChange={handleRentStatus}
                  className='btn-input'
                />
                <p className='ppt-details'>No</p>
              </div>
            </div>
          </div>
        </section>
      </UploadPO>
    </>
  )
}
const UploadPO = styled.section`
  .unit-h {
    width: 80px;
    margin: 10px 0;
    text-align: center;
    background-color: #f6f6f8;
    border-radius: 4px;
    padding: 13px 0;
  }
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
    margin: 10px 0;
  }
  input {
    outline: none;
    border: 1px solid black;
    background: transparent;
    padding: 0 20px;
    font-family: inherit;
    font-weight: 17px;
    color: #000;
    border-radius: 3px;
  }
  .u-name-input {
    width: 500px;
    height: 40px;
  }
  .unit-type {
    margin: 10px 0;
  }
  /* Rent Status */
  .rent-status {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
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
    width: 200px;
  }
  .radio-btn {
    display: flex;
    align-items: center;
    margin: 10px 0;
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
  /* Checkbox */
  /* .utilities {
    margin: 15px 0;
  }
  .checkboxes {
    width: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }
  .checkbox {
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 130px;
  }
  .checkbox-input {
    width: 18px;
    height: 18px;
  } */

  @media screen and (max-width: 550px) {
    /* .checkboxes {
      width: 350px;
      grid-template-columns: repeat(2, 1fr);
    } */
    .u-name-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 350px) {
    /* .checkboxes {
      width: 300px;
    } */
    .u-name-input {
      width: 280px;
    }
  }
`

export default UploadPropertyOne
