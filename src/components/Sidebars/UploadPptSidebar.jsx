import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Squash as Hamburger } from 'hamburger-react'
import { FaRegPlusSquare } from 'react-icons/fa'
import { tenants } from '../../datas/TenantsData'
import { Link } from 'react-router-dom'
import { FaExpandArrowsAlt } from 'react-icons/fa'

const UploadPptSidebar = () => {
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
      <UPSidebar>
        <section>
          {/* Upload Property Sidebar Btn */}
          <div className='upload-ppt-btn'>
            <Hamburger
              toggled={active}
              toggle={setActive}
              easing='ease-in'
              size={20}
              direction='left'
            />
          </div>
          {/* Upload Property Sidebar Content */}
          <main className={active ? 'ppt-sidebar' : null}>
            {active && (
              <div className='left-sidebar'>
                <Link to='/upload-ppt' className='upload-ppt'>
                  <h4>Upload New Property</h4>
                  <FaRegPlusSquare size={20} />
                </Link>
                <div className='add-manager'>
                  <Link to='#' className='add-manager-btn'>
                    <h4>Add Manager</h4>
                    <FaRegPlusSquare size={20} />
                  </Link>
                  <p>Please use the + button to add a manager</p>
                </div>

                <div className='users'>
                  <div className='tenants'>
                    <h1>Tenants</h1>
                    <p className='icon'>
                      <FaExpandArrowsAlt />
                    </p>
                  </div>
                  <Link to='#' className='upload-ppt'>
                    <h4>Add New Tenant</h4>
                    <FaRegPlusSquare size={20} />
                  </Link>
                  {tenants.map((tenant) => {
                    return (
                      <div key={tenant} className='user-ppt'>
                        {tenant.iconTwo}
                        <div className='username'>
                          <h3>{tenant.user}</h3>
                          <p className='location'>{tenant.ppt}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </main>
        </section>
      </UPSidebar>
    </>
  )
}
const UPSidebar = styled.section`
  section {
    position: relative;
  }
  .upload-ppt-btn {
    position: fixed;
    top: 0;
    right: 0;
    color: #000;
    z-index: 100;
  }
  .ppt-sidebar {
    position: absolute;
    top: 35px;
    right: 0;
    width: 300px;
    z-index: 50;
  }
  .left-sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  /* .add-manager, */
  .upload-ppt {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    text-decoration: none;
    color: #000;
  }
  .add-manager {
    flex-direction: column;
    background-color: #e2f6ff;
    color: #000;
    padding: 15px;
    border-radius: 10px;
    margin: 20px 0;
  }
  .add-manager-btn {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
    color: #000;
    margin-bottom: 25px;
  }

  .users {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0 10px 0;
    width: 100%;
    padding: 15px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .tenants {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0;
  }
  .user-ppt {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 12px 0;
  }

  .username {
    padding-left: 5px;
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
export default UploadPptSidebar
