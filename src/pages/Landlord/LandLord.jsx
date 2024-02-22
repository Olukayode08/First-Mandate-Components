import React from 'react'
import styled from 'styled-components'
import FirstMandateSidebar from '../../components/Sidebars/FirstMandateSidebar'
import Header from '../../components/Headers/Header'
import { Outlet } from 'react-router-dom'

const LandLord = () => {
  return (
    <>
      <Wrapper>
        <section>
          <div className='landlord-s'>
            <FirstMandateSidebar />
          </div>
          <div className='landlord-h'>
            <Header />
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
export default LandLord
