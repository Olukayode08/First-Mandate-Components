import React, { useState } from 'react'
import styled from 'styled-components'
import UploadPptOne from '../UploadPpt/UploadPptOne'
import UploadPptTwo from '../UploadPpt/UploadPptTwo'
import UploadPptThree from '../UploadPpt/UploadPptThree'
import UploadPptFour from '../UploadPpt/UploadPptFour'
import { IoMdArrowBack } from 'react-icons/io'

const totalSteps = 4

const UploadPptStepper = () => {
  const [step, setStep] = useState(1)

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
        <div className='multi-step-form'>
          <h2>Upload New Property</h2>
          {step === 1 && <p className='active-step'>1 of 4</p>}
          {step === 2 && <p className='active-step'>2 of 4</p>}
          {step === 3 && <p className='active-step'>3 of 4</p>}
          {step === 4 && <p className='active-step'>4 of 4</p>}
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
            {step === 4 && <Step4 />}
          </div>
          <div className='step-buttons'>
            {step === 1 && <button className='prev-button'>Cancel</button>}
            {step > 1 && (
              <div className='prev-button back'>
                <IoMdArrowBack className='icon' />
                <button onClick={prevStep}>Go back</button>
              </div>
            )}
            {step < 4 && (
              <button className='next-button' onClick={nextStep}>
                Save & Continue
              </button>
            )}
            {step === 4 && (
              <button className='next-button'>Save & Upload Property</button>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Step1 = () => {
  return (
    <div>
      <UploadPptOne />
    </div>
  )
}

const Step2 = () => {
  return (
    <div>
      <UploadPptTwo />
    </div>
  )
}

const Step3 = () => {
  return (
    <div>
      <UploadPptThree />
    </div>
  )
}

const Step4 = () => {
  return (
    <div>
      <UploadPptFour />
    </div>
  )
}

const Wrapper = styled.section`
  .multi-step-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 0;
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
  @media screen and (max-width: 420px) {
    .step-indicator {
      width: 350px;
    }
  }
  @media screen and (max-width: 370px) {
    .step-indicator {
      width: 280px;
    }
  }
`
export default UploadPptStepper
