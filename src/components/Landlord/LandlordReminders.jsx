import React from 'react'
import styled from 'styled-components'
import { landlordReminder } from '../../datas/LandLordReminder'
import LandLordReminderSidebar from '../Sidebars/LandlordReminderSidebar'
import editIcon from '../../assets/edit-btn.png'
const LandlordReminders = () => {
  return (
    <>
      <LandLordReminderSidebar />
      <LandlordR>
        <section>
          <main className='r-section'>
            <div className='landlord-reminder'>
              <div className='reminder-h'>
                <h3>Reminders</h3>
              </div>
              {landlordReminder.map((reminder) => {
                return (
                  <div key={reminder.id} className='r-due-date'>
                    <img className='r-img' src={reminder.image} alt='' />
                    <div className='name-amt'>
                      <h3 className='r-amt'>Mr Kelly</h3>
                      <h3 className='r-amt'>{reminder.amount}</h3>
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
          </main>
        </section>
      </LandlordR>
    </>
  )
}
const LandlordR = styled.section`
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
    width: 90px;
  }
  .name-amt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
  }
  .r-amt {
    margin: 5px 0;
  }
  .r-amt,
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
    margin: 0 15px;
  }
  .l-btn {
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .edit-icon {
    padding: 8px 13px;
    background-color: #fedf7e;
  }
  .delete {
    padding: 11px 17px;
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
      width: 70px;
    }
  }
`
export default LandlordReminders
