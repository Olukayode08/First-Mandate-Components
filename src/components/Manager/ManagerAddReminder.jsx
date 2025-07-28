import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useFirstMandateMutation,
  useFirstMandateQuery,
} from '../../data-layer/utils'
import { useForm } from 'react-hook-form'
import FormInput from '../Globals.js/FormInput'
import { formValidation } from '../../hooks/functions'
import FormTextArea from '../Globals.js/FormTextArea'
import CustomSelector from '../Globals.js/CustomSelector'
import Button from '../Globals.js/Button'

const ManagerAddReminder = () => {
  const navigate = useNavigate()
  const { reminderId } = useParams()

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
      reminder_type: '',
      short_description: '',
      next_reminder_date: '',
      reminder_time: '',
    },
  })
  const addReminder = watch()
  const reminderType = watch('reminder_type')

  const handleReminderUpdate = (fieldName, value) => {
    setValue(fieldName, value)
  }
  const {
    mutateAsync: postReminder,
    isLoading,
    error,
    isSuccess,
  } = useFirstMandateMutation(
    `/reminders${reminderId ? `/${reminderId}` : ''}  `,
    {
      method: reminderId ? 'PUT' : 'POST',
      onSuccess: (data) => {
        setTimeout(() => {
          navigate('/manager/reminders')
        }, 3000)
        reset()
      },
      onError: (error) => {},
    }
  )

  const { data } = useFirstMandateQuery(`/reminders/${reminderId}`, {
    enabled: !!reminderId,
    onSuccess: (data) => {
      handleReminderUpdate('reminder_type', data?.data?.reminder_type)
      handleReminderUpdate('short_description', data?.data?.short_description)
      handleReminderUpdate('next_reminder_date', data?.data?.next_reminder_date)
      handleReminderUpdate('reminder_time', data?.data?.reminder_time)
    },
  })

  const handleReminder = async (data) => {
    try {
      await postReminder(data)
    } catch (e) {
      console.error(e)
    }
  }
  const timeOptions = [
    { label: '9am', value: '9am' },
    { label: '12pm', value: '12pm' },
    { label: '3pm', value: '3pm' },
    { label: '6pm', value: '6pm' },
    { label: '9pm', value: '9pm' },
  ]
  return (
    <>
      <form
        onSubmit={handleSubmit(handleReminder)}
        className='w-full flex flex-col gap-2.5 bg-white p-5 rounded-md'
      >
        {error && <p className='text-error text-left'>{error?.message}</p>}
        {isSuccess && (
          <p className='text-left text-success'>
            {reminderId
              ? 'Remainder edited successfully'
              : 'Remainder was created successfully'}
          </p>
        )}
        <label className='text-[18px]'>{reminderId ? 'Edit Reminder' : 'Add New Reminder'}</label>
        <div className='flex flex-col gap-2.5'>
          <label>Reminder Type</label>
          <div className='flex md:flex-row flex-col items-center gap-2.5'>
            <div className='w-[170px]'>
              <FormInput
                label='Rent due date'
                type='radio'
                value='Rent due date'
                {...register('reminder_type', formValidation('text', true))}
                checked={reminderType === 'Rent due date'}
              />
            </div>
            <div className='w-[200px]'>
              <FormInput
                label='Electricity Payment'
                type='radio'
                value='Electricity Payment'
                {...register('reminder_type', formValidation('text', true))}
                checked={reminderType === 'Electricity Payment'}
              />
            </div>
            <div className='w-[170px]'>
              <FormInput
                label='Water bill'
                type='radio'
                value='Water bill'
                {...register('reminder_type', formValidation('text', true))}
                checked={reminderType === 'Water bill'}
              />
            </div>
            <div className='w-[170px]'>
              <FormInput
                label='Security fee'
                type='radio'
                value='Security fee'
                {...register('reminder_type', formValidation('text', true))}
                checked={reminderType === 'Security fee'}
              />
            </div>
          </div>
        </div>
        <div className='w-[90%] md:w-[500px]'>
          <FormTextArea
            label='Short description'
            type='text'
            name={'short_description'}
            value={addReminder.short_description}
            placeholder='Enter description'
            {...register('short_description', formValidation('text', true))}
            error={errors?.short_description}
          />
        </div>

        <div className='w-[45%] md:w-[300px]'>
          <FormInput
            label='When do you want to be notified'
            type='date'
            name={'next_reminder_date'}
            value={addReminder.next_reminder_date}
            {...register('next_reminder_date', formValidation('date', true))}
            error={errors?.next_reminder_date}
          />
        </div>
        <div className='flex flex-col gap-2.5'>
          <label className='text-base'>Time</label>
          <div className='h-12 w-[240px]'>
            <CustomSelector
              placeholder='Select'
              options={timeOptions}
              value={addReminder.reminder_time}
              onChange={(selected) => setValue('reminder_time', selected)}
              multiple={false}
            />
          </div>
        </div>
        <div className='w-[180px] h-12'>
          <Button
            btnText={reminderId ? 'Edit Reminder' : 'Save'}
            isLoading={isLoading}
          />
        </div>
      </form>
    </>
  )
}
export default ManagerAddReminder
