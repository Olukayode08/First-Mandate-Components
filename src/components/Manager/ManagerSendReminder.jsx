import React, { useState } from 'react'
import styled from 'styled-components'

const ManagerSendReminder = () => {
  const [notificationType, setNotificationType] = useState('option1')
  const handleNotificationType = (e) => {
    setNotificationType(e.target.value)
  }
  return (
    <>
      <MSReminder>
        <section>
          <main className='n-section'>
            <h3>Send Reminder</h3>
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
                  <p className='n-details'>Rent Overdue</p>
                </div>
              </div>
            </div>
            <div className='section'>
              <div className='input'>
                <label className='p-date'>Short description</label>
                <input type='text' className='r-desc-input' />
              </div>
              <div className='input'>
                <label className='p-date'>Select Tenant</label>
                <input type='search' className='search-input' />
              </div>
              <div className='input'>
                <label className='p-date'>Date </label>
                <input
                  type='date'
                  placeholder='dd/mm/yyy'
                  className='r-date-input'
                />
              </div>
            </div>
            <div className='section'>
              <label>Time</label>
              <div className='n-input'>
                <select className='n-select' id='unit' required>
                  <option value='one'>Immediately</option>
                  <option value='one'>1 week to due date</option>
                  <option value='two'>2 weeks to due date</option>
                  <option value='three'>1 month to due date</option>
                </select>
              </div>
            </div>
            <p className='save-btn'>Send Reminder</p>
          </main>
        </section>
      </MSReminder>
    </>
  )
}
const MSReminder = styled.section`
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
    width: 100%;
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
  /* Text boxes */
  .section {
    display: flex;
    flex-direction: column;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  .p-date {
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
  .r-date-input {
    height: 50px;
    width: 250px;
  }
  .r-desc-input {
    height: 80px;
    width: 500px;
  }
  .search-input {
    height: 50px;
    width: 500px;
  }
  .n-input {
    width: 250px;
    margin: 10px 0;
    height: 50px;
    padding: 0 10px;
    border: 1px solid black;
    border-radius: 3px;
  }
  .n-select {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    background: transparent;
    border: transparent;
    outline: none;
    color: #000;
    font-family: inherit;
    font-size: 15px;
  }
  .save-btn {
    width: 180px;
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
    .search-input,
    .r-desc-input {
      width: 95%;
    }
  }
`
export default ManagerSendReminder