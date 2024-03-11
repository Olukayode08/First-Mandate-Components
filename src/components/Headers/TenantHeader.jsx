import React from 'react'
import { FaRegBell } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'

const TenantHeader = () => {
  return (
    <>
      <THeader>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <div className='user'>
            <p className='m-user'>Tenant</p>
            <div className='icons'>
              <FaRegBell className='icon' />
              <FaRegUser className='icon' />
            </div>
          </div>
        </div>
      </THeader>
    </>
  )
}

const THeader = styled.section`
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
  .m-user {
    font-size: 15px;
    margin-right: 7px;
    cursor: pointer;
  }
  .icons {
    display: flex;
    gap: 10px;
    border-left: 1px solid #000;
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
  @media screen and (max-width: 320px) {
    .user {
      gap: 5px;
    }
    .m-user {
      font-size: 13px;
    }
    .logo {
      left: 40px;
    }
    .icon {
      font-size: 17px;
    }
  }
`
export default TenantHeader
