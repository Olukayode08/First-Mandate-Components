import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'

const LandlordAddReminder = () => {
  const [notificationType, setNotificationType] = useState('option1')
  const handleNotificationType = (e) => {
    setNotificationType(e.target.value)
  }
  return (
    <>
      <LAReminder>
        <section>
          <main className='n-section'>
            <h3>Add Reminder</h3>
            <div className='section'>
              <div className='input'>
                <label className='p-date'>Pick a Date</label>
                <input
                  type='date'
                  placeholder='dd/mm/yyy'
                  className='r-date-input'
                />
              </div>
              <div className='desc input'>
                <label className='desc-h'>Description</label>
                <input type='text' className='r-desc-input' />
              </div>
            </div>
            <div className='section'>
              <label>What are you setting a reminder for?</label>
              <div className='n-input'>
                <select className='n-select' id='unit' required>
                  <option value='one'>Rent Due Date</option>
                  <option value='two'>Option 2</option>
                  <option value='three'>Option 3</option>
                </select>
              </div>
            </div>
            <div className='n-status'>
              <label>Notification Type:</label>
              <div className='radio-btns'>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option1'
                    checked={notificationType === 'option1'}
                    onChange={handleNotificationType}
                    className='btn-input'
                  />
                  <p className='n-details'>Emails</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option2'
                    checked={notificationType === 'option2'}
                    onChange={handleNotificationType}
                    className='btn-input'
                  />
                  <p className='n-details'>SMS</p>
                </div>
                <div className='radio-btn'>
                  <input
                    type='radio'
                    value='option3'
                    checked={notificationType === 'option3'}
                    onChange={handleNotificationType}
                    className='btn-input'
                  />
                  <p className='n-details'>App Notifications</p>
                </div>
              </div>
            </div>
            <div className='section'>
              <label>Set frequency on notification</label>
              <div className='n-input'>
                <select className='n-select' id='unit' required>
                  <option value='one'>1 week to due date</option>
                  <option value='two'>Option 2</option>
                  <option value='three'>Option 3</option>
                </select>
              </div>
            </div>
            <div className='section'>
              <label>
                You will be notified everyday until the due date based on your
                preference
              </label>
              <div className='add-r'>
                <h4>Add New Reminder</h4>
                <FaRegPlusSquare size={20} />
              </div>
            </div>
            <p className='save-btn'>Save</p>
          </main>
        </section>
      </LAReminder>
    </>
  )
}
const LAReminder = styled.section`
  position: relative;
  margin: 10px 0;
  .n-section {
    position: absolute;
    left: 300px;
    width: 52%;
    margin: 0 auto;
    padding: 20px 0;
  }
  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    margin: 10px 0;
  }
  .desc {
    flex-direction: row;
    width: 90%;
    justify-content: left;
    align-items: flex-start;
    margin: 20px 0;
  }
  .p-date {
    margin: 10px 0;
  }
  .desc-h {
    margin-right: 20px;
  }
  input {
    outline: none;
    border: 1px solid black;
    padding: 0 20px;
    font-family: inherit;
    font-weight: 17px;
    color: #000;
    border-radius: 3px;
  }
  .r-date-input {
    height: 40px;
    width: 200px;
  }
  .r-desc-input {
    height: 60px;
    width: 430px;
  }
  .n-input {
    width: 250px;
    margin: 10px 0;
    height: 40px;
    padding: 0 10px;
    border: 1px solid black;
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
  /* Notification Status */
  .n-status {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
  }

  label {
    margin: 10px 0;
    font-size: 18px;
  }
  .radio-btn {
    gap: 20px;
  }
  .radio-btn,
  .radio-btns {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px 0;
  }
  .btn-input {
    width: 18px;
    height: 18px;
  }
  .n-details {
    margin-left: 10px;
    font-size: 17px;
  }
  .add-r {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 10px;
    width: 250px;
    text-decoration: none;
    color: #000;
  }
  .save-btn {
    width: 550px;
    background-color: #000;
    text-align: center;
    color: #ffffff;
    padding: 15px 0;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;
  }

  @media screen and (max-width: 1290px) {
    .n-section {
      width: 50%;
    }
  }
  @media screen and (max-width: 1200px) {
    .n-section {
      width: 100%;
      left: 0;
      padding: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    .desc {
      flex-direction: column;
    }
    .save-btn {
      width: 450px;
    }
  }
  @media screen and (max-width: 500px) {
    .r-desc-input,
    .save-btn {
      width: 90%;
    }
  }
`
export default LandlordAddReminder
