import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Squash as Hamburger } from 'hamburger-react'
import { IoHomeOutline } from 'react-icons/io5'
import { FaFileImport } from 'react-icons/fa'
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2'
import { LuWalletCards } from 'react-icons/lu'
import { MdOutlineOnDeviceTraining } from 'react-icons/md'
import { IoNotifications } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import ThemeMode from '../BackgroundColor/ThemeMode'
import { ThemeContext } from '../../context/Darkmode'

const TenantSidebar = () => {
  const { active, setActive } = useContext(ThemeContext)
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleSize)
    handleSize()
    return () => window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    if (screenSize <= 1250) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [screenSize, setActive])

  const closeSidebar = () => {
    if (window.innerWidth <= 1250) {
      setActive(false)
    }
  }

  const location = useLocation()

  return (
    <>
      <TenantS>
        <section>
          {/* Sidebar Btn */}
          <div className='sidebar-btn'>
            <Hamburger
              toggled={active}
              toggle={setActive}
              easing='ease-in'
              size={20}
              direction='left'
            />
          </div>
          <main className={active ? 'sidebar' : null}>
            {active && (
              <div className='left-sidebar'>
                <Link
                  onClick={closeSidebar}
                  className={
                    location.pathname === '/tenant' ? 'active links' : 'links'
                  }
                  to='/tenant'
                >
                  <IoHomeOutline size={23} className='icon' />
                  <p className='desc'>Home</p>
                </Link>
                <Link
                  onClick={closeSidebar}
                  className={
                    location.pathname === '/tenant/apartment-details' ||
                    location.pathname === '/tenant/apartment-details-two' ||
                    location.pathname === '/tenant/add-apartment-details'
                      ? 'active links'
                      : 'links'
                  }
                  to='/tenant/apartment-details'
                >
                  <FaFileImport size={23} className='icon' />
                  <p className='desc'>Apartment</p>
                </Link>
                <Link onClick={closeSidebar} className='links' to='#'>
                  <HiOutlineSquare3Stack3D size={23} className='icon' />
                  <p className='desc'>Landlord</p>
                </Link>
                <Link onClick={closeSidebar} className='links' to='#'>
                  <MdOutlineOnDeviceTraining size={23} className='icon' />
                  <p className='desc'>Manager</p>
                </Link>
                <Link
                  onClick={closeSidebar}
                  className={
                    location.pathname === '/tenant/reminders' ||
                    location.pathname === '/tenant/add-reminder'
                      ? 'active links'
                      : 'links'
                  }
                  to='/tenant/reminders'
                >
                  <LuWalletCards size={23} className='icon' />
                  <p className='desc'>Reminders</p>
                </Link>
                <Link
                  onClick={closeSidebar}
                  className={
                    location.pathname === '/tenant/notifications'
                      ? 'active links'
                      : 'links'
                  }
                  to='/tenant/notifications'
                >
                  <IoNotifications size={23} className='icon' />
                  <p className='desc'>Notifications</p>
                </Link>
                <Link
                  onClick={closeSidebar}
                  className={
                    location.pathname === '/tenant/payment' ||
                    location.pathname === '/tenant/payment-review'
                      ? 'active links'
                      : 'links'
                  }
                  to='/tenant/payment'
                >
                  <LuWalletCards size={23} className='icon' />
                  <p className='desc'>Payment</p>
                </Link>
                <div className='banner-add'>
                  <img
                    src='data:image/jpeg;base64,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'
                    alt='Advertisment'
                  />
                  <h4>Banner Ad</h4>
                  <p className='banner-content'>Lorem Ipsum</p>
                </div>
                <div className='theme'>
                  <ThemeMode />
                </div>
              </div>
            )}
          </main>
        </section>
      </TenantS>
    </>
  )
}
const TenantS = styled.section`
  section {
    position: relative;
  }
  .sidebar-btn {
    position: absolute;
    top: 20px;
    left: 0;
    color: #000;
    z-index: 100;
    display: none;
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 88px;
    left: 0;
    width: 230px;
    flex: 0 0 auto;
    background-color: #ffffff;
    z-index: 50;
  }

  .left-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    padding: 10px 0;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin: 15px 0;
    width: 165px;
    text-decoration: none;
    color: #000000;
    padding: 12px 0 12px 12px;
  }
  .icon {
    margin-right: 10px;
  }
  p {
    flex-shrink: 0;
    font-size: 14px;
  }
  .active {
    background-color: #f6f6f8;
    border-radius: 10px;
  }
  .banner-add {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 165px;
    margin: 20px 0;
  }
  img {
    width: 100%;
    height: 130px;
    border-radius: 10px;
    margin: 10px 0;
  }
  .banner-content {
    font-size: 16px;
    margin: 7px 0;
  }
  .theme {
    margin-top: 60px;
    width: 165px;
  }
  @media screen and (max-width: 1250px) {
    .sidebar-btn {
      display: block;
    }
  }
`
export default TenantSidebar
