import React, { useState } from 'react'
import styled from 'styled-components'
import UnitTypeDropdown from '../Dropdowns/UnitTypeDropdown'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const LandlordUploadUnit = () => {
  const [rentStatus, setRentStatus] = useState('option1')
  const navigate = useNavigate()

  const handleRentStatus = (e) => {
    setRentStatus(e.target.value)
  }

  const backProperties = () => {
    navigate('/landlord/properties')
  }

  return (
    <>
      <LUUnit>
        <section>
          <div className='upload-unit'>
            <h3>Upload Unit</h3>
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
            <div className='step-buttons'>
              <div onClick={backProperties} className='prev-button back'>
                <IoMdArrowBack />
                <button>Go back</button>
              </div>
              <div className='add-unit'>
                <button>Save & Add New Unit</button>
              </div>
              <button className='next-button'>Save & Continue</button>
            </div>
          </div>
        </section>
      </LUUnit>
    </>
  )
}
const LUUnit = styled.section`
  .upload-unit {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  h3 {
    margin: 10px 0;
  }
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
  /* Step buttons */
  .step-buttons {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-shrink: 0;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #000;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 16px;
    height: 50px;
  }
  .add-unit,
  .prev-button,
  .next-button {
    border-radius: 4px;
    padding: 0 18px;
  }
  .prev-button {
    background-color: #ffdfe2;
  }
  .add-unit {
    background-color: #ffffff;
    border: 1px solid black;
    height: 48px;
  }
  .next-button {
    background-color: #fedf7e;
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

export default LandlordUploadUnit
