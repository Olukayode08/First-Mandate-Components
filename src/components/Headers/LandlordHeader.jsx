import React from 'react'
import { FaRegBell } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'
import logo from '../../assets/1st mandate logo 1.png'
import styled from 'styled-components'

const LandlordHeader = () => {
  return (
    <>
      <LandlordH>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <div className='select-user'>
            <select name='user' id='user'>
              <option value='Landlord'>Landlord</option>
              <option value='Manager'>Property Manager</option>
              <option value='Tenant'>Tenant</option>
            </select>
            <div className='icons'>
              <FaRegBell className='icon' />
              <FaRegUser className='icon' />
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
  .select-user {
    position: absolute;
    right: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  select {
    border: none;
    background: transparent;
    color: #000;
    outline: none;
    font-weight: inherit;
    font-size: 15px;
    margin-right: 5px;
    cursor: pointer;
    padding: 10px;
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
    .select-user {
      right: 10px;
    }
  }
  @media screen and (max-width: 380px) {
    .select-user {
      right: 0;
      gap: 5px;
    }
    select {
      font-size: 13px;
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
