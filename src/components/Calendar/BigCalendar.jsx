import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import styled from 'styled-components'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [events] = useState([])
  // const [newEventDate, setNewEventDate] = useState('')

  // const handleAddEvent = () => {
  //   const newEvent = {
  //     title: 'New Event',
  //     start: new Date(newEventDate),
  //     end: new Date(newEventDate),
  //   }
  //   setEvents([...events, newEvent])
  //   setNewEventDate('') 
  // }

  // const handleDateChange = (e) => {
  //   setNewEventDate(e.target.value)
  // }
  return (
    <>
      <Wrapper>
        {/* <input type='date' value={newEventDate} onChange={handleDateChange} />
        <button onClick={handleAddEvent}>Add Event</button> */}
        <div className='calendar'>
          <div className='myCalendar' style={{ height: '100vh' }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor='start'
              endAccessor='end'
            />
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  /* .rbc-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .rbc-toolbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px solid green;
    width: 100%;
  }
  .rbc-btn-group {
    border: 2px solid red;
  } */
  .calendar {
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 4px;
  }
  .myCalendar {
    background-color: #f6f6f8;
    padding: 20px;
    border-radius: 4px;
  }

  .rbc-month-view .rbc-month-row {
    margin: 10px; /* Add margin between rows */
    border: none;
    border-radius: 4px;
  }

  .rbc-month-view,
  .rbc-date-cell {
    background-color: #ffffff; /* Change background color of dates */
    margin: 10px; /* Add margin between dates */
    border: none;
    height: 100%;
    width: 100%;
    text-align: center;
    /* border-radius: 50px; */
  }
`
export default BigCalendar
