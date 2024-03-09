import React, { useState } from 'react'
import styled from 'styled-components'
import UnitTypeDropdown from '../Dropdowns/UnitTypeDropdown'

const UploadUnit = () => {
  const [rentStatus, setRentStatus] = useState('option1')

  const handleRentStatus = (e) => {
    setRentStatus(e.target.value)
  }
  return (
    <>
      <UploadU>
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
            <label>Unit Type*</label>
            <UnitTypeDropdown />
          </div>
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
                <p className='ppt-details'>Occupied</p>
              </div>
              <div className='radio-btn'>
                <input
                  type='radio'
                  value='option2'
                  checked={rentStatus === 'option2'}
                  onChange={handleRentStatus}
                  className='btn-input'
                />
                <p className='ppt-details'>Vacant</p>
              </div>
            </div>
          </div>
        </section>
      </UploadU>
    </>
  )
}
const UploadU = styled.section`
  .unit-h {
    width: 80px;
    margin: 10px 0;
    text-align: center;
    border-radius: 4px;
    background-color: #f6f6f8;
    padding: 13px 0;
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

export default UploadUnit
