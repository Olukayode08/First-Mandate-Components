import React from 'react'
import { FaRegBell } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'

import styled from 'styled-components'

const LandlordHeader = () => {
  return (
    <>
      <LandlordH>
        <section>
          <div className='header'>
            <div className='logo'>
              <BsThreeDots size={80} />
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
        </section>
      </LandlordH>
    </>
  )
}

const LandlordH = styled.section`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0px 2px 16px 0px #00000026;
    z-index: 30;
    height: 86px;
    background-color: #fff;
  }
  .select-user {
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
`
export default LandlordHeader
