import React, { useState } from 'react'
import styled from 'styled-components'
import leftIcon from '../../assets/Frame 1639 (1).png'
import rightIcon from '../../assets/Frame 1365.png'
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
      <RCalender>
        <section>
          <div className='calendar'>
            <div className='header'>
              <h2>
                {monthsOfYear[date.getMonth()]} {date.getFullYear()}
              </h2>
              <div className='img-icons'>
                <img
                  onClick={goToPreviousMonth}
                  src={rightIcon}
                  alt='Left-Icon'
                />
                <img onClick={goToNextMonth} src={leftIcon} alt='Right-Icon' />
              </div>
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
      </RCalender>
    </>
  )
}
const RCalender = styled.section`
  .calendar {
    width: 280px;
    border-radius: 5px;
    padding: 10px;
    height: 380px;
    box-shadow: 0px 2px 16px 0px #00000026;
    background-color: #ffffff;
    z-index: 50;
    margin: 20px 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 17px;
  }
  .weekdays {
    display: flex;
  }
  .img-icons {
    display: flex;
    justify-content: space-between;
    width: 80px;
  }
  img {
    width: 45%;
    cursor: pointer;
  }
  .weekday {
    flex: 1;
    text-align: center;
    font-size: 15px;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px;
  }

  .calendar-day {
    text-align: center;
    padding: 15px 5px;
    cursor: pointer;
  }

  .calendar-day.active {
    background-color: #fedf7e;
    border-radius: 20px;
  }

  .empty-day {
    visibility: hidden;
  }
`
export default Calendar
