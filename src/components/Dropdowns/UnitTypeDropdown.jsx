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
      <Wrapper>
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
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .unit-type {
    display: flex;
    justify-content: space-between;
    align-items: last baseline;
    width: 500px;
    margin: 10px 0;
  }
  .unit {
    display: flex;
    flex-direction: column;
  }
  .select {
    width: 200px;
    height: 40px;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 5px;
  }
  select {
    width: 100%;
    margin: 0 auto;
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
  @media screen and (max-width: 1250px) {
    .rent-durations {
      width: 90%;
    }
  }
  @media screen and (max-width: 1050px) {
    .rent-durations {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media screen and (max-width: 700px) {
    .unit-type {
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
    }
    .unit{
      margin: 10px 0;
    }
  }
`
export default UnitTypeDropdown
