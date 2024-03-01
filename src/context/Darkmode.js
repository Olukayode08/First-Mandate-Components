import React, { createContext, useState } from 'react'

const ThemeContext = createContext(null)

const Darkmode = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [active, setActive] = useState(true)

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
          active,
          setActive,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export { Darkmode, ThemeContext }
