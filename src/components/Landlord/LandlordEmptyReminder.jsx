import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import icon from '../../assets/undraw_new_notifications_re_xpcv.png'
const LandlordEmptyReminder = () => {
  return (
    <>
      <LandlordER>
        <section>
          <div className='e-section'>
            <img src={icon} alt='House' />
            <p>Please add a reminder to see a list of your reminders here.</p>
            <Link className='add-r'>
              <h4>Add Reminder</h4>
              <FaRegPlusSquare size={20} />
            </Link>
          </div>
        </section>
      </LandlordER>
    </>
  )
}
const LandlordER = styled.section`
  section {
    position: relative;
  }
  .e-section {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 81%;
    background-color: #ffffff;
    padding: 20px;
  }
  p {
    margin: 30px 0;
    text-align: center;
    line-height: 22px;
  }
  .add-r {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffe48e;
    gap: 15px;
    padding: 15px;
    border-radius: 4px;
    width: 250px;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  @media screen and (max-width: 1350px) {
    .e-section {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .e-section {
      width: 100%;
      left: 0;
      padding: 10px;
    }
  }
  @media screen and (max-width: 900px) {
    img {
      width: 25%;
    }
  }
`
export default LandlordEmptyReminder
