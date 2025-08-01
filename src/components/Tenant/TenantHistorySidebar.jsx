import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Squash as Hamburger } from 'hamburger-react'
import { GoArrowUpRight } from 'react-icons/go'
import { paymentSidebar } from '../../datas/constants'

const TenantHistorySidebar = () => {
  const [active, setActive] = useState(true)
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
  }, [screenSize])

  return (
    <>
      <THSidebar>
        <section>
          {/* Upload Property Sidebar Btn */}
          <div className='sidebar-btn'>
            <Hamburger
              toggled={active}
              toggle={setActive}
              easing='ease-in'
              size={20}
              direction='left'
            />
          </div>
          {/* Upload Property Sidebar Content */}
          {active && (
            <div className='right-sidebar'>
              <h3>History</h3>
              <p className='text'>Check past transactions</p>
              {paymentSidebar.map((payment) => {
                return (
                  <div key={payment.id} className='payments'>
                    <div className='arrow'>
                      <GoArrowUpRight size={25} />
                    </div>
                    <p className='p-text'>{payment.text}</p>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      </THSidebar>
    </>
  )
}
const THSidebar = styled.section`
  .sidebar-btn {
    position: absolute;
    top: -34px;
    right: 0;
    color: #000;
    z-index: 100;
    display: none;
  }
  .right-sidebar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    margin: 15px;
  }
  .text {
    font-size: 14px;
  }
  .payments {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    background-color: #f6f6f8;
    border-radius: 4px;
    margin: 5px 0;
  }
  .arrow {
    background-color: #ffffff;
    padding: 5px 0;
    text-align: center;
    border-radius: 4px;
    width: 50px;
  }
  .p-text {
    font-size: 15px;
  }
  @media screen and (max-width: 1250px) {
    .sidebar-btn {
      display: block;
    }
  }
  @media screen and (max-width: 550px) {
    .sidebar-btn {
      top: -24px;
    }
  }
`
export default TenantHistorySidebar
