import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFirstMandateMutation } from '../../data-layer/utils'
import Button from '../Globals.js/Button'
import CustomSelector from '../Globals.js/CustomSelector'
import FormInput from '../Globals.js/FormInput'
import { useForm } from 'react-hook-form'
import { formValidation } from '../../hooks/functions'

const LandlordAddUnit = () => {
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
      unit_name: '',
      unit_type: '',
      no_of_bedrooms: '',
      occupation_status: '',
    },
  })
  const formValues = watch()
  const occupationStatus = watch('occupation_status')

  const navigate = useNavigate()
  const { propertyId } = useParams()
  const [buttonType, setButtonType] = useState()
  const [unitError, setUnitError] = useState(null)
  const [successError, setSuccessError] = useState(null)

  const backProperties = () => {
    navigate('/landlord/properties')
  }
  // Clear Error
  useEffect(() => {
    setUnitError('')
  }, [
    formValues.unit_name,
    formValues.occupation_status,
    formValues.no_of_bedrooms,
    formValues.occupation_status,
  ])

  const {
    mutateAsync: postUnit,
    isLoading,
    error: addUnitError,
  } = useFirstMandateMutation(`/properties/${propertyId}/units`, {
    onSuccess: (data) => {
      const unitDetails = data?.data
      if (unitDetails.occupation_status === 'Occupied') {
        setSuccessError(
          'Congratulations, your unit has been added successfully. You are required to add a tenant to the already Occupied unit'
        )
      } else {
        setSuccessError(
          'Congratulations, your unit has been added successfully.'
        )
      }
      if (unitDetails.occupation_status === 'Occupied') {
        setTimeout(() => {
          navigate(`/landlord/add-tenant/${unitDetails?.uuid}/tenants`, {
            state: { unitName: unitDetails.unit_name },
          })
        }, 3000)
      }
      setTimeout(() => {
        if (
          buttonType === 'continue' &&
          unitDetails.occupation_status !== '0ccupied'
        ) {
          navigate('/landlord/properties')
        } else if (buttonType === 'addNew') {
          setSuccessError('')
        }
      }, 3000)
      reset()
    },
    onError: (error) => {},
  })

  const handleAddUnit = async (data) => {
    if (
      !data.unit_name ||
      !data.unit_type ||
      !data.no_of_bedrooms ||
      !data.occupation_status
    ) {
      setUnitError('Please fill in all required fields.')
      return
    }
    try {
      await postUnit(data)
    } catch (e) {
      console.error(e.message)
    }
  }

  const apartmentOptions = [
    { label: 'Duplex', value: 'Duplex' },
    { label: 'Flat', value: 'Flat' },
    { label: 'Self Contain', value: 'Self Contain' },
    { label: 'Bungalow', value: 'Bungalow' },
  ]

  const bedroomOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ]

  return (
    <>
      <form onSubmit={handleSubmit((data) => handleAddUnit(data))}>
        <div className='w-full bg-white p-5'>
          {!!(addUnitError || unitError) && (
            <p className='text-error text-left'>
              {unitError || addUnitError?.error}
            </p>
          )}
          {!!successError && (
            <p className='text-success text-left'>{successError}</p>
          )}
          <h3 className='my-2.5'>Add Apartment</h3>
          <div className='flex flex-col gap-4'>
            <div className='w-[90%] md:w-[500px]'>
              <FormInput
                label='Apartment Name'
                type='text'
                name={'unit_name'}
                placeholder='Enter apartment name'
                {...register('unit_name', formValidation('text', true))}
                error={errors?.unit_name}
              />
            </div>
            <div className='flex flex-col gap-2.5'>
              <label className='text-base'>Apartment Type*</label>
              <div className='flex md:flex-row flex-col items-center gap-2.5'>
                <div className='h-12 w-[240px]'>
                  <CustomSelector
                    placeholder='Select Type'
                    options={apartmentOptions}
                    value={formValues.unit_type}
                    onChange={(selected) => setValue('unit_type', selected)}
                    multiple={false}
                  />
                </div>
                <div className='h-12 w-[240px]'>
                  <CustomSelector
                    placeholder='No. of bedrooms.'
                    options={bedroomOptions}
                    value={formValues.no_of_bedrooms}
                    onChange={(selected) =>
                      setValue('no_of_bedrooms', selected)
                    }
                    multiple={false}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2.5'>
              <label className='text-base'>
                Rent Status (Are there occupants in the apartment already)
              </label>
              <div className='flex md:flex-row flex-col items-center gap-2.5'>
                <div className='w-[200px]'>
                  <FormInput
                    label='Occupied'
                    type='radio'
                    value='Occupied'
                    {...register(
                      'occupation_status',
                      formValidation('text', true)
                    )}
                    checked={occupationStatus === 'Occupied'}
                  />
                </div>
                <div className='w-[200px]'>
                  <FormInput
                    label='Vacant'
                    type='radio'
                    value='Vacant'
                    {...register(
                      'occupation_status',
                      formValidation('text', true)
                    )}
                    checked={occupationStatus === 'Vacant'}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center flex-wrap gap-2.5 mt-5'>
            <div className='w-[150px] h-12'>
              <Button
                icon='back'
                btnText='Go back'
                btnFunction={backProperties}
                theme='secondary'
              />
            </div>
            <div className='w-[250px] h-12'>
              <Button
                btnText='Save & Add New Apartment'
                isLoading={isLoading && buttonType === 'addNew'}
                btnFunction={() => setButtonType('addNew')}
                theme='primary'
              />
            </div>
            <div className='w-[180px] h-12'>
              <Button
                btnText='Save & Continue'
                isLoading={isLoading && buttonType === 'continue'}
                btnFunction={() => setButtonType('continue')}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default LandlordAddUnit
