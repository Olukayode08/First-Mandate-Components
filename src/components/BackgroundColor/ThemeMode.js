import React, { useContext } from 'react'
import ReactSwitch from 'react-switch'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Darkmode'

const ThemeMode = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <>
      <Wrapper>
        <main>
          {theme === 'light' ? <p>Light Mode</p> : <p>Dark Mode</p>}
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
      margin: 20px 0;
  }
`
export default ThemeMode
