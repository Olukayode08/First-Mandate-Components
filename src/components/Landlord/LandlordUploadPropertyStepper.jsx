import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import Reload from '../../hooks/Reload'
import { useFirstMandateMutation } from '../../data-layer/utils'
import { useNavigate } from 'react-router-dom'
import LandlordUploadPropertyOne from './LandlordUploadPropertyOne'
import LandlordUploadPropertyTwo from './LandlordUploadPropertyTwo'
import LandlordCongratsModal from '../modal/LandlordCongratsModal'

const totalSteps = 2
const LandlordUploadPropertyStepper = () => {
  const navigate = useNavigate()
  const [uploadError, setUploadError] = useState(null)
  const [step, setStep] = useState(1)
  const [addProperty, setAddProperty] = useState({
    title: '',
    address: '',
    country: '',
    city: '',
    state: '',
    manager_name: '',
    manager_email: '',
    manager_phone: '',
  })
  const handleChangeAddProperty = (e) => {
    setAddProperty({ ...addProperty, [e.target.name]: e.target.value })
  }

  const {
    mutateAsync: postProperties,
    isLoading,
    error: propertiesError,
    isSuccess,
  } = useFirstMandateMutation(`/properties`, {
    onSuccess: (data) => {
      setTimeout(() => {
        navigate('/landlord/properties')
      }, 3000)
    },
    onError: (error) => {},
  })

  const handleAddProperty = async (e) => {
    // const payload = {
    //   title: addProperty.title,
    //   address: addProperty.address,
    //   country: addProperty.country,
    //   city: addProperty.city,
    //   state: addProperty.state,
    //   manager_name: addProperty.manager_name,
    //   manager_email: addProperty.manager_email,
    //   manager_phone: addProperty.manager_phone,
    // }
    const {
      title,
      address,
      country,
      city,
      state,
      manager_name,
      manager_email,
      manager_phone,
    } = addProperty
    const payload = {
      title,
      address,
      country,
      city,
      state,
    }
    // Only include landlord details if they are filled
    if (manager_name.trim() !== '') {
      payload.manager_name = manager_name
    }
    if (manager_email.trim() !== '') {
      payload.manager_email = manager_email
    }
    if (manager_phone.trim() !== '') {
      payload.manager_phone = manager_phone
    }
    try {
      await postProperties(payload)
    } catch (e) {}
  }
  // Clear Error
  useEffect(() => {
    setUploadError('')
  }, [
    addProperty.title,
    addProperty.address,
    addProperty.country,
    addProperty.city,
    addProperty.state,
    addProperty.manager_name,
    addProperty.manager_email,
    addProperty.manager_phone,
  ])

  const nextStep = () => {
    if (
      addProperty.title &&
      addProperty.address &&
      addProperty.country &&
      addProperty.city &&
      addProperty.state
      // addProperty.manager_phone &&
      // addProperty.manager_name &&
      // addProperty.manager_email
    ) {
      setStep(step + 1)
    } else {
      setUploadError('Please fill in all required fields.')
    }
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
      <LUploadPS>
        <section>
          <div className='multi-step-form'>
            {!!(propertiesError || uploadError) && (
              <p className='error'>{uploadError || propertiesError?.error}</p>
            )}
            {isSuccess && (
              <p className='error success'>
                Congratulations, your property has been uploaded successfully
              </p>
            )}
            <h2>Upload New Property</h2>
            {step === 1 && <p className='active-step'>1 of 2</p>}
            {step === 2 && <p className='active-step'>2 of 2</p>}
            <div className='step-indicator'>
              <div className='progress-bar'>
                <span
                  className='indicator'
                  style={{ width: `calc(${segmentWidth} * ${step})` }}
                ></span>
              </div>
            </div>
            <div className='step-content'>
              {step === 1 && (
                <Step1
                  addProperty={addProperty}
                  handleChangeAddProperty={handleChangeAddProperty}
                />
              )}
              {step === 2 && (
                <Step2
                  addProperty={addProperty}
                  handleChangeAddProperty={handleChangeAddProperty}
                />
              )}
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
                <button
                  className={isLoading ? 'btn-disabled' : 'btn'}
                  onClick={handleAddProperty}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className='login-spinner'>
                      <div className='spinner'></div>
                      <p>Save & Upload Property</p>
                    </div>
                  ) : (
                    <p className='login-btn'>Save & Upload Property</p>
                  )}
                </button>
              )}
            </div>
          </div>
        </section>
      </LUploadPS>
      {/* Congratulations Conponent */}
      <div>{isSuccess && <LandlordCongratsModal />}</div>
    </>
  )
}

const Step1 = ({ addProperty, handleChangeAddProperty, setAddProperty }) => {
  return (
    <div>
      <Reload />
      <LandlordUploadPropertyOne
        addProperty={addProperty}
        handleChangeAddProperty={handleChangeAddProperty}
      />
    </div>
  )
}

const Step2 = ({ addProperty, handleChangeAddProperty, setAddProperty }) => {
  return (
    <div>
      <Reload />
      <LandlordUploadPropertyTwo
        addProperty={addProperty}
        handleChangeAddProperty={handleChangeAddProperty}
      />
    </div>
  )
}

const LUploadPS = styled.section`
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
  .error {
    color: #ff0000;
    text-align: left;
    margin: 10px 0;
  }
  .success {
    color: green;
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
    border-radius: 4px;
    padding: 0 18px;
    gap: 5px;
    flex-shrink: 0;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: #000;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 16px;
    height: 50px;
  }
  .prev-button {
    background-color: #ffdfe2;
    border-radius: 4px;
    padding: 0 18px;
  }
  .next-button {
    background-color: #fedf7e;
    border-radius: 4px;
    padding: 0 18px;
  }
  .btn {
    background-color: #fedf7e;
    color: #000;
    border-radius: 4px;
    padding: 0 18px;
  }
  .btn-disabled {
    background: #00000080;
    cursor: not-allowed;
    color: #fff;
    border-radius: 4px;
    padding: 0 18px;
  }
  .login-spinner {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .spinner {
    border: 3px solid #fff;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 1s linear infinite;
  }
  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
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

export default LandlordUploadPropertyStepper
