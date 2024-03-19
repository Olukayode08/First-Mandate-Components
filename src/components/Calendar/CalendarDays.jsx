import React, { useState } from 'react'
import styled from 'styled-components'
// import './Calendar.css'

const CalendarDays = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const renderDayView = () => {
    const dayOfWeek = currentDate.getDay()
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const dayName = days[dayOfWeek]
    const dayOfMonth = currentDate.getDate()
    const month = currentDate.toLocaleString('default', { month: 'long' })
    const year = currentDate.getFullYear()

    return (
      <div className='day-view'>
        <div className='day-header'>
          <div className='day-of-week'>{dayName}</div>
          <div className='day-of-month'>{dayOfMonth}</div>
        </div>
        <div className='date-info'>{`${month} ${dayOfMonth}, ${year}`}</div>
      </div>
    )
  }

  const handlePrev = () => {
    setCurrentDate((prevDate) => {
      const prevDay = new Date(prevDate)
      prevDay.setDate(prevDay.getDate() - 1)
      return prevDay
    })
  }

  const handleNext = () => {
    setCurrentDate((prevDate) => {
      const nextDay = new Date(prevDate)
      nextDay.setDate(nextDay.getDate() + 1)
      return nextDay
    })
  }

  return (
    <>
      <CalendarD>
        <div>
          <div className='calendar-header'>
            <button onClick={handlePrev}>Prev</button>
            <div>{currentDate.toDateString()}</div>
            <button onClick={handleNext}>Next</button>
          </div>
          <div className='calendar-body'>{renderDayView()}</div>
        </div>
      </CalendarD>
    </>
  )
}

const CalendarD = styled.section`
  .day-view {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }

  .day-header {
    display: flex;
    justify-content: space-between;
  }

  .day-of-week {
    font-weight: bold;
  }

  .day-of-month {
    font-size: 1.5em;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .calendar-header button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .calendar-body {
    padding: 10px;
  }
`
export default CalendarDays
