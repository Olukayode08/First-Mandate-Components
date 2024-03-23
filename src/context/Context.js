import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FirstMandate = createContext()

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

const Context = ({ children }) => {
  const navigate = useNavigate()

  // Reset Password Congratulations
  const [resetPasswordCongrats, setPasswordCongrats] = useState(false)
  const toggleResetPasswordModal = () => {
    setPasswordCongrats(!resetPasswordCongrats)
  }

  // Email Reset Password Congratulations
  const [emailResetCongrats, setEmailResetCongrats] = useState(false)
  const toggleEmailModal = () => {
    setEmailResetCongrats(!emailResetCongrats)
  }

  // Upload Property Congrats Modal
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
    // setTimeout(() => {
    //   navigate('/landlord')
    // }, 2000)
  }

  // Signup and Login Validation States
  const [error, setError] = useState('')
  const [user, setUser] = useState()
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
    // false
  )
  const [loading, setLoading] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  // Validate Password
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
  }

  // Validate Email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // Notifify Error
  const notify = (error) => {
    setError(error)
  }
  // Clear Error
  useEffect(() => {
    setError('')
  }, [details.email, details.password, details.name])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  // Log Out User
  const logOut = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
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
      logoutTimer = setTimeout(clearInactiveUser, 4 * 60 * 1000) // 4 minutes
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

  // User Signup Authentification
  const UserSignUp = async (e) => {
    e.preventDefault()
    if (!validatePassword(details.password)) {
      return notify(
        'Password must contain at least 8 characters with uppercase, lowercase, number, and symbol.'
      )
    } else if (!validateEmail(details.email)) {
      return notify('Invalid Email Address')
    }
    setIsSigningUp(true)
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      })
      const userData = await response.json()
      if (response?.status === 422) {
        return notify('Email Address Unavailable')
      } else {
        localStorage.setItem('token', userData.data.authorization.token)
        setIsAuthenticated(true)
        setTimeout(() => {
          setShowSuccessMessage(true)
          setTimeout(() => {
            setShowSuccessMessage(false)
          }, 2500)
        }, 500)
        setTimeout(() => {
          navigate('/landlord')
        }, 3000)
        setUser(userData)
        // console.log(localStorage)
        // console.log(userData)
        setDetails({
          name: '',
          email: '',
          password: '',
        })
        setError('')
      }
    } catch (err) {
      if (err?.response) {
        return notify('No Server Response')
      } else {
        return notify('Registration Failed')
      }
    } finally {
      setIsSigningUp(false)
      setLoading(false)
    }
  }

  // User Login Authentification
  const UserSignIn = async (e) => {
    e.preventDefault()
    setIsSigningUp(true)
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      })
      const userData = await response.json()
      if (response?.status === 401) {
        return notify('Invalid Login Credentials')
      } else {
        localStorage.setItem('token', userData.data.authorization.token)
        setIsAuthenticated(true)
        navigate('/landlord')
        setUser(userData)
        // console.log(localStorage)
        // console.log(userData)
        setDetails({
          name: '',
          email: '',
          password: '',
        })
        setError('')
      }
    } catch (err) {
      if (err?.response) {
        return notify('No Server Response')
      } else {
        return notify('Login Unsuccessful')
      }
    } finally {
      setIsSigningUp(false)
      setLoading(false)
    }
  }

  return (
    <>
      <FirstMandate.Provider
        value={{
          details,
          handleChange,
          UserSignUp,
          UserSignIn,
          isSigningUp,
          setIsSigningUp,
          isAuthenticated,
          showSuccessMessage,
          logOut,
          loading,
          setLoading,
          user,
          error,
          modal,
          toggleModal,
          resetPasswordCongrats,
          toggleResetPasswordModal,
          emailResetCongrats,
          toggleEmailModal,
        }}
      >
        {children}
      </FirstMandate.Provider>
    </>
  )
}

export { Context, FirstMandate }
