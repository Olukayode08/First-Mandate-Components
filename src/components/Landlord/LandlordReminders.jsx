import React, { useState } from 'react'
import styled from 'styled-components'
import { landlordReminder } from '../../datas/LandLordReminder'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import LandlordEmptyReminder from './LandlordEmptyReminder'

const LandlordReminders = () => {
  const [data, setData] = useState(landlordReminder)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const insertLineBreaks = (text) => {
    const maxLength = 70
    const words = text.split(' ')
    let lines = []
    let currentLine = ''

    words.forEach((word) => {
      if ((currentLine + word).length > maxLength) {
        lines.push(currentLine)
        currentLine = ''
      }
      currentLine += (currentLine ? ' ' : '') + word
    })

    if (currentLine) {
      lines.push(currentLine)
    }

    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  }
    if (data.length === 0) {
      return <div>
        <LandlordEmptyReminder />
      </div>
    }
  return (
    <>
      <LandlordR>
        <section>
          <main className='r-section'>
            <div className='landlord-reminder'>
              <div className='a-tenant'>
                <h3>Reminders</h3>
                <div className='set-reminders'>
                  {/* <Link to='/landlord/send-reminder' className='set-r'>
                    <h4>Send Reminder</h4>
                    <FaRegPlusSquare size={20} />
                  </Link> */}
                  <Link to='/landlord/add-reminder' className='add-r'>
                    <h4>Add Reminder</h4>
                    <FaRegPlusSquare size={20} />
                  </Link>
                </div>
              </div>
              {data.map((reminder) => {
                return (
                  <div key={reminder.id} className='reminders'>
                    <div className='r-due-date'>
                      <div className='img-amt'>
                        <img className='r-img' src={reminder.image} alt='' />
                        <div className='name-amt'>
                          <h3 className='r-amt'>Mr Kelly</h3>
                          <h3 className='r-amt'>{reminder.amount}</h3>
                        </div>
                      </div>

                      <p className='r-desc'>
                        {insertLineBreaks(reminder.description)}
                      </p>
                      <div className='l-btns'>
                        <p className='l-btn edit-icon'>Edit</p>
                        <p
                          className='l-btn delete'
                          onClick={() => handleDelete(reminder.id)}
                        >
                          Delete
                        </p>
                      </div>
                    </div>
                    <p className='r-mobile'>{reminder.description}</p>
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
  .r-section {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .landlord-reminder {
    display: flex;
    flex-direction: column;
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
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  .set-r,
  .add-r {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffe48e;
    padding: 15px;
    height: 48px;
    border-radius: 4px;
    width: 200px;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  /* .set-r {
    background-color: #ffffff;
    border: 1px solid black;
    height: 48px;
  } */
  .reminders {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #f6f6f8;
    margin: 10px 0;
    padding: 10px;
    border-radius: 4px;
    position: relative;
  }
  .img-amt,
  .r-due-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .r-due-date {
    width: 100%;
  }
  /* .r-img {
    width: 70px;
    height: 60px;
    border-radius: 4px;
  } */
  .name-amt {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
  }
  .r-amt {
    flex-shrink: 0;
    font-size: 16px;
  }
  .r-desc {
    margin-left: 45px;
    line-height: 21px;
    flex-shrink: 0;
  }
  .l-btns {
    display: flex;
    gap: 15px;
    justify-content: right;
    width: 100%;
  }
  .l-btn {
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    padding: 11px 17px;
  }
  .edit-icon {
    background-color: #fedf7e;
  }
  .delete {
    background-color: #ffdfe2;
  }
  .r-mobile {
    display: none;
    text-align: center;
    margin: 10px 0;
    flex-shrink: 0;
  }
  @media screen and (max-width: 900px) {
    .a-tenant {
      flex-direction: column;
      align-items: flex-start;
      justify-content: left;
    }
    .set-r,
    .add-r {
      width: 190px;
      flex-shrink: 0;
    }
    .set-reminders {
      margin: 20px 0 10px 0;
    }
    .r-desc {
      margin-left: 25px;
    }
  }
  @media screen and (max-width: 750px) {
    .r-due-date,
    .reminders {
      align-items: center;
      justify-content: space-between;
    }
    .r-desc {
      display: none;
      margin-left: 0;
    }
    .r-mobile {
      display: block;
    }
    /* .r-img {
      width: 60px;
      height: 50px;
    } */
  }
  @media screen and (max-width: 450px) {
    .r-section {
      padding: 5px;
    }
  }
`
export default LandlordReminders
