import React, { useState } from 'react'
import styled from 'styled-components'

const UnitTypeDropdown = () => {
  const [firstDropdownValue, setFirstDropdownValue] = useState('')
  const [secondDropdownValue, setSecondDropdownValue] = useState('')
  const [secondDropdownDisabled, setSecondDropdownDisabled] = useState(true)

  const handleFirstDropdownChange = (event) => {
    const selectedValue = event.target.value
    setFirstDropdownValue(selectedValue)
    setSecondDropdownDisabled(false) // Enable the second dropdown
  }

  const handleSecondDropdownChange = (event) => {
    const selectedValue = event.target.value
    setSecondDropdownValue(selectedValue)
  }

  return (
    <>
      <UnitTypeD>
        <div className='unit-type'>
          <div className='unit'>
            <label>Unit Type*</label>
            <div className='select'>
              <select
                value={firstDropdownValue}
                onChange={handleFirstDropdownChange}
              >
                <option value=''>Select Option</option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </select>
            </div>
          </div>
          <div className='unit'>
            <div className='select'>
              <select
                value={secondDropdownValue}
                onChange={handleSecondDropdownChange}
                disabled={secondDropdownDisabled}
              >
                <option value=''>Select Option</option>
                <option value='suboption1'>Suboption 1</option>
                <option value='suboption2'>Suboption 2</option>
                <option value='suboption3'>Suboption 3</option>
              </select>
            </div>
          </div>
        </div>
      </UnitTypeD>
    </>
  )
}
const UnitTypeD = styled.section`
  .unit-type {
    display: flex;
    align-items: last baseline;
    gap: 30px;
    margin: 10px 0;
  }
  .unit {
    display: flex;
    flex-direction: column;
  }
  .select {
    width: 200px;
    height: 48px;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 4%;
  }
  select {
    width: 100%;
    height: 100%;
    border: transparent;
    background: transparent;
    outline: none;
    font-family: inherit;
    color: #000;
  }
  option {
    flex-shrink: 0;
  }

  @media screen and (max-width: 550px) {
    .unit-type{
      gap: 15px;
    }
    .unit,
    .unit-type{
      width: 100%;
    }
    .select {
      width: 95%;
    }
  }
`
export default UnitTypeDropdown
