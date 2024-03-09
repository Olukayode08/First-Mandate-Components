import React from 'react'
import TenantSidebar from '../components/Sidebars/TenantSidebar'
import styled from 'styled-components'
import TenantHeader from '../components/Headers/TenantHeader'
import TenantHomePage from '../components/Tenant/TenantHomePage'

const PageLayout = () => {
  return (
    <>
      <TenantMP>
        <section className='main-p-s'>
          <div className='p-manager-h'>
            <TenantHeader />
          </div>
          <div className='p-manager-s'>
            <TenantSidebar />
          </div>
          <main className='tenant-pages'>
            <TenantHomePage />
          </main>
        </section>
      </TenantMP>
    </>
  )
}

const TenantMP = styled.section`
  .main-p-s {
    position: relative;
    width: 100%;
  }
  .p-manager-h {
    position: absolute;
    top: 0;
    width: 100%;
    height: 86px;
  }
  .p-manager-s {
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
  }
  .tenant-pages {
    position: absolute;
    top: 106px;
    right: 20px;
    width: 81%;
  }
  @media screen and (max-width: 1350px) {
    .tenant-pages {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .tenant-pages {
      width: 95%;
      top: 86px;
      left: 0;
      right: 0;
      margin: 20px auto;
      padding: 10px;
    }
  }
  @media screen and (max-width: 550px) {
    .tenant-pages {
      width: 90%;
    }
  }
`

export default PageLayout
