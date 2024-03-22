import React, { createContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const FirstMandate = createContext()

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

const Context = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

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

  // Signup Validation
  const [error, setError] = useState('')
  const [user, setUser] = useState()
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

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
  }, [details.email, details.password])

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
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      })
      const data = await response.json()
      if (response?.status === 422) {
        return notify('Email Address Unavailable')
      } else {
        console.log('Data', data)
        setIsAuthenticated(true)
        setUser(data)
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
    }
  }

  // User Login Authentification
  const UserSignIn = async (e) => {
    e.preventDefault()
    setIsSigningUp(true)
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
        console.log(userData)
        localStorage.setItem('token', userData.data.authorization.token)
        // console.log(localStorage)
        setIsAuthenticated(true)
        setUser(userData)
        setDetails({
          name: '',
          email: '',
          password: '',
        })
        setError('')
        navigate(from, { replace: true })
      }
    } catch (err) {
      if (err?.response) {
        return notify('No Server Response')
      } else {
        return notify('Login Unsuccessful')
      }
    } finally {
      setIsSigningUp(false)
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
