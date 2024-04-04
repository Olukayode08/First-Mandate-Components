import React, { createContext, useEffect, useState } from 'react'
const FirstMandate = createContext()

const Context = ({ children }) => {
  // Signup and Login Validation States
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  )

  // Function to log the user out
  const logOut = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }

  // useEffect(() => {
  //   // Event listener for user activity
  //   const handleActivity = () => {
  //     // Reset the timer when user is active
  //     clearTimeout(logoutTimer)
  //     // Set new timer for logout after 5 minutes of inactivity
  //     logoutTimer = setTimeout(logOut, 5 * 60 * 1000) // 5 minutes
  //   }

  //   // Initialize logout timer
  //   let logoutTimer = setTimeout(logOut, 5 * 60 * 1000) // 5 minutes

  //   // Set up event listeners for user activity
  //   document.addEventListener('mousemove', handleActivity)
  //   document.addEventListener('keydown', handleActivity)

  //   // Cleanup function
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
