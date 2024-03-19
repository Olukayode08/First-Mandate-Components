import React, { useState } from 'react'
import styled from 'styled-components'

const CalendarWeeks = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const renderWeekView = () => {
    const startOfWeek = new Date(currentDate)
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
    const weekDays = []
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek)
      day.setDate(day.getDate() + i)
      weekDays.push(day)
    }

    return (
      <div className='week-view'>
        {weekDays.map((day, index) => (
          <div key={index} className='day'>
            <div className='day-name'>
              {day.toLocaleString('default', { weekday: 'short' })}
            </div>
            <div className='day-number'>{day.getDate()}</div>
          </div>
        ))}
      </div>
    )
  }

  const handlePrev = () => {
    setCurrentDate((prevDate) => {
      const prevWeek = new Date(prevDate)
      prevWeek.setDate(prevWeek.getDate() - 7)
      return prevWeek
    })
  }

  const handleNext = () => {
    setCurrentDate((prevDate) => {
      const nextWeek = new Date(prevDate)
      nextWeek.setDate(nextWeek.getDate() + 7)
      return nextWeek
    })
  }

  return (
    <>
      <CalendarW>
        <div>
          <div className='calendar-header'>
            <button onClick={handlePrev}>Prev</button>
            <div>
              {currentDate.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </div>
            <button onClick={handleNext}>Next</button>
          </div>
          <div className='calendar-body'>{renderWeekView()}</div>
        </div>
      </CalendarW>
    </>
  )
}

const CalendarW = styled.section`
  .week-view {
    display: flex;
  }

  .day {
    flex: 1;
    border: 1px solid #ccc;
    padding: 10px;
  }

  .day-name {
    font-weight: bold;
  }

  .day-number {
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
export default CalendarWeeks
