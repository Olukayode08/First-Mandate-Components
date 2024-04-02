import React, { createContext, useEffect, useState } from 'react'
const FirstMandate = createContext()

const Context = ({ children }) => {

    const token = localStorage.getItem('token')
  // Signup and Login Validation States
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
    // false
  )

  const logOut = ()=>{
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }

  // Authentification Timer
  // useEffect(() => {
  //   let logoutTimer

  //   const clearInactiveUser = () => {
  //     localStorage.removeItem('token')
  //     setIsAuthenticated(false)
  //   }

  //   const resetLogoutTimer = () => {
  //     clearTimeout(logoutTimer)
  //     logoutTimer = setTimeout(clearInactiveUser, 5 * 60 * 1000) // 5 minutes
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

    // const { data: propertyData, isLoading: pageLoading } = useFirstMandateQuery(
    //   '/properties',
    //   {
    //     enabled: !!token,
    //     onSuccess: (data) => {},
    //   }
    // )

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
