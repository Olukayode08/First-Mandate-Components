import React, { useState } from 'react'
import styled from 'styled-components'

const RentPaymentDropdown = () => {
  const [firstDropdownValue, setFirstDropdownValue] = useState('')
  const [secondDropdownValue, setSecondDropdownValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [secondDropdownDisabled, setSecondDropdownDisabled] = useState(true)
  const [inputDisabled, setInputDisabled] = useState(true)

  const handleFirstDropdownChange = (event) => {
    const value = event.target.value
    setFirstDropdownValue(value)
    if (value !== '') {
      setSecondDropdownDisabled(false)
    } else {
      setSecondDropdownDisabled(true)
      setSecondDropdownValue('')
      setInputDisabled(true)
      setInputValue('')
    }
  }

  const handleSecondDropdownChange = (event) => {
    const value = event.target.value
    setSecondDropdownValue(value)
    if (value !== '') {
      setInputDisabled(false)
    } else {
      setInputDisabled(true)
      setInputValue('')
    }
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <Wrapper>
        <div className='rent-payment'>
          <div className='input'>
            <label>Rent Payment Type*</label>
            <div className='select'>
              <select
                value={firstDropdownValue}
                onChange={handleFirstDropdownChange}
              >
                <option value=''>Select...</option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </select>
            </div>
          </div>

          <div className='input'>
            <label>Number of Installment*</label>
            <div className='select'>
              <select
                value={secondDropdownValue}
                onChange={handleSecondDropdownChange}
                disabled={secondDropdownDisabled}
              >
                <option value=''>Select...</option>
                <option value='suboption1'>Suboption 1</option>
                <option value='suboption2'>Suboption 2</option>
                <option value='suboption3'>Suboption 3</option>
              </select>
            </div>
          </div>

          <div className='input'>
            <label>Amount for each installment*</label>
            <input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
              disabled={inputDisabled}
              className='rent-t-input'
              placeholder='#100,000.00k'
            />
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .rent-payment {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
    height: 40px;
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
    width: 200px;
    height: 40px;
  }
`
export default RentPaymentDropdown
