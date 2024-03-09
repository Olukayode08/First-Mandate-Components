import React, { useState } from 'react'
import styled from 'styled-components'

const RentTermsDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [startDateDisabled, setStartDateDisabled] = useState(true)
  const [endDateDisabled, setEndDateDisabled] = useState(true)

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value)
    setStartDateDisabled(false)
  }

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
    setEndDateDisabled(false)
  }

  return (
    <>
      <RentTermsDD>
        <div className='rent-terms'>
          <div className='input'>
            <label>Rent term</label>
            <div className='select'>
              <select value={selectedOption} onChange={handleDropdownChange}>
                <option value=''>Select Rent Terms</option>
                <option value='option1'>1 year</option>
                <option value='option2'>2 years</option>
              </select>
            </div>
          </div>

          {/* <div className='input'>
            <label>Rent Start Date*</label>
            <input
              type='date'
              value={startDate}
              onChange={handleStartDateChange}
              disabled={startDateDisabled}
              className='rent-t-input'
            />
          </div>
          <div className='input'>
            <label>Rent End Date*</label>
            <input
              type='date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              disabled={endDateDisabled}
              className='rent-t-input'
            />
          </div> */}
        </div>
      </RentTermsDD>
    </>
  )
}
const RentTermsDD = styled.section`
  .rent-terms {
    display: flex;
    gap: 30px;
  }
  .input {
    display: flex;
    flex-direction: column;
  }
  .select {
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 20px;
    width: 200px;
    height: 48px;
  }
  select {
    width: 100%;
    height: 100%;
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
    border-radius: 4px;
    padding: 0 20px;
  }
  .rent-t-input {
    width: 200px;
    height: 48px;
  }
  @media screen and (max-width: 750px) {
    .rent-terms {
      flex-direction: column;
      gap: 0px;
    }
  }
`
export default RentTermsDropdown
