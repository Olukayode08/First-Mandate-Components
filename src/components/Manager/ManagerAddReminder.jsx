import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ManagerAddReminder = () => {
  const [notificationType, setNotificationType] = useState('option1')
  const handleNotificationType = (e) => {
    setNotificationType(e.target.value)
  }

  // Time of reminder section
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    setCurrentTime(getCurrentTime())
  }, [])

  function getCurrentTime() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  return (
    <>
      <MAReminder>
        <section>
          <main className='n-section'>
            <h3>Add New Reminder</h3>
            <div className='n-status'>
              <label>Reminder Type</label>
              <div className='radio-btns'>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option1'
                    checked={notificationType === 'option1'}
                    onChange={handleNotificationType}
                    className='btn-input'
                  />
                  <p className='n-details'>Rent due date</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option2'
                    checked={notificationType === 'option2'}
                    onChange={handleNotificationType}
                    className='btn-input'
                  />
                  <p className='n-details'>Electricity Payment</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option3'
                    checked={notificationType === 'option3'}
                    onChange={handleNotificationType}
                    className='btn-input'
                  />
                  <p className='n-details'>Water bill</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option4'
                    checked={notificationType === 'option4'}
                    onChange={handleNotificationType}
                    className='btn-input'
                  />
                  <p className='n-details'>Security fee</p>
                </div>
              </div>
            </div>
            {/* Text Boxes */}
            <div className='input'>
              <label>Short description</label>
              <input type='text' className='r-desc-input' />
            </div>
            <div className='input'>
              <label>When do you want to be notified</label>
              <input
                type='date'
                placeholder='dd/mm/yyy'
                className='r-date-input'
              />
            </div>
            <div className='input'>
              <label>Time</label>
              <input
                className='r-date-input'
                type='time'
                value={currentTime}
                onChange={(e) => setCurrentTime(e.target.value)}
              />
            </div>
            <p className='save-btn'>Save</p>
          </main>
        </section>
      </MAReminder>
    </>
  )
}
const MAReminder = styled.section`
  .n-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
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
    width: 80px;
    background-color: #fedf7e;
    text-align: center;
    color: #000;
    padding: 15px 0;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;
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
