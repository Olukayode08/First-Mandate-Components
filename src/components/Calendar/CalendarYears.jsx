import React, { useState } from 'react'
import styled from 'styled-components'

const CalendarYears = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const renderYearView = () => {
    const months = Array.from({ length: 12 }, (_, index) => index)

    return (
      <div className='year-view'>
        {months.map((month) => (
          <div key={month} className='month'>
            {renderMonth(month)}
          </div>
        ))}
      </div>
    )
  }

  const renderMonth = (month) => {
    const monthName = new Date(currentYear, month).toLocaleString('default', {
      month: 'long',
    })

    return <div className='month-name'>{monthName}</div>
  }

  const handlePrev = () => {
    setCurrentYear((prevYear) => prevYear - 1)
  }

  const handleNext = () => {
    setCurrentYear((prevYear) => prevYear + 1)
  }

  return (
    <CalendarY>
      <div>
        <div className='calendar-header'>
          <button onClick={handlePrev}>Prev</button>
          <div>{currentYear}</div>
          <button onClick={handleNext}>Next</button>
        </div>
        <div className='calendar-body'>{renderYearView()}</div>
      </div>
    </CalendarY>
  )
}

const CalendarY = styled.section`
  .year-view {
    display: flex;
    flex-wrap: wrap;
  }

  .month {
    flex: 1;
    border: 1px solid #ccc;
    padding: 10px;
  }

  .month-name {
    font-weight: bold;
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
export default CalendarYears
