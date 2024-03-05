import React, { useState } from 'react'
import styled from 'styled-components'

const RentAmountDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [startDate, setStartDate] = useState('')
  const [startDateDisabled, setStartDateDisabled] = useState(true)

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value)
    setStartDateDisabled(false)
  }

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
  }

  return (
    <>
      <RentAmtDD>
        <div className='rent-amt'>
          <div className='input'>
            <label>Rent Amount*</label>
            <div className='select'>
              <select value={selectedOption} onChange={handleDropdownChange}>
                <option value=''>Select</option>
                <option value='option1'>Monthly</option>
                <option value='option2'>Yearly</option>
                <option value='option3'>Bi yearly</option>
              </select>
            </div>
          </div>
          <div className='input'>
            <input
              type='text'
              value={startDate}
              onChange={handleStartDateChange}
              disabled={startDateDisabled}
              className='rent-t-input'
              placeholder='#40,000.00k'
            />
          </div>
        </div>
      </RentAmtDD>
    </>
  )
}
const RentAmtDD = styled.section`
  .rent-amt {
    display: flex;
    gap: 15px;
    align-items: flex-end;
  }
  .input {
    display: flex;
    flex-direction: column;
  }
  .select {
    border: 1px solid black;
    border-radius: 3px;
    padding: 0 20px;
    width: 200px;
    height: 48px;
  }
  select {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    border: 1px solid red;
  }
  input,
  select {
    background: transparent;
    font-family: inherit;
    outline: none;
    color: #000;
    border: none;
  }
  input {
    border: 1px solid black;
    border-radius: 3px;
    padding: 0 20px;
  }
  .rent-t-input {
    width: 150px;
    height: 48px;
  }
  @media screen and (max-width: 450px) {
    .select {
      width: 150px;
    }
    .rent-t-input {
      width: 120px;
    }
  }
`
export default RentAmountDropdown
