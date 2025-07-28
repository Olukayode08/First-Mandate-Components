import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useFirstMandateMutation,
  useFirstMandateQuery,
} from '../../data-layer/utils'
import { useForm } from 'react-hook-form'
import FormInput from '../Globals.js/FormInput'
import { formValidation } from '../../hooks/functions'
import Button from '../Globals.js/Button'
import CustomSelector from '../Globals.js/CustomSelector'

const LandlordAddNewManager = () => {
  const { propertyId, managerId } = useParams()
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
      name: '',
      email: '',
      phone: '',
      property_uuid: propertyId,
    },
  })
  const addManager = watch()

  const [selectedPropertyuuid, setSelectedPropertyUuid] = useState(null)
  const navigate = useNavigate()

  const handleManagerUpdate = (fieldName, value) => {
    setValue(fieldName, value)
  }

  const {
    mutateAsync: postManager,
    isLoading,
    error,
    isSuccess,
  } = useFirstMandateMutation(
    `/property-managers${managerId ? `/${managerId}` : ''}`,
    {
      method: managerId ? 'PUT' : 'POST',
      onSuccess: (data) => {
        setTimeout(() => {
          navigate('/landlord/managers')
        }, 3000)
        reset()
      },
      onError: (error) => {},
    }
  )
  const { data } = useFirstMandateQuery(`/property-managers/${managerId}`, {
    enabled: !!managerId,
    onSuccess: (data) => {
      handleManagerUpdate('name', data?.data?.name)
      handleManagerUpdate('email', data?.data?.email)
      handleManagerUpdate('phone', data?.data?.phone)
    },
  })

  const { data: propertiesData } = useFirstMandateQuery('/properties', {
    enabled: !propertyId,
    select: (data) => data?.data?.data,
  })

  const propertyOptions =
    propertiesData?.map((property) => ({
      label: property.title,
      value: property.uuid,
    })) || []

  const handleManager = async (data) => {
    const payload = {
      email: data.email,
      phone: data.phone,
      name: data.name,
      property_uuid: propertyId || selectedPropertyuuid,
    }
    try {
      await postManager(payload)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleManager)}
        className='w-full flex flex-col gap-2.5 bg-white p-5 rounded-md'
      >
        {' '}
        {error && <p className='text-error text-left'>{error?.message}</p>}
        {isSuccess && (
          <p className='text-left text-success'>
            {managerId
              ? 'Manager edited successfully'
              : 'Manager was added successfully'}
          </p>
        )}
        <h3>{managerId ? 'Edit Manager' : 'Add New Manager'}</h3>
        {!propertyId && (
          <>
            {propertiesData?.length > 0 ? (
              <div className='flex flex-col gap-2.5'>
                <label>Select Property</label>
                <div className='h-12 w-[240px]'>
                  <CustomSelector
                    placeholder='Select property'
                    options={propertyOptions}
                    value={selectedPropertyuuid}
                    onChange={(selected) => setSelectedPropertyUuid(selected)}
                    multiple={false}
                  />
                </div>
              </div>
            ) : (
              <p>No Property</p>
            )}
          </>
        )}
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label='Name'
            type='text'
            name={'name'}
            value={addManager.name}
            placeholder="Enter manager's name"
            {...register('name', formValidation('text', true))}
            error={errors?.name}
          />
        </div>
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label='Email'
            type='email'
            name={'email'}
            value={addManager.email}
            placeholder='Enter email address'
            {...register('email', formValidation('email', true))}
            error={errors?.email}
          />
        </div>
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label='Phone'
            type='text'
            name={'phone'}
            value={addManager.phone}
            placeholder='+234'
            {...register('phone', formValidation('text', true))}
            error={errors?.phone}
          />
        </div>
        {/* {!managerId && (
              <>
                <div className='input'>
                  <label>Phone</label>
                  <input
                    type='text'
                    name='phone_two'
                    value={addManager.phone_two}
                    onChange={handleChangeAddManager}
                    autoComplete='off'
                    placeholder='+234'
                    className='t-name-input'
                  />
                </div>
                <div className='input'>
                  <label>Property Name</label>
                  <input
                    type='text'
                    name='property_name'
                    value={addManager.property_name}
                    onChange={handleChangeAddManager}
                    autoComplete='off'
                    className='t-name-input'
                  />
                </div>
              </>
            )} */}
        <div className='w-[180px] h-12'>
          <Button
            btnText={managerId ? 'Edit Manager' : 'Add Manager'}
            isLoading={isLoading}
          />
        </div>
      </form>
    </>
  )
}

export default LandlordAddNewManager
