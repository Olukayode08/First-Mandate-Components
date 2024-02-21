import React, { createContext, useState } from 'react'

const FirstMandate = createContext()

const Context = ({ children }) => {
  const [password, setPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)

  const togglePassword = () => {
    setPassword(!password)
  }

  const toggleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword)
  }
  const submitForm = (e) => {
    e.preventDefault()
  }

  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  return (
    <>
      <FirstMandate.Provider
        value={{
          details,
          handleChange,
          submitForm,
          password,
          confirmPassword,
          togglePassword,
          toggleConfirmPassword,
        }}
      >
        {children}
      </FirstMandate.Provider>
    </>
  )
}

export { Context, FirstMandate }
