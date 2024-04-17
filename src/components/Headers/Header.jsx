import React, { useState } from 'react'
import { FaRegBell } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'
import logo from '../../assets/1st mandate logo 1.png'
import styled from 'styled-components'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'
import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { data } = useFirstMandateQuery('/notification-count', {
    onSuccess: (data) => {},
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const getUserRoleText = () => {
    if (location.pathname === '/tenant') {
      return 'Tenant'
    } else if (location.pathname === '/manager') {
      return 'Manager'
    } else {
      return 'Landlord'
    }
  }
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <>
      <PageH>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <div className='users'>
            <div>
              <div className='user'>
                {dropdownOpen ? (
                  <div className='user-role'>{getUserRoleText()}</div>
                ) : (
                  <p className='user-role'>{getUserRoleText()}</p>
                )}
                <div onClick={handleDropdownToggle}>
                  {dropdownOpen ? (
                    <IoIosArrowDown size={15} />
                  ) : (
                    <IoIosArrowUp size={15} />
                  )}
                </div>
              </div>
              {dropdownOpen && (
                <div className='select-user'>
                  {location.pathname !== '/landlord' && (
                    <Link to='/landlord' className='user-role'>
                      Landlord
                    </Link>
                  )}
                  {location.pathname !== '/manager' && (
                    <Link to='/manager' className='user-role'>
                      Manager
                    </Link>
                  )}
                  {location.pathname !== '/tenant' && (
                    <Link to='/tenant' className='user-role'>
                      Tenant
                    </Link>
                  )}
                </div>
              )}
            </div>
            <div className='icons'>
              <Link className='link notification' to='/landlord/notifications'>
                <FaRegBell size={18} className='icon' />
                <p className='notification-count'>{data?.data?.count}</p>
              </Link>
              <Link className='link' to='/landlord/profile'>
                <FaRegUser size={18} className='icon' />
              </Link>
            </div>
          </div>
        </div>
      </PageH>
    </>
  )
}

const PageH = styled.section`
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
  img {
    width: 60%;
  }
  .users {
    position: absolute;
    right: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .user {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .select-user {
    display: flex;
    flex-direction: column;
  }
  .user-role {
    margin: 3px 0;
    text-decoration: none;
    color: #000;
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
    .users {
      right: 10px;
    }
  }
  @media screen and (max-width: 380px) {
    .users {
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
export default Header
