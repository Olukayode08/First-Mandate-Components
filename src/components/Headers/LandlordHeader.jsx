import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'

import styled from 'styled-components'

const LandlordHeader = () => {
  return (
    <>
      <Wrapper>
        <section>
          <div className='header'>
            <div className='select-user'>
              <select name='user' id='user'>
                <option value='Landlord'>Landlord</option>
                <option value='Manager'>Property Manager</option>
                <option value='Tenant'>Tenant</option>
              </select>
              <div className='icons'>
                <FaBell className='icon' />
                <FaRegUser className='icon' />
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .header {
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 20px;
    background: #ffffff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 30;
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
    border-left: 1px solid #000;
    margin-left: 7px;
  }
  .icon {
    margin: 0 10px;
    color: #fff;
    background-color: #000;
    padding: 10px;
    border-radius: 20px;
    font-size: 35px;
    cursor: pointer;
  }
`
export default LandlordHeader
