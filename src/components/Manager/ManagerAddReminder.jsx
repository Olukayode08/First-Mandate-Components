import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useFirstMandateMutation,
  useFirstMandateQuery,
} from '../../data-layer/utils'


const ManagerAddReminder = () => {
  const navigate = useNavigate()
  const { reminderId } = useParams()
  const [addReminder, setAddReminder] = useState({
    reminder_type: '',
    short_description: '',
    next_reminder_date: '',
    reminder_time: '',
  })

  const handleChangeAddReminder = (e) => {
    setAddReminder({ ...addReminder, [e.target.name]: e.target.value })
  }

  const handleReminderUpdate = (fieldName, value) => {
    setAddReminder((prev) => ({ ...prev, [fieldName]: value }))
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
      },
      onError: (error) => {
      },
    }
  )

  const { data } = useFirstMandateQuery(`/reminders/${reminderId}`, {
    enabled: !!reminderId,
    onSuccess: (data) => {
      console.log(data)
      handleReminderUpdate('reminder_type', data?.data?.reminder_type)
      handleReminderUpdate('short_description', data?.data?.short_description)
      handleReminderUpdate('next_reminder_date', data?.data?.next_reminder_date)
      handleReminderUpdate('reminder_time', data?.data?.reminder_time)
    },
  })

  const handleReminder = async (e) => {
    e.preventDefault()

    const payload = {
      reminder_type: addReminder.reminder_type,
      short_description: addReminder.short_description,
      next_reminder_date: addReminder.next_reminder_date,
      reminder_time: addReminder.reminder_time,
    }

    try {
      await postReminder(payload)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <MAReminder>
        <section>
          <form onSubmit={handleReminder} className='n-section'>
            {error && <p className='error'>{error?.message}</p>}
            {isSuccess && (
              <p className='error success'>
                {reminderId
                  ? 'Remainder edited successfully'
                  : 'Remainder was created successfully'}
              </p>
            )}
            <div className='input'>
              <label className='reminder-h'>
                {reminderId ? 'Edit Reminder' : 'Add New Reminder'}
              </label>
            </div>
            <div className='n-status'>
              <label>Reminder Type</label>
              <div className='radio-btns'>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='Rent due date'
                    name='reminder_type'
                    onChange={handleChangeAddReminder}
                    checked={addReminder.reminder_type === 'Rent due date'}
                    className='btn-input'
                  />
                  <p className='n-details'>Rent due date</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='Electricity Payment'
                    name='reminder_type'
                    onChange={handleChangeAddReminder}
                    checked={
                      addReminder.reminder_type === 'Electricity Payment'
                    }
                    className='btn-input'
                  />
                  <p className='n-details'>Electricity Payment</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='Water bill'
                    name='reminder_type'
                    onChange={handleChangeAddReminder}
                    checked={addReminder.reminder_type === 'Water bill'}
                    className='btn-input'
                  />
                  <p className='n-details'>Water bill</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='Security fee'
                    name='reminder_type'
                    onChange={handleChangeAddReminder}
                    checked={addReminder.reminder_type === 'Security fee'}
                    className='btn-input'
                  />
                  <p className='n-details'>Security fee</p>
                </div>
              </div>
            </div>
            {/* Text Boxes */}
            <div className='input'>
              <label>Short description</label>
              <input
                type='text'
                required
                name='short_description'
                value={addReminder.short_description}
                onChange={handleChangeAddReminder}
                autoComplete='off'
                className='r-desc-input'
              />
            </div>
            <div className='input'>
              <label>When do you want to be notified</label>
              <input
                type='date'
                required
                placeholder='dd/mm/yyy'
                name='next_reminder_date'
                value={addReminder.next_reminder_date}
                onChange={handleChangeAddReminder}
                autoComplete='off'
                className='r-date-input'
              />
            </div>
            <div className='input'>
              <label>Time</label>
              <input
                className='r-date-input'
                type='time'
                required
                name='reminder_time'
                value={addReminder.reminder_time}
                onChange={handleChangeAddReminder}
                autoComplete='off'
              />
            </div>
            <button
              disabled={isLoading}
              className={isLoading ? 'btn-disabled save-btn' : 'btn save-btn'}
            >
              {isLoading ? (
                <div className='login-spinner'>
                  <div className='spinner'></div>
                  <p>{reminderId ? 'Edit Reminder' : 'Save'}</p>
                </div>
              ) : (
                <p>{reminderId ? 'Edit Reminder' : 'Save'}</p>
              )}
            </button>
          </form>
        </section>
      </MAReminder>
    </>
  )
}
const MAReminder = styled.section`
  .n-section {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .error {
    color: #ff0000;
    text-align: left;
    margin: 10px 0;
  }
  .success {
    color: green;
  }
  h3 {
    margin: 10px 0 25px 0;
  }
  /* Notification Status */
  .n-status {
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 10px 0;
    font-size: 16px;
  }
  .reminder-h {
    font-size: 18px;
  }
  .radio-btns {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px 0;
    gap: 20px;
  }
  .radio-btn {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 5px 0;
    flex-shrink: 0;
  }
  .btn-input {
    width: 18px;
    height: 18px;
  }
  .n-details {
    font-size: 16px;
  }
  /* Text Boxes */
  .section {
    display: flex;
    flex-direction: column;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  input {
    outline: none;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-size: 16px;
    color: #000;
    border-radius: 4px;
    background: transparent;
  }
  .r-desc-input {
    height: 80px;
    width: 500px;
  }
  .r-date-input {
    height: 50px;
    width: 250px;
  }
  .save-btn {
    width: 200px;
    height: 50px;
    text-align: center;
    border: transparent;
    border-radius: 4px;
    margin: 20px 0;
    cursor: pointer;
    font-size: 16px;
  }
  .btn {
    background-color: #fedf7e;
    color: #000;
  }
  .btn-disabled {
    background: #00000080;
    color: #fff;
    cursor: not-allowed;
  }
  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
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
  @media screen and (max-width: 600px) {
    .radio-btns {
      width: 95%;
    }
  }
  @media screen and (max-width: 550px) {
    .save-btn,
    .r-desc-input {
      width: 95%;
    }
  }
`
export default ManagerAddReminder
