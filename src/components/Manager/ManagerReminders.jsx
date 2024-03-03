import React from 'react'
import styled from 'styled-components'
import { landlordReminder } from '../../datas/LandLordReminder'
import editIcon from '../../assets/edit-btn.png'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'

const ManagerReminders = () => {
  return (
    <>
      <ManagerR>
        <section>
          <main className='r-section'>
            <div className='landlord-reminder'>
              <div className='a-tenant'>
                <h3>Reminders</h3>
                <div className='set-reminders'>
                  <Link to='/manager/send-reminder' className='set-r'>
                    <h4>Send Reminder</h4>
                    <FaRegPlusSquare size={20} />
                  </Link>
                  <Link to='/manager/add-reminder' className='add-r'>
                    <h4>Add Reminder</h4>
                    <FaRegPlusSquare size={20} />
                  </Link>
                </div>
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
      </ManagerR>
    </>
  )
}
const ManagerR = styled.section`
  position: relative;
  .r-section {
    position: absolute;
    right: 10px;
    width: 78%;
    margin: 0 auto;
    padding: 20px;
  }
  .landlord-reminder {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
  }
  .a-tenant {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
  }
  .set-reminders {
    display: flex;
    gap: 20px;
  }
  .set-r,
  .add-r {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 4px;
    width: 200px;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  .set-r {
    background-color: #ffffff;
    border: 1px solid black;
  }
  .r-due-date {
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 10px 0;
    border-radius: 5px;
    width: 100%;
    background: #f6f6f8;
    flex-shrink: 0;
    overflow-x: auto;
  }
  .r-img {
    width: 70px;
    height: 60px;
    border-radius: 4px;
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
    margin: 0 15px;
  }
  .l-btns {
    display: flex;
    gap: 20px;
    justify-content: right;
    align-items: flex-end;
    width: 100%;
  }
  .l-btn {
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
  @media screen and (max-width: 1320px) {
    .r-section {
      width: 74%;
    }
  }
  @media screen and (max-width: 1200px) {
    .r-section {
      width: 100%;
      left: 0;
    }
  }
  @media screen and (max-width: 900px) {
    .a-tenant {
      flex-direction: column;
    }
    .add-r {
      margin: 20px 0 10px 0;
    }
  }
`
export default ManagerReminders
