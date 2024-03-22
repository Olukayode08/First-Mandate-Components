import React from 'react'
import { FaRegBell } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'
import logo from '../../assets/1st mandate logo 1.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LandlordHeader = () => {
  return (
    <>
      <LandlordH>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <div className='user'>
            <p>Landlord</p>
            <div className='icons'>
              <Link className='link' to='/landlord/notifications'>
                <FaRegBell className='icon' />
              </Link>
              <Link className='link' to='/landlord/profile'>
                <FaRegUser className='icon' />
              </Link>
            </div>
          </div>
        </div>
      </LandlordH>
    </>
  )
}

const LandlordH = styled.section`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 30;
    height: 86px;
    background-color: #fff;
    position: relative;
  }
  .logo {
    position: absolute;
    left: 50px;
  }
  .user {
    position: absolute;
    right: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p {
    margin-right: 10px;
    font-size: 15px;
  }
  .icons {
    display: flex;
    gap: 10px;
    border-left: 1px solid #000;
  }
  .link {
    text-decoration: none;
    color: #000;
  }
  .icon {
    margin: 0 10px;
    font-size: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    .header {
      padding: 0 10px;
    }
    .user {
      right: 10px;
    }
  }
  @media screen and (max-width: 380px) {
    .user {
      right: 0;
      gap: 5px;
    }
    p {
      font-size: 14px;
    }
    .logo {
      left: 40px;
    }
    .icons {
      gap: 5px;
    }
    .icon {
      font-size: 17px;
    }
  }
`
export default LandlordHeader
