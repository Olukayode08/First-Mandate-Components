import React from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '../Globals.js/FormInput'
import { formValidation } from '../../hooks/functions'

const Test = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })
  const onSubmit = (data) => console.log(data, 'data')

  return (
    <form className='flex flex-col items-center justify-center gap-3'>
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
      <button
        onClick={handleSubmit(onSubmit)}
        className='border-2 border-red-500 rounded-md w-[170px]'
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}

export default Test
