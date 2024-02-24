import React from 'react'
import styled from 'styled-components'
import { landlordReminder } from '../../datas/LandLordReminder'
import LandLordReminderSidebar from '../Sidebars/LandlordReminderSidebar'
import editIcon from '../../assets/edit-01.png'
const LandlordReminders = () => {
  return (
    <>
      <LandLordReminderSidebar />
      <Wrapper>
        <section className='r-section'>
          <div className='landlord-reminder'>
            <div className='reminder-h'>
              <h3>Reminders</h3>
            </div>

            {landlordReminder.map((reminder) => {
              return (
                <div key={reminder.id} className='r-due-date'>
                  <img className='r-img' src={reminder.image} alt='' />
                  <div className='name-amt'>
                    <h3 className='d-date'>Mr Kelly</h3>
                    <h3 className='d-date'>{reminder.amount}</h3>
                  </div>
                  <p className='r-desc'>{reminder.description}</p>
                  <div className='l-btns'>
                    <img
                      className='l-btn edit-icon'
                      src={editIcon}
                      alt='Edit'
                    />
                    <p className='l-btn delete'>Delete</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  position: relative;
  .r-section {
    position: absolute;
    left: 300px;
    width: 52%;
    margin: 0 auto;
    padding: 20px 0;
  }
  .landlord-reminder {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .reminder-h {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
  .r-due-date {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: -2px 4px 16px 0px #eeeeee;
    margin: 10px 0;
    border-radius: 5px;
    width: 100%;
    flex-shrink: 0;
    overflow-x: auto;
  }
  .r-img {
    width: 10%;
  }
  .name-amt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
  }
  .d-date {
    margin: 5px 0;
  }
  .d-date,
  .r-img {
    margin-right: 20px;
    flex-shrink: 0;
  }
  .desc {
    display: flex;
    align-items: center;
    margin: 15px 0;
  }
  .r-desc {
    flex-shrink: 0;
  }
  .l-btns {
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 10px 0;
  }
  .l-btn {
    margin: 0 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  .edit-icon {
    width: 60px;
    padding: 0 10px;
    background-color: #fedf7e;
  }
  .delete {
    width: 80px;
    text-align: center;
    padding: 11px 0;
    background-color: #ffdfe2;
  }
  @media screen and (max-width: 1290px) {
    .r-section {
      width: 48%;
    }
  }
  @media screen and (max-width: 1200px) {
    h3 {
      text-align: center;
    }
    .r-section {
      width: 100%;
      left: 0;
    }
    .r-due-date {
      width: 100%;
      background-color: none;
      box-shadow: none;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 700px) {
    .r-due-date {
      align-items: center;
      justify-content: left;
    }
    .r-img {
      width: 17%;
    }
  }
`
export default LandlordReminders
