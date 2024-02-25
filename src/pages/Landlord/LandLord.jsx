import React from 'react'
import styled from 'styled-components'
import LandlordSidebar from '../../components/Sidebars/LandlordSidebar'
import LandlordHeader from '../../components/Headers/LandlordHeader'
import { Outlet } from 'react-router-dom'

const LandLord = () => {
  return (
    <>
      <LandlordMP>
        <section>
          <div className='landlord-s'>
            <LandlordSidebar />
          </div>
          <div className='landlord-h'>
            <LandlordHeader />
          </div>
        </section>
        <main>
          <Outlet />
        </main>
      </LandlordMP>
    </>
  )
}
const LandlordMP = styled.section``
export default LandLord
