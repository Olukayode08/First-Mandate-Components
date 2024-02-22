import React, { useState } from 'react'
import styled from 'styled-components'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthsOfYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const Calendar = () => {
  const [date, setDate] = useState(new Date())

  const goToPreviousMonth = () => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    )
  }

  const goToNextMonth = () => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    )
  }

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth())
    const firstDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay()

    let days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className='empty-day'></div>)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), day)
      const isActive = isSameDay(currentDate, new Date())
      days.push(
        <div key={day} className={`calendar-day ${isActive ? 'active' : ''}`}>
          {day}
        </div>
      )
    }

    return days
  }

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  return (
    <>
      <Wrapper>
        <section>
          <div className='calendar'>
            <div className='header'>
              <button onClick={goToPreviousMonth}>Previous</button>
              <h2>
                {monthsOfYear[date.getMonth()]} {date.getFullYear()}
              </h2>
              <button onClick={goToNextMonth}>Next</button>
            </div>
            <div className='weekdays'>
              {daysOfWeek.map((day) => (
                <div key={day} className='weekday'>
                  {day}
                </div>
              ))}
            </div>
            <div className='days'>{renderCalendarDays()}</div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .calendar {
    width: 280px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .weekdays {
    display: flex;
  }

  .weekday {
    flex: 1;
    text-align: center;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
  }

  .calendar-day {
    text-align: center;
    padding: 5px;
    cursor: pointer;
  }

  .calendar-day.active {
    background-color: lightblue;
  }

  .empty-day {
    visibility: hidden;
  }
`
export default Calendar
