import React, { useState, useEffect } from 'react'
import { useFirstMandateMutation } from '../../data-layer/utils'
import { useNavigate } from 'react-router-dom'
import ManagerUploadPropertyOne from './ManagerUploadPropertyOne'
import ManagerUploadPropertyTwo from './ManagerUploadPropertyTwo'
import ModalComponent from '../Globals.js/ModalComponent'
import { useForm } from 'react-hook-form'
import Stepper from '../Globals.js/Stepper'
import Button from '../Globals.js/Button'

const totalSteps = 2
const ManagerUploadPropertyPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    // mode: 'onChange',
    defaultValues: {
      title: '',
      address: '',
      country: '',
      city: '',
      state: '',
      landlord_name: '',
      landlord_email: '',
      landlord_phone: '',
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
  } = useFirstMandateMutation(`/property-manager/properties`, {
    onSuccess: (data) => {
      setTimeout(() => {
        navigate('/manager/properties')
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
    addProperty.landlord_name,
    addProperty.landlord_email,
    addProperty.landlord_phone,
  ])

  const nextStep = async () => {
    const isValid = await trigger()
    if (
      addProperty.title &&
      addProperty.address &&
      addProperty.country &&
      addProperty.city &&
      addProperty.state
    ) {
      setUploadError('Please fill in all required fields.')
      return
    }
    if (!isValid) {
      setUploadError('Please correct the errors before proceeding.')
      return
    }
    setStep(step + 1)
  }

  const prevStep = () => {
    if (step === 1) {
      navigate('/manager/properties')
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
            <ManagerUploadPropertyOne errors={errors} register={register} />
          )}
          {step === 2 && (
            <ManagerUploadPropertyTwo
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

export default ManagerUploadPropertyPage
