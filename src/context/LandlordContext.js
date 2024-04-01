import React, { createContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FirstMandateLandlord = createContext()

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL
const token = localStorage.getItem('token')

const LandlordContext = ({ children }) => {
  const navigate = useNavigate()
  const { propertyId } = useParams()

  // Add Property
  // const [uploadSuccess, setUploadSuccess] = useState(false)
  // const [uploadLoading, setUploadLoading] = useState(false)
  // const [uploadError, setUploadError] = useState('')

  // const [addProperty, setAddProperty] = useState({
  //   title: '',
  //   address: '',
  //   country: '',
  //   city: '',
  //   state: '',
  //   manager_name: '',
  //   manager_email: '',
  //   manager_phone: '',
  // })
  // const handleChangeAddProperty = (e) => {
  //   setAddProperty({ ...addProperty, [e.target.name]: e.target.value })
  // }

  // // Clear Add Property Error
  // useEffect(() => {
  //   setUploadError('')
  // }, [
  //   addProperty.title,
  //   addProperty.address,
  //   addProperty.country,
  //   addProperty.city,
  //   addProperty.state,
  //   addProperty.manager_name,
  //   addProperty.manager_email,
  //   addProperty.manager_phone,
  // ])
  // const AddProperty = async (e) => {
  //   e.preventDefault()
  //   setUploadLoading(true)
  //   try {
  //     const response = await fetch(`${BASE_URL}/properties`, {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify(addProperty),
  //     })
  //     if (response?.status === 200) {
  //       setTimeout(() => {
  //         setUploadSuccess(true)
  //         setUploadError(
  //           'Congratulations, your property has been uploaded successfully'
  //         )
  //         setTimeout(() => {
  //           setUploadSuccess(false)
  //           setUploadError('')
  //           navigate('/landlord/properties')
  //         }, 3000)
  //       }, 200)
  //     }

  //     setAddProperty({
  //       title: '',
  //       address: '',
  //       country: '',
  //       city: '',
  //       state: '',
  //       manager_name: '',
  //       manager_email: '',
  //       manager_phone: '',
  //     })
  //   } catch (error) {
  //     setUploadError(error.message)
  //   } finally {
  //     setUploadLoading(false)
  //   }
  // }

  // Add Units
  const [unitSave, setUnitSave] = useState(false)
  const [unitLoading, setUnitLoading] = useState(false)
  const [unitError, setUnitError] = useState('')
  const [addUnit, setAddUnit] = useState({
    unit_name: '',
    unit_type: '',
    no_of_bedrooms: '',
    occupation_status: '',
  })
  const handleChangeAddUnit = (e) => {
    setAddUnit({ ...addUnit, [e.target.name]: e.target.value })
  }

  // Clear Add Unit Error
  useEffect(() => {
    setUnitError('')
  }, [
    addUnit.unit_name,
    addUnit.unit_type,
    addUnit.no_of_bedrooms,
    addUnit.occupation_status,
  ])
  const AddUnit = async (propertyId, buttonType) => {
    !buttonType && setUnitLoading(true)
    buttonType && setUnitSave(true)
    try {
      const response = await fetch(
        `${BASE_URL}/properties/${propertyId}/units`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(addUnit),
        }
      )
      if (
        addUnit.unit_name &&
        addUnit.unit_type &&
        addUnit.no_of_bedrooms &&
        addUnit.occupation_status
      ) {
        setUnitError('Please fill in all required fields.')
      }
      if (response?.status === 200) {
        setTimeout(() => {
          setUnitError('Congratulations, your unit has been added successfully')
          setTimeout(() => {
            setUnitError('')
            buttonType === 'save&continue' && navigate('/landlord/properties')
          }, 3000)
        }, 200)
      }
      setAddUnit({
        unit_name: '',
        unit_type: '',
        no_of_bedrooms: '',
        occupation_status: '',
      })
    } catch (error) {
      setTenantError(error.message)
    } finally {
      setUnitLoading(false)
      setUnitSave(false)
    }
  }

  // Add Tenant
  const [tenantLoading, setTenantLoading] = useState(false)
  const [tenantError, setTenantError] = useState('')
  const [addTenant, setAddTenant] = useState({
    name: '',
    email: '',
    phone: '',
    phone_two: '',
    lease_start: '',
    lease_end: '',
  })
  const handleChangeAddTenant = (e) => {
    setAddTenant({ ...addTenant, [e.target.name]: e.target.value })
  }
  // Clear Add Tenant Error
  useEffect(() => {
    setTenantError('')
  }, [
    addTenant.name,
    addTenant.email,
    addTenant.phone,
    addTenant.phone_two,
    addTenant.lease_start,
    addTenant.lease_end,
  ])

  const AddTenant = async (e) => {
    e.preventDefault()
    setTenantLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/property-units/tenants`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(addTenant),
      })
      if (
        !addTenant.name &&
        !addTenant.email &&
        !addTenant.phone &&
        !addTenant.lease_start &&
        !addTenant.lease_end
      ) {
        setTenantError('Please fill in all required fields.')
      }

      if (response?.status === 200) {
        setTimeout(() => {
          setTenantError(
            'Congratulations, your tenant has been added successfully'
          )
          setTimeout(() => {
            setTenantError('')
            navigate('/landlord/tenants')
          }, 3000)
        }, 200)
      }
      setAddTenant({
        name: '',
        email: '',
        phone: '',
        phone_two: '',
        lease_start: '',
        lease_end: '',
      })
    } catch (error) {
      setTenantError(error.message)
    } finally {
      setTenantLoading(false)
    }
  }

  // Add Property Manager
  const [managerLoading, setManagerLoading] = useState(false)
  const [managerError, setManagerError] = useState('')
  const [addManager, setAddManager] = useState({
    name: '',
    email: '',
    phone: '',
    phone_two: '',
    property_name: '',
    property_uuid: propertyId,
  })
  const handleChangeAddManager = (e) => {
    setAddManager({ ...addManager, [e.target.name]: e.target.value })
  }

  const handleManagerUpdate = (fieldName, value) => {
    setAddManager((prev) => ({...prev, [fieldName]: value }))
  }
  // Clear Add Tenant Error
  useEffect(() => {
    setManagerError('')
  }, [
    addManager.name,
    addManager.email,
    addManager.phone,
    addManager.phone_two,
    addManager.property_name,
  ])

  const AddManager = async (e, propertyId) => {
    e.preventDefault()
    setManagerLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/property-managers`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({...addManager, property_uuid: propertyId }),
      })
      if (
        !addManager.name &&
        !addManager.email &&
        !addManager.phone &&
        !addManager.property_name
      ) {
        setManagerError('Please fill in all required fields.')
      }
      if (response?.status === 200) {
        setTimeout(() => {
          setManagerError(
            'Congratulations, your manager has been added successfully'
          )
          setTimeout(() => {
            setManagerError('')
            navigate('/landlord/managers')
          }, 3000)
        }, 200)
        setAddManager({
          name: '',
          email: '',
          phone: '',
          phone_two: '',
          property_name: '',
          property_uuid: '',
        })
      }
    } catch (error) {
      setManagerError(error.message)
    } finally {
      setManagerLoading(false)
    }
  }

  // Fetch Single Property Managers
  // const [singlePropertyManager, setSinglePropertyManager] = useState()
  // useEffect(() => {
  //   const FetchSinglePropertyManager = async () => {
  //     try {
  //       const response = await fetch(
  //         `${BASE_URL}/property-managers/4dbc0906-aa1c-4466-be98-eef53815be3b`,
  //         {
  //           method: 'GET',
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             'Content-Type': 'application/json',
  //             Accept: 'application/json',
  //           },
  //         }
  //       )
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch Single Property Manager')
  //       }
  //       const data = await response.json()
  //       setSinglePropertyManager(data)
  //     } catch (error) {
  //       console.error('Error fetching Single Property Manager:', error)
  //     }
  //   }
  //   FetchSinglePropertyManager()
  // }, [token])

  // Add Reminders
  const [reminderLoading, setReminderLoading] = useState(false)
  const [reminderError, setReminderError] = useState('')
  const [addReminder, setAddReminder] = useState({
    reminder_type: '',
    short_description: '',
    next_reminder_date: '',
    reminder_time: '',
  })

  const handleChangeAddReminder = (e) => {
    setAddReminder({ ...addReminder, [e.target.name]: e.target.value })
  }
  // Clear Add Reminder Error
  useEffect(() => {
    setReminderError('')
  }, [
    addReminder.reminder_type,
    addReminder.short_description,
    addReminder.next_reminder_date,
    addReminder.reminder_time,
  ])

  const AddReminder = async (e) => {
    e.preventDefault()
    setReminderLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/reminders`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(addReminder),
      })
      // console.log(addReminder)
      if (response?.status === 422) {
        setReminderError('Reminder Upload Unsuccessful ')
      }
      if (
        !addReminder.reminder_type &&
        !addReminder.short_description &&
        !addReminder.next_reminder_date &&
        !addReminder.reminder_time
      ) {
        setReminderError('Please fill in all required fields.')
      }
      if (response?.status === 200) {
        setTimeout(() => {
          setReminderError(
            'Congratulations, your reminder has been added successfully'
          )
          setTimeout(() => {
            setReminderError('')
            navigate('/landlord/reminders')
          }, 3000)
        }, 200)
        setAddReminder({
          reminder_type: '',
          short_description: '',
          next_reminder_date: '',
          reminder_time: '',
        })
      }
    } catch (error) {
      setReminderError('An Error Occurred')
    } finally {
      setReminderLoading(false)
    }
  }

  // Fetch Single Reminder
  // const [singleReminder, setSingleReminder] = useState([])
  // useEffect(() => {
  //   const FetchSingleReminder = async () => {
  //     try {
  //       const response = await fetch(
  //         `${BASE_URL}/reminders/4dbc0906-aa1c-4466-be98-eef53815be3b`,
  //         {
  //           method: 'GET',
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             'Content-Type': 'application/json',
  //             Accept: 'application/json',
  //           },
  //         }
  //       )
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch Single Reminder')
  //       }
  //       const data = await response.json()
  //       setSingleReminder(data)
  //     } catch (error) {
  //       console.error('Error fetching Reminder:', error)
  //     }
  //   }
  //   FetchSingleReminder()
  // }, [token])

  return (
    <>
      <FirstMandateLandlord.Provider
        value={{
          // Add Property
          // AddProperty,
          // handleChangeAddProperty,
          // addProperty,
          // setAddProperty,
          // uploadSuccess,
          // uploadError,
          // uploadLoading,
          // setUploadError,
          // Add Unit
          unitSave,
          unitLoading,
          addUnit,
          unitError,
          setUnitError,
          handleChangeAddUnit,
          AddUnit,
          // Add Tenant
          tenantError,
          tenantLoading,
          handleChangeAddTenant,
          AddTenant,
          addTenant,
          // Add Property Manager
          managerLoading,
          managerError,
          addManager,
          AddManager,
          handleChangeAddManager,
          handleManagerUpdate,
          // Add Reminders
          reminderLoading,
          reminderError,
          handleChangeAddReminder,
          AddReminder,
          addReminder,
        }}
      >
        {children}
      </FirstMandateLandlord.Provider>
    </>
  )
}

export { LandlordContext, FirstMandateLandlord }
