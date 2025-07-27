import React from 'react'
import { formValidation } from '../../hooks/functions'
import FormInput from '../Globals.js/FormInput'

const ManagerUploadPropertyOne = ({ register, errors }) => {
  return (
    <>
      <div className='flex flex-col gap-2.5 w-full'>
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label='Property Title*'
            name='title'
            type='text'
            placeholder='Enter a brief title / name of the property'
            {...register('title', formValidation('text', true))}
            error={errors?.title}
          />
        </div>
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label='Area*'
            name='address'
            type='text'
            placeholder='eg GRA, Egbeda, Oke-Ado'
            {...register('address', formValidation('text', true))}
            error={errors?.address}
          />
        </div>

        <div className='flex flex-col gap-2.5 w-full'>
          <label>Location</label>
          <section className='flex gap-2.5 items-center flex-wrap w-full'>
            <div className='w-[70%] md:w-[180px]'>
              <FormInput
                type='text'
                name='country'
                placeholder='Country eg Nigeria'
                {...register('country', formValidation('text', true))}
                error={errors?.country}
              />
            </div>
            <div className='w-[70%] md:w-[180px]'>
              <FormInput
                type='text'
                name='state'
                placeholder='State eg Lagos'
                {...register('state', formValidation('text', true))}
                error={errors?.state}
              />
            </div>
            <div className='w-[70%] md:w-[180px]'>
              <FormInput
                type='text'
                name='city'
                placeholder='City eg Ikeja'
                {...register('city', formValidation('text', true))}
                error={errors?.city}
              />
            </div>
          </section>
        </div>
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label={`Landlord's Name`}
            name='landlord_name'
            type='text'
            placeholder='Enter Full name'
            {...register('landlord_name', formValidation('text', true))}
            error={errors?.landlord_name}
          />
        </div>
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label={`Landlord's Email`}
            name='landlord_email'
            type='email'
            placeholder='Enter Email'
            {...register('landlord_email', formValidation('email', true))}
            error={errors?.landlord_email}
          />
        </div>

        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label={`Landlord's Phone`}
            name='landlord_phone'
            type='text'
            placeholder='+234'
            {...register('landlord_phone', formValidation('text', true))}
            error={errors?.landlord_phone}
          />
        </div>
      </div>
    </>
  )
}

export default ManagerUploadPropertyOne
