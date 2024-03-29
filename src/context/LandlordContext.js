import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FirstMandateLandlord = createContext()

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

const LandlordContext = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    // FetchProperties()
    // FetchSingleProperty()
  }, [])

  // Upload Property Congrats Modal
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadLoading, setUploadLoading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const [addProperty, setAddProperty] = useState({
    title: '',
    address: '',
    country: '',
    city: '',
    state: '',
    manager_name: '',
    manager_email: '',
    manager_phone: '',
  })
  const handleChangeAddProperty = (e) => {
    setAddProperty({ ...addProperty, [e.target.name]: e.target.value })
  }

  // Clear New Password Error
  useEffect(() => {
    setUploadError('')
  }, [
    addProperty.title,
    addProperty.address,
    addProperty.country,
    addProperty.city,
    addProperty.state,
    addProperty.manager_name,
    addProperty.manager_email,
    addProperty.manager_phone,
  ])
  const AddProperty = async (e) => {
    e.preventDefault()
    setUploadLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/properties`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(addProperty),
      })
      if (response?.status === 422) {
        setUploadError('Property Upload Unsuccessful ')
      }
      if (response?.status === 200) {
        setTimeout(() => {
          setUploadSuccess(true)
          setUploadError(
            'Congratulations, your property has been uploaded successfully'
          )
          setTimeout(() => {
            setUploadSuccess(false)
            navigate('/landlord/properties')
          }, 2800)
        }, 200)
      }

      setAddProperty({
        title: '',
        address: '',
        country: '',
        city: '',
        state: '',
        manager_name: '',
        manager_email: '',
        manager_phone: '',
      })
    } catch (error) {
    } finally {
      setUploadLoading(false)
    }
  }

  // Fetch Properties
  // const FetchProperties = async () => {
  //   const response = await fetch(`${BASE_URL}/properties`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //     body: JSON.stringify(),
  //   })
  //   const properties = await response.json()
  //   console.log(properties)
  // }

  // Fetch Single Property
  // const FetchSingleProperty = async () => {
  //   const response = await fetch(
  //     `${BASE_URL}/properties/31c90a04-49ed-43ae-98f1-67bdff68f39d`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify(),
  //     }
  //   )
  //   const properties = await response.json()
  //   console.log(properties)
  // }

  // Add Units
  // const AddUnits = async () => {
  //   const response = await fetch(
  //     `${BASE_URL}/properties/31c90a04-49ed-43ae-98f1-67bdff68f39d/units`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify(),
  //     }
  //   )
  //   const properties = await response.json()
  //   console.log(properties)
  // }
  return (
    <>
      <FirstMandateLandlord.Provider
        value={{
          AddProperty,
          handleChangeAddProperty,
          addProperty,
          setAddProperty,
          uploadSuccess,
          uploadError,
          uploadLoading,
          setUploadError,
        }}
      >
        {children}
      </FirstMandateLandlord.Provider>
    </>
  )
}

export { LandlordContext, FirstMandateLandlord }
