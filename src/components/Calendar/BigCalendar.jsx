import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import styled from 'styled-components'
// import { FaArrowLeft } from 'react-icons/fa'
// import { FaArrowRight } from 'react-icons/fa'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [events, setEvents] = useState([])
  const [newEventDate, setNewEventDate] = useState('')
  // const handleAddEvent = () => {
  //   const newEvent = {
  //     title: 'New Event',
  //     start: new Date(), // Today's date
  //     end: new Date(), // Today's date
  //   }
  //   setEvents([...events, newEvent])
  // }
  const handleAddEvent = () => {
    const newEvent = {
      title: 'New Event',
      start: new Date(newEventDate),
      end: new Date(newEventDate),
    }
    setEvents([...events, newEvent])
    setNewEventDate('') // Reset date input after adding event
  }

  const handleDateChange = (e) => {
    setNewEventDate(e.target.value)
  }
  // const today = new Date()

  // const myEventsList = [
  //   {
  //     title: 'Event 1',
  //     start: new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate(),
  //       10,
  //       0
  //     ), // 10:00 AM today
  //     end: new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate(),
  //       11,
  //       0
  //     ), // 11:00 AM today
  //   },
  //   {
  //     title: 'Event 2',
  //     start: new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate(),
  //       14,
  //       0
  //     ), // 2:00 PM today
  //     end: new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate(),
  //       15,
  //       0
  //     ), // 3:00 PM today
  //   },
  //   {
  //     title: 'Event 3',
  //     start: new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate() + 1,
  //       9,
  //       0
  //     ), // 9:00 AM tomorrow
  //     end: new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate() + 1,
  //       10,
  //       0
  //     ), // 10:00 AM tomorrow
  //   },
  //   {
  //     title: 'Event 4',
  //     start: new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate() + 2,
  //       12,
  //       0
  //     ), // 12:00 PM day after tomorrow
  //     end: new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate() + 2,
  //       13,
  //       0
  //     ), // 1:00 PM day after tomorrow
  //   },
  // ]
  // const customMessages = [
  //   {
  //     allDay: 'All-day',
  //     previous: <FaArrowLeft />,
  //     next: <FaArrowRight />,
  //     today: 'Today',
  //     month: 'Month',
  //     week: 'Week',
  //     day: 'Day',
  //     agenda: 'Agenda',
  //     date: 'Date',
  //     time: 'Time',
  //     event: myEventsList, // You can also customize event-related text
  //   },
  // ]

  return (
    <>
      <Wrapper>
        <input type='date' value={newEventDate} onChange={handleDateChange} />
        <button onClick={handleAddEvent}>Add Event</button>
        <div style={{ height: '100vh' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            // messages={customMessages} // Pass your custom messages to the messages prop
          />
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
`
export default BigCalendar
