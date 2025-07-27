import React, { useState, useEffect } from 'react'
import { useFirstMandateMutation } from '../../data-layer/utils'
import { useNavigate } from 'react-router-dom'
import LandlordUploadPropertyOne from './LandlordUploadPropertyOne'
import LandlordUploadPropertyTwo from './LandlordUploadPropertyTwo'
import ModalComponent from '../Globals.js/ModalComponent'
import Button from '../Globals.js/Button'
import Stepper from '../Globals.js/Stepper'
import { useForm } from 'react-hook-form'

const totalSteps = 2

const LandlordUploadPropertyPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    // mode: 'onChange',
    defaultValues: {
      title: '',
      address: '',
      country: '',
      city: '',
      state: '',
      manager_name: '',
      manager_email: '',
      manager_phone: '',
    },
  })
  const navigate = useNavigate()
  const [uploadError, setUploadError] = useState(null)
  const [step, setStep] = useState(1)
  const addProperty = watch()

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
      reset()
    },
    onError: (error) => {},
  })

  const handleAddProperty = async (data) => {
    try {
      await postProperties(data)
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

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => handleAddProperty(data))}
        className='flex flex-col bg-white p-5 w-full'
      >
        {!!(propertiesError || uploadError) && (
          <p className='text-error text-left'>
            {uploadError || propertiesError?.error}
          </p>
        )}
        {isSuccess && (
          <p className='text-success text-left'>
            Congratulations, your property has been uploaded successfully
          </p>
        )}
        <h2 className='text-[18px] my-2.5'>Upload New Property</h2>
        <Stepper currentStep={step} totalSteps={totalSteps} />
        <div className='mt-5 w-full'>
          {step === 1 && (
            <LandlordUploadPropertyOne errors={errors} register={register} />
          )}
          {step === 2 && (
            <LandlordUploadPropertyTwo
              errors={errors}
              register={register}
              setValue={setValue}
              addProperty={addProperty}
            />
          )}
        </div>
        <div className='mt-5 flex flex-wrap gap-5 w-full'>
          {step === 1 && (
            <div className='w-[150px] h-12'>
              <Button
                theme='secondary'
                btnText='Cancel'
                btnFunction={prevStep}
              />
            </div>
          )}
          {step === 2 && (
            <div className='w-[170px] h-12'>
              <Button
                icon='back'
                btnText='Go Back'
                btnFunction={prevStep}
                theme='secondary'
              />
            </div>
          )}
          {step === 1 && (
            <div className='w-[200px] h-12'>
              <Button btnText='Save & Continue' btnFunction={nextStep} />
            </div>
          )}
          {step === 2 && (
            <div className='w-[250px] h-12'>
              <Button
                btnText='Save & Upload Property'
                isLoading={isLoading}
                btnFunction={handleAddProperty}
              />
            </div>
          )}
        </div>
      </form>
      <div>
        {isSuccess && (
          <ModalComponent
            textOne='Congratulations, your property has been uploaded successfully'
            textTwo='Redirecting...'
          />
        )}
      </div>
    </>
  )
}

export default LandlordUploadPropertyPage