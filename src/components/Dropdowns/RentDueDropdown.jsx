import React, { useState } from 'react'
import styled from 'styled-components'

const RentDueDropdown = () => {
  const [duration, setDuration] = useState('')
  const [notificationDate, setNotificationDate] = useState('')

  const handleDurationChange = (event) => {
    const { value } = event.target
    setDuration(value)
    // Reset notification date when changing duration
    setNotificationDate('')
  }

  const handleNotificationDateChange = (event) => {
    const { value } = event.target
    setNotificationDate(value)
  }

  return (
    <>
      <Wrapper>
        <div className='rent-durations'>
          <div className='duration'>
            <label htmlFor='duration'>Rent amount per year</label>
            <div className='select'>
              <select
                id='duration'
                value={duration}
                onChange={handleDurationChange}
              >
                <option value=''>Select Duration</option>
                <option value='monthly'>Monthly</option>
                <option value='yearly'>Yearly</option>
              </select>
            </div>
          </div>
          <div className='amount'>
            <input
              type='text'
              placeholder='#400,000.00k'
              className='amount-input'
            />
          </div>
          <div className='duration'>
            <label htmlFor='notificationDate'>
              Pick a date you'd love to be notified about rent due
            </label>
            <div className='select'>
              <select
                id='notificationDate'
                value={notificationDate}
                onChange={handleNotificationDateChange}
                disabled={!duration}
              >
                <option value=''>Select Notification Date</option>
                {duration === 'monthly' && (
                  <>
                    <option value='1'>1st of the Month</option>
                    <option value='5'>5th of the Month</option>
                    <option value='10'>10th of the Month</option>
                    {/* Add more options for monthly */}
                  </>
                )}
                {duration === 'yearly' && (
                  <>
                    <option value='1'>January 1st</option>
                    <option value='2'>February 1st</option>
                    <option value='3'>March 1st</option>
                    {/* Add more options for yearly */}
                  </>
                )}
              </select>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .rent-durations {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 80%;
    margin: 10px 0;
  }
  .duration {
    display: flex;
    flex-direction: column;
  }
  .amount,
  .select {
    width: 200px;
    height: 40px;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 5px;
  }
  .amount-input,
  select {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    border: transparent;
    background: transparent;
    outline: none;
    font-family: inherit;
    color: #000;
  }
  option {
    flex-shrink: 0;
  }
  @media screen and (max-width: 1250px) {
    .rent-durations {
      width: 90%;
    }
  }
  @media screen and (max-width: 1050px) {
    .rent-durations {
      flex-direction: column;
      align-items: flex-start;
    }
    .amount {
      margin: 20px 0 10px 0;
    }
  }
`
export default RentDueDropdown
