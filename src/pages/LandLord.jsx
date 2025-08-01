import React from 'react'
import styled from 'styled-components'
import LandlordSidebar from '../components/Sidebars/LandlordSidebar'
import Header from '../components/Headers/Header'
import { Outlet } from 'react-router-dom'

const LandLord = () => {
  return (
    <>
      <LandlordMP>
        <section className='landlord-page'>
          <div className='landlord-header'>
            <Header />
          </div>
          <div className='landlord-sidebar'>
            <LandlordSidebar />
          </div>
          <main className='landlord-children'>
            <Outlet />
          </main>
        </section>
      </LandlordMP>
    </>
  )
}
const LandlordMP = styled.section`
  .landlord-page {
    position: relative;
    width: 100%;
  }
  .landlord-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 86px;
    z-index: 100;
  }
  .landlord-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 230px;
  }
  .landlord-children {
    position: absolute;
    overflow-y: auto;
    top: 106px;
    right: 20px;
    width: 81%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 2000px) {
    .landlord-children {
      width: 84%;
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 1350px) {
    .landlord-children {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .landlord-children {
      width: 95%;
      top: 86px;
      left: 0;
      right: 0;
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 550px) {
    .landlord-children {
      margin: 10px auto;
    }
  }
`
export default LandLord
