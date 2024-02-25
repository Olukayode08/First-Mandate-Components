import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Email = () => {
  return (
    <>
      <EmailMP>
        <main>
          <Outlet />
        </main>
      </EmailMP>
    </>
  )
}
const EmailMP = styled.main``
export default Email
