import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import UploadPptOne from '../UploadPpt/UploadPptOne'
import UploadPptTwo from '../UploadPpt/UploadPptTwo'
import UploadPptThree from '../UploadPpt/UploadPptThree'
import { IoMdArrowBack } from 'react-icons/io'
import Reload from '../../hooks/Reload'
import CongratsModal from '../modal/CongratsModal'
import { FirstMandate } from '../../context/Context'

const totalSteps = 3

const UploadPptStepper = () => {
  const [step, setStep] = useState(1)
  const [uploadNewProperty, setUploadNewProperty] = useState(false)
  const [rentStatus, setRentStatus] = useState('option2')
  const { modal, toggleModal } = useContext(FirstMandate)

  const handleRentStatus = (e) => {
    setRentStatus(e.target.value)
  }

  const uploadProperty = () => {
    setUploadNewProperty(true)
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }
  const segmentWidth = `${100 / totalSteps}%`

  return (
    <>
      <Wrapper>
        {!uploadNewProperty ? (
          <section className='upload-l-ppt'>
            <Reload />
            <h2>Upload New Property</h2>
            <label className='upload-label'>
              Please pick the type of property you’d love to Upload
            </label>
            <div className='radio-btns-unit'>
              <div className='radio-btn-unit'>
                <input
                  type='radio'
                  value='option1'
                  checked={rentStatus === 'option1'}
                  onChange={handleRentStatus}
                  className='btn-input'
                />
                <p className='unit-ppt-details'>Single Unit Property</p>
              </div>
              <div className='radio-btn-unit'>
                <input
                  type='radio'
                  value='option2'
                  checked={rentStatus === 'option2'}
                  onChange={handleRentStatus}
                  className='btn-input'
                />
                <p className='unit-ppt-details'>Multiple Unit Property</p>
              </div>
            </div>
            <p className='continue-btn' onClick={uploadProperty}>
              Continue
            </p>
          </section>
        ) : (
          <div className='multi-step-form'>
            <h2>Upload New Property</h2>
            {step === 1 && <p className='active-step'>1 of 3</p>}
            {step === 2 && <p className='active-step'>2 of 3</p>}
            {step === 3 && <p className='active-step'>3 of 3</p>}
            <div className='step-indicator'>
              <div className='progress-bar'>
                <span
                  className='indicator'
                  style={{ width: `calc(${segmentWidth} * ${step})` }}
                ></span>
              </div>
            </div>
            <div className='step-content'>
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
            </div>
            <div className='step-buttons'>
              {step === 1 && (
                <button
                  onClick={() => setUploadNewProperty(false)}
                  className='prev-button'
                >
                  Cancel
                </button>
              )}
              {step > 1 && (
                <div className='prev-button back'>
                  <IoMdArrowBack className='icon' />
                  <button onClick={prevStep}>Go back</button>
                </div>
              )}
              {step < 3 && (
                <button className='next-button' onClick={nextStep}>
                  Save & Continue
                </button>
              )}
              {step === 3 && (
                <button onClick={toggleModal} className='next-button'>
                  Save & Upload Property
                </button>
              )}
            </div>
          </div>
        )}
        {/* Congratulations Conponent */}
      </Wrapper>
      <div>{modal && <CongratsModal />}</div>
    </>
  )
}

const Step1 = () => {
  return (
    <div>
      <Reload />
      <UploadPptOne />
    </div>
  )
}

const Step2 = () => {
  return (
    <div>
      <Reload />
      <UploadPptTwo />
    </div>
  )
}

const Step3 = () => {
  return (
    <div>
      <Reload />
      <UploadPptThree />
    </div>
  )
}

const Wrapper = styled.section`
  width: 100%;
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
  .radio-btns-unit {
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
  .btn-input {
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
  /* Multi stepper */
  .multi-step-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;
  }

  .step-indicator {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    width: 400px;
    position: relative;
  }

  .active-step {
    margin: 20px 0;
    font-size: 17px;
  }
  .progress-bar {
    position: absolute;
    width: 100%;
    height: 1px;
    background: #e0e0e0;
  }
  .indicator {
    position: absolute;
    height: 2px;
    background: #000;
  }
  .step-content {
    margin-top: 20px;
    width: 100%;
  }

  .step-buttons {
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
  }
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #000;
  }
  .icon {
    margin-right: 5px;
  }
  .prev-button,
  .next-button {
    padding: 15px 20px;
    color: #000;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  .prev-button {
    margin-right: 20px;
    background-color: #ffdfe2;
  }
  .next-button {
    background-color: #fedf7e;
  }
  @media screen and (max-width: 900px) {
    .radio-btns-unit {
      flex-direction: column;
      width: 90%;
    }
    .upload-l-ppt {
      width: 90%;
      margin: 0 auto;
      padding: 20px 0;
    }
  }

  @media screen and (max-width: 420px) {
    .step-indicator {
      width: 350px;
    }
    .radio-btns-unit {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 370px) {
    .step-indicator {
      width: 280px;
    }
  }
`

export default UploadPptStepper
