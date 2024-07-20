import React, { createContext, useEffect, useState } from 'react'
import { useLogout } from '../hooks/useLogout'
import { useCookies } from 'react-cookie'
const FirstMandate = createContext()

const Context = ({ children }) => {
  const [cookies] = useCookies(['token'])
  const logout = useLogout()

  // Signup and Login Validation States
  const [isAuthenticated, setIsAuthenticated] = useState(!!cookies?.token)

  // Function to log the user out if inactive
  const logOut = () => {
    setIsAuthenticated(false)
    logout()
  }

  // Authentification Timer
  
  // useEffect(() => {
  //   let logoutTimer

  //   const clearInactiveUser = () => {
  //     logout()
  //     setIsAuthenticated(false)
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

  // useEffect(() => {
  //   const handleActivity = () => {
  //     clearTimeout(logoutTimer)
  //     logoutTimer = setTimeout(logOut, 5 * 60 * 1000)
  //   }

  //   let logoutTimer = setTimeout(logOut, 5 * 60 * 1000)

  //   document.addEventListener('mousemove', handleActivity)
  //   document.addEventListener('keydown', handleActivity)

  //   return () => {
  //     clearTimeout(logoutTimer)
  //     document.removeEventListener('mousemove', handleActivity)
  //     document.removeEventListener('keydown', handleActivity)
  //   }
  // }, [])

  return (
    <>
      <FirstMandate.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
          logOut,
        }}
      >
        {children}
      </FirstMandate.Provider>
    </>
  )
}

export { Context, FirstMandate }
