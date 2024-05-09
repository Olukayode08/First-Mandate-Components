import React, { useState, useRef, useEffect } from 'react'
import { FaRegBell } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa'
import logo from '../../assets/1st mandate logo 1.png'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'
import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  const location = useLocation()
  const dropdownRef = useRef(null)

  const { data } = useFirstMandateQuery('/notification-count', {
    onSuccess: (data) => {},
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTimeout(() => {
          setDropdownOpen(false)
        }, 200)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const getUserRoleText = () => {
    if (location.pathname.startsWith('/landlord')) {
      return 'Landlord'
    } else if (location.pathname.startsWith('/manager')) {
      return 'Manager'
    } else if (location.pathname.startsWith('/tenant')) {
      return 'Tenant'
    } else {
      return 'Unknown Role'
    }
  }

  const handleDropdownClick = (event) => {
    event.stopPropagation()
  }

  // Define profile and notification paths based on the user role
  const profilePath = `/${getUserRoleText().toLowerCase()}/profile`
  const notificationPath = `/${getUserRoleText().toLowerCase()}/notifications`

  return (
    <>
      <PageH ref={dropdownRef}>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='1st Mandate' />
          </div>
          <div className='users'>
            <div>
              <div className='user' onClick={handleDropdownClick}>
                <div className='user-role'>{getUserRoleText()}</div>
                {/* {dropdownOpen ? (
                  <div className='user-role'>{getUserRoleText()}</div>
                ) : (
                  <p className='user-role'>{getUserRoleText()}</p>
                )} */}
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
                  {location.pathname.startsWith('/landlord') === false && (
                    <Link to='/landlord' className='user-role'>
                      Landlord
                    </Link>
                  )}
                  {location.pathname.startsWith('/manager') === false && (
                    <Link to='/manager' className='user-role'>
                      Manager
                    </Link>
                  )}
                  {location.pathname.startsWith('/tenant') === false && (
                    <Link to='/tenant' className='user-role'>
                      Tenant
                    </Link>
                  )}
                </div>
              )}
            </div>
            <div className='icons'>
              <Link className='link notification' to={notificationPath}>
                <FaRegBell size={18} className='icon' />
                <p className='notification-count'>{data?.data?.count}</p>
              </Link>
              <Link className='link' to={profilePath}>
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
