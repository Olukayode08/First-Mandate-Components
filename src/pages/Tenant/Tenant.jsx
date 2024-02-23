import React from 'react'
import TenantSidebar from '../../components/Sidebars/TenantSidebar'
import TenantHeader from '../../components/Headers/TenantHeader'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Tenant = () => {
  return (
    <>
      <Wrapper>
        <section>
          <div className='p-manager-s'>
            <TenantSidebar />
          </div>
          <div className='p-manager-h'>
            <TenantHeader />
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

export default Tenant
