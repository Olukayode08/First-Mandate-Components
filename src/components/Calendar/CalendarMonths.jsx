import React, { useState } from 'react'
import styled from 'styled-components'
// import './Calendar.css'

const CalendarMonths = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState('month')

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getMonthData = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysCount = daysInMonth(month, year)
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const monthData = []

    let day = 1
    for (let i = 0; i < 6; i++) {
      const week = []
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push('')
        } else if (day > daysCount) {
          break
        } else {
          week.push(day)
          day++
        }
      }
      monthData.push(week)
    }

    return monthData
  }

  const renderMonthView = () => {
    const monthData = getMonthData()
    return (
      <div className='calendar-grid'>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div className='calendar-day' key={day}>
            {day}
          </div>
        ))}
        {monthData.map((week, index) => (
          <React.Fragment key={index}>
            {week.map((day, index) => (
              <div
                className={`calendar-day ${
                  day === currentDate.getDate() ? 'active' : ''
                }`}
                key={index}
              >
                {day}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    )
  }

  const handlePrev = () => {
    setCurrentDate((prevDate) => {
      const prevMonth = new Date(prevDate)
      prevMonth.setMonth(prevMonth.getMonth() - 1)
      return prevMonth
    })
  }

  const handleNext = () => {
    setCurrentDate((prevDate) => {
      const nextMonth = new Date(prevDate)
      nextMonth.setMonth(nextMonth.getMonth() + 1)
      return nextMonth
    })
  }

  return (
    <>
      <CalendarM>
        <section>
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
            <div className='calendar-tabs'>
              <button
                className={view === 'day' ? 'active' : ''}
                onClick={() => setView('day')}
              >
                Day
              </button>
              <button
                className={view === 'week' ? 'active' : ''}
                onClick={() => setView('week')}
              >
                Week
              </button>
              <button
                className={view === 'month' ? 'active' : ''}
                onClick={() => setView('month')}
              >
                Month
              </button>
              <button
                className={view === 'year' ? 'active' : ''}
                onClick={() => setView('year')}
              >
                Year
              </button>
            </div>
            <div className='calendar-body'>
              {view === 'month' && renderMonthView()}

              {/* Implement other views here */}
            </div>
          </div>
        </section>
      </CalendarM>
    </>
  )
}
const CalendarM = styled.section`
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
  }

  .calendar-day {
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
  }

  .active {
    background-color: #007bff;
    color: #fff;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .calendar-tabs {
    margin-top: 10px;
  }

  .calendar-tabs button {
    margin-right: 10px;
    border: none;
    background: none;
    cursor: pointer;
  }

  .calendar-tabs button.active {
    font-weight: bold;
  }
`
export default CalendarMonths
