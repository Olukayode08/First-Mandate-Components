import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Squash as Hamburger } from 'hamburger-react'
import { IoHome } from 'react-icons/io5'
import { FaUserEdit } from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import { FaFileMedicalAlt } from 'react-icons/fa'
import { FaRegFilePdf } from 'react-icons/fa'
import ThemeMode from '../BackgroundColor/ThemeMode'
const Sidebar = () => {
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
      <MobileS>
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
          {/* Sidebar content */}
          <main className={active ? 'sidebar' : null}>
            {active && (
              <div className='left-sidebar'>
                <IoHome className='icon' />
                <FaUserEdit className='icon active' />
                <BiMessageDetail className='icon' />
                <FaFileMedicalAlt className='icon' />
                <FaRegFilePdf className='icon' />
                <FaFileMedicalAlt className='icon' />
                <FaRegFilePdf className='icon' />

                <div className='advert'>Advert</div>
                <ThemeMode />
              </div>
            )}
          </main>
        </section>
      </MobileS>
    </>
  )
}
const MobileS = styled.section`
  section {
    position: relative;
    height: 100%;
  }
  .sidebar-btn {
    position: fixed;
    top: 0;
    left: 10px;
    color: #000;
    z-index: 20;
  }
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 170px;
    padding: 20px 0;
    background: #ffffff;
    box-shadow: 0px 2px 16px 0px #00000026;
    z-index: 10;
  }
  .left-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .icon {
    margin: 27px 0;
    cursor: pointer;
    font-size: 20px;
  }

  .active {
    background-color: #fff;
    padding: 10px;
    font-size: 37px;
    border-radius: 5px;
  }
  .advert {
    border: 1px solid black;
    height: 300px;
  }
`
export default Sidebar
