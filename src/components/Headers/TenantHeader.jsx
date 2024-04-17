import React, { useState } from 'react'
import { FaRegBell } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'

const TenantHeader = () => {
  const navigate = useNavigate()
  const { data } = useFirstMandateQuery('/notification-count', {
    onSuccess: (data) => {},
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const handleTenant = () => {
    navigate('/tenant')
    setDropdownOpen(false)
  }
  return (
    <>
      <THeader>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <div className='user'>
            <div>
              <Link
                className='user-role'
                to='#'
                // onClick={handleDropdownToggle}
              >
                Tenant
              </Link>
              {/* {dropdownOpen && (
                <div>
                  <Link to='/manager' className='user-role'>
                    Manager
                  </Link>
                  <Link to='/tenant' className='user-role'>
                    Tenant
                  </Link>
                </div>
              )} */}
            </div>
            <div className='icons'>
              <Link className='link notification' to='/tenant/notifications'>
                <FaRegBell className='icon' />
                <p className='notification-count'>{data?.data?.count}</p>
              </Link>
              <Link className='link' to='/tenant/profile'>
                <FaRegUser className='icon' />
              </Link>
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
  .user-role {
    margin: 5px 0;
    text-decoration: none;
    color: #000;
  }
  p {
    margin-right: 10px;
    font-size: 15px;
  }
  /* select {
    border: none;
    background: transparent;
    color: #000;
    outline: none;
    font-weight: inherit;
    font-size: 15px;
    margin-right: 5px;
    cursor: pointer;
    padding: 10px;
  } */
  .icons {
    display: flex;
    gap: 10px;
    border-left: 1px solid #000;
  }
  .link {
    text-decoration: none;
    color: #000;
  }
  .notification {
    position: relative;
  }
  .notification-count {
    position: absolute;
    top: -15px;
    right: 0;
    font-size: 13px;
    margin: 0 auto;
    text-align: center;
    color: #000;
    padding: 5px 8px;
    background-color: #fedf7e;
    border-radius: 50%;
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
    /* select {
      font-size: 13px;
    } */
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
export default TenantHeader
