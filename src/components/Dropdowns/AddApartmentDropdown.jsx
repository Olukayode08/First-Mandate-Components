import React, { useState } from 'react'
import styled from 'styled-components'

const AddApartmentDropdown = () => {
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
      <AADropdown>
        <div className='add-ap'>
          <div className='ap-select'>
            <select
              value={firstDropdownValue}
              onChange={handleFirstDropdownChange}
            >
              <option value=''>Country</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>
          </div>
          <div className='ap-select'>
            <select
              value={secondDropdownValue}
              onChange={handleSecondDropdownChange}
              disabled={secondDropdownDisabled}
            >
              <option value=''>State</option>
              <option value='suboption1'>Suboption 1</option>
              <option value='suboption2'>Suboption 2</option>
              <option value='suboption3'>Suboption 3</option>
            </select>
          </div>
        </div>
      </AADropdown>
    </>
  )
}
const AADropdown = styled.section`
  .add-ap {
    display: flex;
    gap: 20px;
    align-items: last baseline;
    width: 500px;
    margin: 20px 0 10px 0;
  }
  .ap-select {
    width: 240px;
    height: 48px;
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
  @media screen and (max-width: 550px) {
    .add-ap {
      width: 95%;
    }
    .ap-select{
      width: 90%;
    }
  }
`
export default AddApartmentDropdown
