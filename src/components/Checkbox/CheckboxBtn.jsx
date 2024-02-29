import React, {useState} from 'react'
import styled from 'styled-components'

const CheckboxBtn = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <CheckboxB>
        <div>
          {/* <span className='label'>Checkbox Buttons</span> */}
          <label className='checkbox-container'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className='checkmark'
              style={{ opacity: isChecked ? 1 : 0.5 }}
            ></span>
          </label>
        </div>
      </CheckboxB>
    </>
  )
}
const CheckboxB = styled.main`
  .checkbox-container {
    display: inline-block;
    position: relative;
    padding-left: 25px;
    margin: 20px 15px 20px 0;
    cursor: pointer;
  }

  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border: 1px solid #ccc;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox-container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`
export default CheckboxBtn
