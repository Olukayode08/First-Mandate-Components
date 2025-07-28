import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import {
  useFirstMandateMutation,
  useFirstMandateQuery,
} from '../../data-layer/utils'
import { useForm } from 'react-hook-form'
import FormInput from '../Globals.js/FormInput'
import { formValidation } from '../../hooks/functions'
import Button from '../Globals.js/Button'
import CustomSelector from '../Globals.js/CustomSelector'

const findUnit = (unitId, items) => {
  /**
   * Filters through the 'items' data structure to find and return the unit object
   * whose 'uuid' matches the provided 'unitId'.
   *
   * @param {string} unitId - The UUID of the unit you want to find.
   * @param {array} items - The list of items, each containing a 'units' array.
   * @returns {object|null} The unit object if found, otherwise null.
   */

  for (const item of items) {
    for (const unit of item.units) {
      if (unit.uuid === unitId) {
        return unit
      }
    }
  }
  return null // No matching unit found
}

const ManagerAddNewTenant = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    // mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      phone_two: '',
      lease_start: '',
      lease_end: '',
      payment_type: '',
      no_of_installments: '',
      rent_amount: '',
      rent_payment_status: '',
      rent_term: '',
      rent_due_date: '',
    },
  })
  const addTenant = watch()
  const navigate = useNavigate()
  const location = useLocation()
  const unitName = location.state && location.state.unitName
  const { unitId, tenantId } = useParams()
  const pageUrl = window.location.href
  const isEdit = pageUrl.includes('edit')

  const termsOptions = [
    { label: '1 month', value: '1 month' },
    { label: '2 month', value: '2 month' },
    { label: '3 month', value: '3 month' },
    { label: '4 month', value: '4 month' },
    { label: '5 month', value: '5 month' },
    { label: '6 month', value: '6 month' },
    { label: '7 month', value: '7 month' },
    { label: '8 month', value: '8 month' },
    { label: '9 month', value: '9 month' },
    { label: '10 month', value: '10 month' },
    { label: '11 month', value: '11 month' },
    { label: '12 month', value: '12 month' },
  ]

  const paymentOptions = [
    { label: 'Paid', value: 'Paid' },
    { label: 'Unpaid', value: 'Unpaid' },
    { label: 'Paid in part', value: 'Paid in part' },
  ]

  const handleTenantUpdate = (fieldName, value) => {
    setValue(fieldName, value)
  }

  const {
    mutateAsync: postTenant,
    isLoading,
    error,
    isSuccess,
  } = useFirstMandateMutation(
    `/${
      isEdit
        ? `property-manager/property-tenants/${tenantId}`
        : `property-manager/property-units/${unitId}/tenants`
    }`,
    {
      method: isEdit ? 'PUT' : 'POST',
      onSuccess: (data) => {
        console.log(data)
        setTimeout(() => {
          navigate('/manager/tenants')
        }, 3000)
        reset()
      },
      // onError: (error) => {
      //   console.error(error)
      // },
    }
  )

  const { data } = useFirstMandateQuery('/property-manager/property-tenants', {
    enabled: !!tenantId,
    onSuccess: (data) => {
      const tenant = data?.data?.data?.find(
        (tenant) => tenant.uuid === tenantId
      )
      handleTenantUpdate('name', tenant?.name)
      handleTenantUpdate('email', tenant?.email)
      handleTenantUpdate('phone', tenant?.phone)
      handleTenantUpdate('lease_start', tenant?.lease_start)
      handleTenantUpdate('lease_end', tenant?.lease_end)
      handleTenantUpdate('payment_type', tenant?.payment_type)
      handleTenantUpdate('no_of_installments', tenant?.no_of_installments)
      handleTenantUpdate('rent_amount', tenant?.rent_amount)
      handleTenantUpdate('rent_payment_status', tenant?.rent_payment_status)
      handleTenantUpdate('rent_term', tenant?.rent_term)
      handleTenantUpdate('rent_due_date', tenant?.rent_due_date)
    },
    onError: (error) => {},
  })

  const { data: propertiesData } = useFirstMandateQuery(
    '/property-manager/properties',
    {
      select: (data) => findUnit(unitId, data?.data?.data),
      onSuccess: (data) => {},
    }
  )

  const handleTenant = async (data) => {
    try {
      await postTenant(data)
    } catch (e) {
      console.error(e)
    }
  }

  const paymentTypeOptions = [
    { label: 'One Time', value: 'One Time' },
    { label: 'Installment', value: 'Installment' },
  ]

  const [amountPerInstallment, setAmountPerInstallment] = useState('')

  useEffect(() => {
    if (addTenant.payment_type === 'One Time') {
      setValue('no_of_installments', '1')
      setAmountPerInstallment(addTenant.rent_amount)
    } else if (addTenant.no_of_installments && addTenant.rent_amount) {
      const amountPerInstallment =
        parseFloat(addTenant.rent_amount) /
        parseFloat(addTenant.no_of_installments)
      setAmountPerInstallment(amountPerInstallment.toFixed(2))
    }
  }, [
    addTenant.payment_type,
    addTenant.no_of_installments,
    addTenant.rent_amount,
    setValue,
  ])

  return (
    <>
      <form
        onSubmit={handleSubmit(handleTenant)}
        className='w-full flex flex-col gap-2.5 bg-white p-5 rounded-md'
      >
        {error && <p className='text-error text-left'>{error?.message}</p>}
        {isSuccess && (
          <p className='text-success text-left'>
            {isEdit
              ? 'Tenant edited successfully'
              : 'Tenant was added successfully'}
          </p>
        )}
        <h3>{isEdit ? 'Edit Tenant' : 'Add New Tenant'}</h3>
        <div className='flex flex-col gap-2.5'>
          <label>Apartment Name</label>
          <p className='border border-black rounded-md text-left w-[200px] h-12 flex items-center justify-center'>
            {propertiesData?.unit_name || unitName || ''}
          </p>
        </div>
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label='Name'
            type='text'
            name={'name'}
            value={addTenant.name}
            placeholder='Enter apartment name'
            {...register('name', formValidation('text', true))}
            error={errors?.name}
          />
        </div>
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label='Email'
            type='email'
            name={'email'}
            value={addTenant.email}
            placeholder='Enter email address'
            {...register('email', formValidation('email', true))}
            error={errors?.email}
          />
        </div>
        <div className='w-[90%] md:w-[500px]'>
          <FormInput
            label='Phone'
            type='text'
            name={'phone'}
            value={addTenant.phone}
            placeholder='+234'
            {...register('phone', formValidation('text', true))}
            error={errors?.phone}
          />
        </div>
        {!unitId && (
          <div className='w-[90%] md:w-[500px]'>
            <FormInput
              label='Phone'
              type='text'
              name={'phone_two'}
              value={addTenant.phone_two}
              placeholder='+234'
              {...register('phone_two', formValidation('text', true))}
              error={errors?.phone_two}
            />
          </div>
        )}
        <div className='flex items-center gap-2.5'>
          <div className='w-[45%] md:w-[240px]'>
            <FormInput
              label='Lease Start Date'
              type='date'
              name={'lease_start'}
              value={addTenant.lease_start}
              placeholder='+234'
              {...register('lease_start', formValidation('date', true))}
              error={errors?.lease_start}
            />
          </div>
          <div className='w-[45%] md:w-[240px]'>
            <FormInput
              label='Lease End Date'
              type='date'
              name={'lease_end'}
              value={addTenant.lease_end}
              placeholder='+234'
              {...register('lease_end', formValidation('date', true))}
              error={errors?.lease_end}
            />
          </div>
        </div>
        <div className='w-[45%] md:w-[240px]'>
          <FormInput
            label='Rent Amount'
            type='text'
            name='rent_amount'
            value={addTenant.rent_amount}
            placeholder='100,000'
            {...register('rent_amount', {
              required: 'Rent amount is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid number',
              },
            })}
            error={errors?.rent_amount}
          />
        </div>
        <div className='flex gap-2.5'>
          <div className='flex flex-col gap-2.5'>
            <label className='text-base'>Rent Payment Type*</label>
            <div className='h-12 w-[240px]'>
              <CustomSelector
                placeholder='Select'
                options={paymentTypeOptions}
                value={addTenant.payment_type}
                onChange={(selected) => setValue('payment_type', selected)}
                multiple={false}
              />
            </div>
          </div>

          <div className='w-[45%] md:w-[240px]'>
            <FormInput
              label='Number of Installments*'
              type='text'
              name='no_of_installments'
              value={addTenant.no_of_installments}
              placeholder='Enter number of installments'
              disabled={!addTenant.payment_type}
              {...register('no_of_installments', {
                required:
                  addTenant.payment_type === 'Installment'
                    ? 'Number of installments is required'
                    : false,
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Please enter a valid number',
                },
              })}
              error={errors?.no_of_installments}
            />
          </div>

          <div className='w-[45%] md:w-[240px]'>
            <FormInput
              label='Amount for each Installment*'
              type='text'
              name='amount_per_installment'
              value={amountPerInstallment}
              isLoading={true}
            />
          </div>
        </div>
        <div className='flex flex-col gap-2.5'>
          <label className='text-base'>Rent Payment Status*</label>
          <div className='h-12 w-[240px]'>
            <CustomSelector
              placeholder='Select'
              options={paymentOptions}
              value={addTenant.rent_payment_status}
              onChange={(selected) => setValue('rent_payment_status', selected)}
              multiple={false}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2.5'>
          <label className='text-base'>Rent Terms*</label>
          <div className='h-12 w-[240px]'>
            <CustomSelector
              placeholder='Select'
              options={termsOptions}
              value={addTenant.rent_term}
              onChange={(selected) => setValue('rent_term', selected)}
              multiple={false}
            />
          </div>
        </div>
        <div className='w-[45%] md:w-[240px]'>
          <FormInput
            label='Rent Payment Due Date'
            type='date'
            name={'rent_due_date'}
            value={addTenant.rent_due_date}
            placeholder='+234'
            {...register('rent_due_date', formValidation('date', true))}
            error={errors?.rent_due_date}
          />
        </div>
        <div className='w-[180px] h-12'>
          <Button
            btnText={isEdit ? 'Edit Tenant' : 'Add Tenant'}
            isLoading={isLoading}
          />
        </div>
      </form>
    </>
  )
}

export default ManagerAddNewTenant
