import React from 'react'
import PropertyManagerSidebar from '../../components/Sidebars/PropertyManagerSidebar'
import PropertyManagerHeader from '../../components/Headers/PropertyManagerHeader'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const PropertyManager = () => {
  return (
    <>
      <PManagerMP>
        <section className='p-manager-page'>
          <div className='p-manager-h'>
            <PropertyManagerHeader />
          </div>
          <div className='p-manager-sidebar'>
            <PropertyManagerSidebar />
          </div>

          <main className='p-manager-children'>
            <Outlet />
          </main>
        </section>
      </PManagerMP>
    </>
  )
}

const PManagerMP = styled.section`
  .p-manager-page {
    position: relative;
    width: 100%;
  }
  .p-manager-header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 86px;
  }
  .p-manager-sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
  }
  .p-manager-children {
    position: absolute;
    top: 106px;
    right: 20px;
    width: 81%;
  }
  @media screen and (min-width: 2000px) {
    .p-manager-children {
      width: 84%;
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 1350px) {
    .p-manager-children {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .p-manager-children {
      width: 95%;
      top: 86px;
      left: 0;
      right: 0;
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 550px) {
    .p-manager-children {
      margin: 10px auto;
    }
  }
`

export default PropertyManager
