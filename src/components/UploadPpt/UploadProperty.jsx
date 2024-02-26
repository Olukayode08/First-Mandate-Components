import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Reload from '../../hooks/Reload'
import { FirstMandate } from '../../context/Context'

const UploadProperty = () => {
  const { uploadProperty } = useContext(FirstMandate)
  const [rentStatus, setRentStatus] = useState('option2')
  const handleRentStatus = (e) => {
    setRentStatus(e.target.value)
  }

  return (
    <>
      <UploadP>
        <section>
          <div className='upload-l-ppt'>
            <Reload />
            <h2>Upload New Property</h2>
            <label className='upload-label'>
              Please pick the type of property you’d love to Upload
            </label>
            <div className='radio-btn-units'>
              <div className='radio-btn-unit'>
                <input
                  type='radio'
                  value='option1'
                  checked={rentStatus === 'option1'}
                  onChange={handleRentStatus}
                  className='r-btn-input'
                />
                <p className='unit-ppt-details'>Single Unit Property</p>
              </div>
              <div className='radio-btn-unit'>
                <input
                  type='radio'
                  value='option2'
                  checked={rentStatus === 'option2'}
                  onChange={handleRentStatus}
                  className='r-btn-input'
                />
                <p className='unit-ppt-details'>Multiple Unit Property</p>
              </div>
            </div>
            <p className='continue-btn' onClick={uploadProperty}>
              Continue
            </p>
          </div>
        </section>
      </UploadP>
    </>
  )
}
const UploadP = styled.section`
  .upload-l-ppt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 10px auto;
    padding: 20px;
  }
  .upload-label {
    margin: 40px 0;
    text-align: center;
    font-size: 18px;
  }
  .radio-btn-units {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    width: 600px;
  }
  .radio-btn-unit {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    margin: 10px 0;
    border: 1px solid black;
    padding: 20px;
    width: 250px;
  }
  .r-btn-input {
    width: 18px;
    height: 18px;
  }
  .unit-ppt-details {
    margin-left: 20px;
  }
  .continue-btn {
    margin: 20px 0;
    padding: 15px 0;
    width: 250px;
    text-align: center;
    background-color: #fedf7e;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    .radio-btn-units {
      flex-direction: column;
      width: 90%;
    }
    .upload-l-ppt {
      width: 90%;
      margin: 0 auto;
      padding: 20px 0;
    }
  }
`
export default UploadProperty
