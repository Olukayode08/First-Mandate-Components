import React, { useState } from 'react'
import styled from 'styled-components'

const RadioBtn = () => {
  const [radioOne, setRadioOne] = useState(false)
  const [radioTwo, setRadioTwo] = useState(false)

  const toggleRadioOneButton = () => {
    setRadioOne(!radioOne)
  }
  const toggleRadioTwoButton = () => {
    setRadioTwo(!radioTwo)
  }

  return (
    <>
      <RadioB>
        <div>
          <span className='label'>Radio Buttons</span>
          <div className='radio-container'>
            <div
              onClick={toggleRadioOneButton}
              className={`radio ${radioOne ? 'checked' : ''}`}
            >
              {radioOne && <div className='checkmark-circle'></div>}
            </div>
            <div
              onClick={toggleRadioTwoButton}
              className={`radio ${radioTwo ? 'checked' : ''}`}
            >
              {radioTwo && <div className='checkmark-circle'></div>}
            </div>
          </div>
        </div>
      </RadioB>
    </>
  )
}
const RadioB = styled.main`
  .radio-container {
    display: flex;
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
    cursor: pointer;
  }
  .checked {
    font-weight: bold;
  }
  .checkmark-circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #000;
  }
`
export default RadioBtn
