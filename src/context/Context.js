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

  useEffect(() => {
    const handleActivity = () => {
      clearTimeout(logoutTimer)
      logoutTimer = setTimeout(logOut, 5 * 60 * 1000)
    }

    let logoutTimer = setTimeout(logOut, 5 * 60 * 1000)

    document.addEventListener('mousemove', handleActivity)
    document.addEventListener('keydown', handleActivity)

    return () => {
      clearTimeout(logoutTimer)
      document.removeEventListener('mousemove', handleActivity)
      document.removeEventListener('keydown', handleActivity)
    }
  }, [])

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
