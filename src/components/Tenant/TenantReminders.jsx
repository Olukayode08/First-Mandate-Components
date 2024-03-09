import React from 'react'
import styled from 'styled-components'
import { landlordReminder } from '../../datas/LandLordReminder'

const TenantReminders = () => {

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
  return (
    <>
      <TenantR>
        <section>
          <main className='r-section'>
            <div className='landlord-reminder'>
              <h3 className='r-heading'>Reminders</h3>
              {landlordReminder.map((reminder) => {
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
                      </div>
                    </div>
                    <p className='r-mobile'>{reminder.description}</p>
                  </div>
                )
              })}
            </div>
          </main>
        </section>
      </TenantR>
    </>
  )
}
const TenantR = styled.section`
  position: relative;
  .r-section {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    width: 81%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .landlord-reminder {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .r-heading {
    margin: 20px 0;
  }
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
  .r-img {
    width: 70px;
    height: 60px;
    border-radius: 4px;
  }
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
    gap: 20px;
    justify-content: right;
    width: 100%;
  }
  .l-btn {
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }
  .edit-icon {
    padding: 11px 17px;
    background-color: #fedf7e;
  }
  .r-mobile {
    display: none;
    text-align: center;
    margin: 10px 0;
    flex-shrink: 0;
  }
  @media screen and (max-width: 1350px) {
    .r-section {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .r-section {
      width: 90%;
      top: 0;
      left: 0;
      right: 0;
      margin: 20px auto;
      padding: 10px;
    }
  }
  @media screen and (max-width: 900px) {
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
    .r-img {
      width: 60px;
      height: 50px;
    }
  }
  @media screen and (max-width: 450px) {
    .r-section {
      padding: 5px;
    }
  }
`
export default TenantReminders
