import React from 'react'
import TenantSidebar from '../components/Sidebars/TenantSidebar'
import Header from '../components/Headers/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Tenant = () => {
  return (
    <>
      <TenantMP>
        <section className='tenant-page'>
          <div className='tenant-header'>
            <Header />
          </div>
          <div className='tenant-sidebar'>
            <TenantSidebar />
          </div>
          <main className='tenant-children'>
            <Outlet />
          </main>
        </section>
      </TenantMP>
    </>
  )
}

const TenantMP = styled.section`
  .tenant-page {
    position: relative;
    width: 100%;
  }
  .tenant-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 86px;
    z-index: 100;
  }
  .tenant-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 230px;
  }
  .tenant-children {
    position: absolute;
    overflow-y: auto;
    top: 106px;
    right: 20px;
    width: 81%;
  }
  @media screen and (min-width: 2000px) {
    .tenant-children {
      width: 84%;
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 1350px) {
    .tenant-children {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .tenant-children {
      width: 95%;
      top: 86px;
      left: 0;
      right: 0;
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 550px) {
    .tenant-children {
      margin: 10px auto;
    }
  }
`

export default Tenant
