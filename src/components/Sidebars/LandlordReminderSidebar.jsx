import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Squash as Hamburger } from 'hamburger-react'
import icon from '../../assets/Frame 1639.png'
import { landlordTenants } from '../../datas/LandlordTenant'
import Calendar from '../Calender/Calendar'
import calenderIcon from '../../assets/Frame 1770.png'
const LandLordReminderSidebar = () => {
  const [active, setActive] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleSize)
    handleSize()
    return () => window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    if (screenSize <= 1200) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [screenSize])

  return (
    <>
      <LandlordRS>
        <section>
          {/* Landlord Reminder Tenant Sidebar Content */}
          <div className='upload-ppt-btn'>
            <Hamburger
              toggled={active}
              toggle={setActive}
              easing='ease-in'
              size={20}
              direction='left'
            />
          </div>
          {/* Landlord Reminder Tenant Sidebar Content */}
          <main className={active ? 'ppt-sidebar' : null}>
            {active && (
              <div className='left-sidebar'>
                {/* Due Date count down */}
                <div className='l-due-date'>
                  <div className='next-due-date'>
                    <h1 className='l-due-date-h'>Next Due Date</h1>
                    <img src={calenderIcon} alt='Calender' />
                  </div>
                  <div className='date-countdown'>
                    <div className='next-due-date-c'>
                      <h3 className='num-c'>19</h3>
                      <h3 className='num-c'>12</h3>
                      <h3 className='num-c'>04</h3>
                      <h3 className='num-c'>10</h3>
                    </div>
                    <div className='next-due-date-c'>
                      <p className='days'>Days</p>
                      <p className='days'>Hours</p>
                      <p className='days'>Minutes</p>
                      <p className='days'>Seconds</p>
                    </div>
                  </div>
                  <p className='d-date'>Due Date</p>
                  <h1>20, March 2024</h1>
                </div>

                <div className='users'>
                  <div className='tenants'>
                    <h3 className='l-tenant-h'>Tenants</h3>
                    <p className='icon'>
                      <img src={icon} alt='Tenant' />
                    </p>
                  </div>

                  {landlordTenants.map((tenant) => {
                    return (
                      <div key={tenant.id} className='l-tenant'>
                        <img src={tenant.icon} alt='Tenant-Icon' />
                        <div className='username'>
                          <h3>{tenant.user}</h3>
                          <p className='location'>{tenant.ppt}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className='calender'>
                  <Calendar />
                </div>
              </div>
            )}
          </main>
        </section>
      </LandlordRS>
    </>
  )
}
const LandlordRS = styled.section`
  section {
    position: relative;
  }
  .upload-ppt-btn {
    position: absolute;
    top: 0;
    right: 0;
    color: #000;
    z-index: 100;
  }
  .ppt-sidebar {
    position: absolute;
    top: 35px;
    right: 0;
    width: 290px;
    z-index: 50;
  }
  .left-sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .l-due-date {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .next-due-date {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .l-due-date-h {
    font-size: 19px;
  }
  .date-countdown {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 15px 0;
  }
  .next-due-date-c {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3px;
    width: 100%;
  }
  .num-c {
    font-size: 25px;
  }
  .days {
    font-size: 14px;
  }
  .d-date {
    margin: 15px 0;
  }

  .users {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0 10px 0;
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .l-tenant-h {
    font-size: 18px;
  }
  .l-tenant {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 12px 0;
  }
  .tenants {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0;
  }

  .username {
    margin-left: 8px;
  }
  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
  }

  p {
    font-size: 16px;
  }
  .location {
    opacity: 0.7;
  }
`
export default LandLordReminderSidebar
