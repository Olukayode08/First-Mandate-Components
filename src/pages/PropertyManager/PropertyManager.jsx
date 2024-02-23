import React from 'react'
import PropertyManagerSidebar from '../../components/Sidebars/PropertyManagerSidebar'
import PropertyManagerHeader from '../../components/Headers/PropertyManagerHeader'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const PropertyManager = () => {
  return (
    <>
      <Wrapper>
        <section>
          <div className='p-manager-s'>
            <PropertyManagerSidebar />
          </div>
          <div className='p-manager-h'>
            <PropertyManagerHeader />
          </div>
        </section>
        <main>
          <Outlet />
        </main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section``

export default PropertyManager
