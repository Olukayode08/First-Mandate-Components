import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import Reload from '../../hooks/Reload'
import CongratsModal from '../modal/CongratsModal'
import { FirstMandate } from '../../context/Context'
// import UploadPropertyOne from '../UploadPpt/UploadUnit'
// import UploadPropertyTwo from '../UploadPpt/UploadPropertyOne'
// import UploadPropertyThree from '../UploadPpt/UploadPropertyTwo'
import { useNavigate } from 'react-router-dom'
import UploadPropertyOne from '../UploadProperty/UploadPropertyOne'
import UploadPropertyTwo from '../UploadProperty/UploadPropertyTwo'

// import UploadProperty from '../UploadPpt/UploadProperty'

const totalSteps = 2
const UploadPropertyStepper = () => {
  const [step, setStep] = useState(1)
  const { modal, toggleModal } = useContext(FirstMandate)
  const navigate = useNavigate()

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    if (step === 1) {
      navigate('/landlord/properties')
    }
    setStep(step - 1)
  }
  const segmentWidth = `${100 / totalSteps}%`

  return (
    <>
      <UploadPS>
        <section>
          {/* {!uploadNewProperty ? (
            <UploadProperty />
          ) : (
        
          )} */}
          <div className='multi-step-form'>
            <h2>Upload New Property</h2>
            {step === 1 && <p className='active-step'>1 of 2</p>}
            {step === 2 && <p className='active-step'>2 of 2</p>}
            {/* {step === 3 && <p className='active-step'>3 of 3</p>} */}
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
              {/* {step === 3 && <Step3 />} */}
            </div>
            <div className='step-buttons'>
              {step === 1 && (
                <div className='prev-button'>
                  <button onClick={prevStep}>Cancel</button>
                </div>
              )}
              {step === 2 && (
                <div className='prev-button back'>
                  <IoMdArrowBack />
                  <button onClick={prevStep}>Go back</button>
                </div>
              )}
              {step === 1 && (
                <button className='next-button' onClick={nextStep}>
                  Save & Continue
                </button>
              )}
              {step === 2 && (
                <button onClick={toggleModal} className='next-button'>
                  Save & Upload Property
                </button>
              )}
            </div>
          </div>
        </section>
      </UploadPS>
      {/* Congratulations Conponent */}
      <div>{modal && <CongratsModal />}</div>
    </>
  )
}

const Step1 = () => {
  return (
    <div>
      <Reload />
      <UploadPropertyOne />
    </div>
  )
}

const Step2 = () => {
  return (
    <div>
      <Reload />
      <UploadPropertyTwo />
    </div>
  )
}

// const Step3 = () => {
//   return (
//     <div>
//       <Reload />
//       <UploadPropertyThree />
//     </div>
//   )
// }

const UploadPS = styled.section`
  /* Multi stepper */
  .multi-step-form {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    width: 100%;
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
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-shrink: 0;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #000;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 16px;
    height: 50px;
  }
  .prev-button,
  .next-button {
    border-radius: 4px;
    padding: 0 18px;
  }
  .prev-button {
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
  @media screen and (max-width: 320px) {
    button {
      font-size: 13px;
    }
  }
`

export default UploadPropertyStepper
