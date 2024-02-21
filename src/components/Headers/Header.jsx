import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'

import styled from 'styled-components'

const Header = () => {
  return (
    <>
      <Wrapper>
        <section>
          <div className='header'>
            <BsThreeDots size={60} />
            <div className='select-user'>
              <select name='user' id='user'>
                <option value='Landlord'>Landlord</option>
                <option value='Tenant'>Tenant</option>
                <option value='Manager'>Manager</option>
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    background: #ffe48e;
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
export default Header
