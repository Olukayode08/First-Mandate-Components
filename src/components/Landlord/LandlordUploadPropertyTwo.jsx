import React from 'react'
import CustomSelector from '../Globals.js/CustomSelector'
import FormInput from '../Globals.js/FormInput'
import { formValidation } from '../../hooks/functions'

const LandlordUploadPropertyTwo = ({
  setValue,
  addProperty,
  register,
  errors,
}) => {
  const durationOptions = [
    { label: '1 years', value: '1' },
    { label: '2 years', value: '2' },
    { label: '3 years', value: '3' },
  ]

  const paymentStatus = [
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Yearly', value: 'Yearly' },
    { label: 'Bi Yearly', value: 'Bi Yearly' },
  ]
  return (
    <>
      <section className='flex flex-col w-full gap-2.5'>
        <label>Rent Duration*</label>

        <div className='h-12 w-[200px]'>
          <CustomSelector
            placeholder='Select Duration'
            options={durationOptions}
            value={addProperty.rent_duration}
            onChange={(selected) => setValue('rent_duration', selected)}
            multiple={false}
          />
        </div>
        <div className='flex flex-col flex-wrap w-full gap-2.5'>
          <label>Rent Amount*</label>
          <div className='flex items-center gap-2.5'>
            <div className='h-12 w-[200px]'>
              <CustomSelector
                placeholder='Select Payment Status'
                options={paymentStatus}
                value={addProperty.payment_status}
                onChange={(selected) => setValue('payment_status', selected)}
                multiple={false}
              />
            </div>
            <div className='w-[150px]'>
              <FormInput
                type='text'
                name={'amount'}
                placeholder='#40,000.00k'
                {...register('amount', formValidation('text', true))}
                error={errors?.amount}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2.5 mt-4'>
          <label className='text-base'>
            Payments to be managed apart from Rent
          </label>
          <div className='flex flex-wrap gap-5 w-full '>
            <div className='w-[150px]'>
              <FormInput
                type='checkbox'
                label='Security'
                value='Security'
                {...register('utilities')}
              />
            </div>
            <div className='w-[150px]'>
              <FormInput
                type='checkbox'
                label='Electricity'
                value='Electricity'
                {...register('utilities')}
              />
            </div>{' '}
            <div className='w-[150px]'>
              <FormInput
                type='checkbox'
                label='Water'
                value='Water'
                {...register('utilities')}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default LandlordUploadPropertyTwo
