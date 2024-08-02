import React, { useState } from 'react'
import styled from 'styled-components'
import { dueDates } from '../../datas/Duedates'
import { MdOutlineDelete } from 'react-icons/md'

const RentDueDate = () => {
  const [activeTab, setActiveTab] = useState('Upcoming')

  const renderEvents = (dates) => {
    return dates.map((date) => (
      <div key={date.id} className='date-card'>
        <div className='cards'>
          <div className='date'>
            <p>{date.dow}</p>
            <h1>{date.date}</h1>
          </div>
          <div className='status'>
            <p>{date.time}</p>
            <p>{date.status}</p>
          </div>
          <div className='amount'>
            <p>{date.text}</p>
            <p>{date.amount}</p>
          </div>
        </div>

        <div className='btns'>
          <p className='edit'>Edit</p>
          <div className='delete-btn'>
            <MdOutlineDelete size={20} />
          </div>
        </div>
      </div>
    ))
  }

  const renderMonths = () => {
    const months = Object.keys(dueDates[activeTab])
    return months.map((month) => (
      <div key={month} className='months-date'>
        <h3>{month}</h3>
        {renderEvents(dueDates[activeTab][month])}
      </div>
    ))
  }
  return (
    <>
      <DueDate>
        <main>
          <div className='d-date'>
            <h2>Due Dates</h2>
            <div className='tabs'>
              <p
                onClick={() => setActiveTab('Upcoming')}
                className={
                  activeTab === 'Upcoming' ? 'active nav-tab' : 'nav-tab'
                }
              >
                Upcoming
              </p>
              <p
                onClick={() => setActiveTab('Past')}
                className={activeTab === 'Past' ? 'active nav-tab' : 'nav-tab'}
              >
                Past
              </p>
              <p
                onClick={() => setActiveTab('Cancelled')}
                className={
                  activeTab === 'Cancelled' ? 'active nav-tab' : 'nav-tab'
                }
              >
                Cancelled
              </p>
            </div>
            <main className='months-date'>{renderMonths()}</main>
          </div>
        </main>
      </DueDate>
    </>
  )
}

const DueDate = styled.section`
  .d-date {
    background-color: #fff;
    padding: 20px;
  }
  .tabs {
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 20px 0;
    background: #f6f6f8;
    padding: 15px;
    width: 300px;
  }
  .active {
    background-color: #fff;
    padding: 10px;
    border-radius: 4px;
  }
  .nav-tab {
    cursor: pointer;
  }
  .months-date {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .date-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #0000004d;
    padding: 15px;
    background: #f6f6f8;
  }
  .btns,
  .cards {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .date {
    border-right: 1px solid #0000004d;
    padding-right: 30px;
  }
  h1 {
    font-size: 25px;
  }
  .date,
  .status,
  .amount {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  .edit {
    background-color: #000;
    color: #fff;
    padding: 7px 17px;
    border-radius: 5px;
    cursor: pointer;
  }
  .delete-btn {
    color: red;
    border: 1px solid red;
    border-radius: 5px;
    padding: 5px 17px;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    .cards,
    .date-card {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
    h1 {
      font-size: 16px;
    }
    .date,
    .status,
    .amount {
      flex-direction: row;
      align-items: center;
    }
    .amount {
      flex-wrap: wrap;
    }
    .date {
      border-right: none;
      padding-right: 0;
    }
  }

  @media screen and (max-width: 320px) {
    .tabs {
      width: 270px;
    }
    p {
      font-size: 14px;
    }
  }
`
export default RentDueDate
