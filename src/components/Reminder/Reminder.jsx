import React from 'react'
import styled from 'styled-components'
import { landlordReminder } from '../../datas/LandLordReminder'
import LandLordReminderSidebar from '../../components/Sidebars/LandlordReminderSidebar'

const Reminder = () => {
  return (
    <>
      <LandLordReminderSidebar />
      <Wrapper>
        <section>
          <div className='landlord-reminder'>
            <div className='reminder-h'>
              <h3>Reminders</h3>
            </div>

            {landlordReminder.map((reminder) => {
              return (
                <div key={reminder.id} className='reminder'>
                  <div className='r-due-date'>
                    <img className='r-img' src={reminder.image} alt='' />
                    <div>
                      <div className='desc'>
                        <h3 className='d-date'>Rent Due Date</h3>
                        <h3>{reminder.amount}</h3>
                      </div>
                      <div className='desc'>
                        <h1 className='r-desc'>Description:</h1>
                        <p>{reminder.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className='l-btns'>
                    <p className='l-btn edit'>Edit</p>
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
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 2px solid black;
    width: 58%;
    margin: 0 auto;
    padding: 20px 0;
  }
  .landlord-reminder,
  .reminder {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .reminder-h {
    width: 80%;
    margin: 10px auto;
  }
  .reminder {
    background-color: #ffffff;
    padding: 20px;
    box-shadow: -2px 4px 16px 0px #eeeeee;
    margin: 10px 0;
    border-radius: 10px;
    width: 80%;
    margin: 10px auto;
  }

  .r-due-date {
    display: flex;
    align-items: center;
  }
  .r-desc,
  .d-date,
  .r-img {
    margin-right: 20px;
  }
  .desc {
    display: flex;
    align-items: center;
    margin: 15px 0;
  }
  .l-btns {
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 10px 0;
  }
  .l-btn {
    margin: 0 15px;
    padding: 8px 25px;
    border-radius: 5px;
    cursor: pointer;
  }
  .edit {
    background-color: #fedf7e;
  }
  .delete {
    background-color: #ffdfe2;
  }
`
export default Reminder
