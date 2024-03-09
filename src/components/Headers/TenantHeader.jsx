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
            <div className='select-user'>
              <select name='user' id='user'>
                <option value='Tenant'>Tenant</option>
                <option value='Landlord'>Landlord</option>
                <option value='Manager'>Property Manager</option>
              </select>
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
  .select-user {
    position: absolute;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 7px;
  }
  select {
    width: 120px;
    font-size: 15px;
    border: none;
    margin-right: 7px;
    outline: none;
    background: transparent;
    color: #000;
    font-family: inherit;
    cursor: pointer;
  }
  .icons {
    display: flex;
    gap: 10px;
    border-left: 1px solid #000;
    margin-left: 10px;
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
  }
  @media screen and (max-width: 320px) {
    select {
      width: 90px;
    }
  }
`
export default TenantHeader
