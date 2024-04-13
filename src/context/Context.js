import React, { createContext, useEffect, useState } from 'react'
const FirstMandate = createContext()

const Context = ({ children }) => {
  // Signup and Login Validation States
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  )

  // Function to log the user out if inactive
  const logOut = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }

  // Authentification Timer
  useEffect(() => {
    let logoutTimer

    const clearInactiveUser = () => {
      localStorage.removeItem('token')
      setIsAuthenticated(false)
    }

    const resetLogoutTimer = () => {
      clearTimeout(logoutTimer)
      logoutTimer = setTimeout(clearInactiveUser, 5 * 60 * 1000) // 5 minutes
    }
    const clearLogoutTimer = () => {
      clearTimeout(logoutTimer)
    }
    const handleUserActivity = () => {
      resetLogoutTimer()
    }
    const userActivityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart']
    userActivityEvents.forEach((event) => {
      window.addEventListener(event, handleUserActivity)
    })
    resetLogoutTimer()
    return () => {
      userActivityEvents.forEach((event) => {
        window.removeEventListener(event, handleUserActivity)
      })
      clearLogoutTimer()
    }
  }, [])


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
