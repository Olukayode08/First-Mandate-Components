import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import icon from '../../assets/undraw_new_notifications_re_xpcv.png'
const ManagerEmptyNotice = () => {
  return (
    <>
      <ManagerEN>
        <section>
          <div className='e-section'>
            <img src={icon} alt='House' />
            <p>Please send a notice to see a list of your notice here.</p>
            <Link to='/manager/send-notice' className='add-r'>
              <h4>Send Notification</h4>
              <FaRegPlusSquare size={20} />
            </Link>
          </div>
        </section>
      </ManagerEN>
    </>
  )
}
const ManagerEN = styled.section`
  .e-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
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
  @media screen and (max-width: 900px) {
    img {
      width: 25%;
    }
  }
`
export default ManagerEmptyNotice
