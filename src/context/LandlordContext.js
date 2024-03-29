import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FirstMandateLandlord = createContext()

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

const LandlordContext = ({ children }) => {

  const navigate = useNavigate()

  useEffect(() => {
    // FetchProperties()
    // FetchSingleProperty()
  }, [])

  // Upload Property Congrats Modal
  const [uploadSuccess, setUploadSuccess] = useState(false)

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

  const AddProperty = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${BASE_URL}/properties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addProperty),
      })
      const properties = await response.json()
      console.log(properties)
      setTimeout(() => {
        setUploadSuccess(true)
        setTimeout(() => {
          setUploadSuccess(false)
          navigate('/landlord/properties')
        }, 2800)
      }, 200)
    } catch (error) {}
  }

  //   Fetch Properties
  //   const FetchProperties = async () => {
  //     const response = await fetch(`${BASE_URL}/properties`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(),
  //     })
  //     const properties = await response.json()
  //     // console.log(properties)
  //   }

  //   // Fetch Single Property
  //   const FetchSingleProperty = async () => {
  //     const response = await fetch(
  //       `${BASE_URL}/properties/31c90a04-49ed-43ae-98f1-67bdff68f39d`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(),
  //       }
  //     )
  //     const properties = await response.json()
  //     // console.log(properties)
  //   }

  //   // Add Units
  //   const AddUnits = async () => {
  //     const response = await fetch(
  //       `${BASE_URL}/properties/31c90a04-49ed-43ae-98f1-67bdff68f39d/units`,
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(),
  //       }
  //     )
  //     const properties = await response.json()
  //     // console.log(properties)
  //   }
  return (
    <>
      <FirstMandateLandlord.Provider
        value={{
          AddProperty,
          handleChangeAddProperty,
          addProperty,
          setAddProperty,
          uploadSuccess,
        }}
      >
        {children}
      </FirstMandateLandlord.Provider>
    </>
  )
}

export { LandlordContext, FirstMandateLandlord }
