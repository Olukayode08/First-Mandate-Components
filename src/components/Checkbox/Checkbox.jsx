import React, { useState } from 'react'
import styled from 'styled-components'

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='checkbox-container' onClick={toggleCheckbox}>
      <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
        {isChecked && <span className='checkmark'>&#10003;</span>}
      </div>
      <span className='label'>Checkbox</span>
    </div>
  )
}

const RadioButton = () => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleRadioButton = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='radio-container' onClick={toggleRadioButton}>
      <div className={`radio ${isChecked ? 'checked' : ''}`}>
        {isChecked && <div className='checkmark-circle'></div>}
      </div>
      <span className='label'>Radio Button</span>
    </div>
  )
}

export default function FCheckbox() {
  return (
    <>
      <CheckMark>
        <div className='App'>
          <Checkbox />
          <RadioButton />
        </div>
      </CheckMark>
    </>
  )
}
const CheckMark = styled.section`
  .checkbox-container,
  .radio-container {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .checkbox{
    width: 20px;
    height: 20px;
    border: 2px solid #000;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .radio {
    width: 19px;
    height: 19px;
    border: 1px solid #000;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 20px;
  }
  .checked {
    font-weight: bold;
  }

  .checkmark {
    font-size: 12px;
  }

  .checkmark-circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #000;
  }

  .label {
    margin-left: 10px;
  }
`