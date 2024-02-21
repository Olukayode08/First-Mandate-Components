import React, { useState } from 'react'
import styled from 'styled-components'
import DurationDropdown from '../Dropdowns/DurationDropdown'
import RentDueDropdown from '../Dropdowns/RentDueDropdown'

const UploadPptTwo = () => {
  const [rentStatus, setRentStatus] = useState('option1')

  const handleRentStatus = (e) => {
    setRentStatus(e.target.value)
  }
  return (
    <>
      <Wrapper>
        <section>
          <div className='section'>
            <div className='input'>
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
          </div>

          <div className='section'>
            <div className='input'>
              <label>
                Tenant(s) Name
                <span> (click the add button to add more tenents name)</span>
              </label>
              <div className='tenants-name'>
                <input
                  type='text'
                  placeholder='Tenant 1 Name'
                  className='t-name-input'
                />
              </div>
            </div>
          </div>
          <div className='rent-duration'>
            <DurationDropdown />
          </div>
          <div className='rent-due'>
            <RentDueDropdown />
          </div>
          <div className='input'>
            <label>
              Write something fascinating about your property to attract tenents{' '}
              <span>(you can skip)</span>
            </label>
            <input type='text' className='abt-ppt-input' />
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
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
  .radio-btns {
    width: 200px;
  }
  .radio-btn,
  .radio-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  .btn-input {
    width: 20px;
  }
  .ppt-details {
    margin-left: 10px;
  }

  span {
    color: red;
    font-size: 13px;
  }
  input {
    /* width: 300px; */
    height: 40px;
    outline: none;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-weight: 17px;
    color: #000;
    border-radius: 5px;
  }
  .tenants-name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
  }
  .abt-ppt-input,
  .t-name-input {
    width: 500px;
  }
  .abt-ppt-input{
    height: 65px;
  }
  .rent-duration,
  .rent-due {
    width: 100%;
  }

  @media screen and (max-width: 520px) {
    .abt-ppt-input,
    .t-name-input {
      width: 350px;
    }
  }
  @media screen and (max-width: 350px) {
    .abt-ppt-input,
    .t-name-input {
      width: 280px;
    }
  }
`

export default UploadPptTwo
