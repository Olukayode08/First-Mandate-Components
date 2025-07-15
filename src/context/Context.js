import React, { createContext, useEffect, useState } from 'react'
import { useLogout } from '../hooks/useLogout'
import { useCookies } from 'react-cookie'
const FirstMandate = createContext()

const Context = ({ children }) => {
  const [cookies] = useCookies(['token'])

  const logout = useLogout()

  const [theme, setTheme] = useState('light')

  const [active, setActive] = useState(true)

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  // Authentification Timer

  // useEffect(() => {
  //   let logoutTimer

  //   const clearInactiveUser = () => {
  //     logout()
  //   }

  //   const resetLogoutTimer = () => {
  //     clearTimeout(logoutTimer)
  //     logoutTimer = setTimeout(clearInactiveUser, 10 * 60 * 1000) // 10 minutes
  //   }
  //   const clearLogoutTimer = () => {
  //     clearTimeout(logoutTimer)
  //   }
  //   const handleUserActivity = () => {
  //     resetLogoutTimer()
  //   }
  //   const userActivityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart']
  //   userActivityEvents.forEach((event) => {
  //     window.addEventListener(event, handleUserActivity)
  //   })
  //   resetLogoutTimer()
  //   return () => {
  //     userActivityEvents.forEach((event) => {
  //       window.removeEventListener(event, handleUserActivity)
  //     })
  //     clearLogoutTimer()
  //   }
  // }, [])

  return (
    <>
      <FirstMandate.Provider
        value={{
          theme,
          toggleTheme,
          active,
          setActive,
        }}
      >
        {children}
      </FirstMandate.Provider>
    </>
  )
}

export { Context, FirstMandate }
