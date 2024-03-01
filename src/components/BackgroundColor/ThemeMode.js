import React, { useContext } from 'react'
import ReactSwitch from 'react-switch'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Darkmode'

const ThemeMode = () => {
  const { toggleTheme, setActive, theme } = useContext(ThemeContext)

  const closeSidebar = () => {
    toggleTheme()
    if (window.innerWidth <= 1200) {
      setTimeout(() => {
        setActive(false)
      }, 500)
    }
  }
  return (
    <>
      <Wrapper>
        <main>
          {theme === 'light' ? <p>Light Mode</p> : <p>Dark Mode</p>}
          <ReactSwitch onChange={closeSidebar} checked={theme === 'dark'} />
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
