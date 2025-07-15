import React from 'react'
import { Route } from 'react-router-dom'
import Tenant from '../pages/Tenant/Tenant'
import TenantApartmentDetails from '../components/Tenant/TenantApartmentDetails'
import TenantAddApartmentDetails from '../components/Tenant/TenantAddApartmentDetails'
import TenantReminders from '../components/Tenant/TenantReminders'
import TenantAddReminder from '../components/Tenant/TenantAddReminder'
import TenantNotices from '../components/Tenant/TenantNotices'
import TenantNotifications from '../components/Tenant/TenantNotifications'
import TenantDueDates from '../components/Tenant/TenantDueDates'
import TenantEditProfilePage from '../components/Tenant/TenantEditProfilePage'
import TenantProfileSettings from '../components/Tenant/TenantProfileSettings'
import TenantPaymentPage from '../components/Tenant/TenantPaymentPage'
import TenantPaymentForm from '../components/Tenant/TenantPaymentForm'
import TenantPaymentReview from '../components/Tenant/TenantPaymentReview'
import TenantPaymentReviewTwo from '../components/Tenant/TenantPaymentReviewTwo'
import TenantPaymentReceipt from '../components/Tenant/TenantPaymentReceipt'
import TenantWallet from '../components/Tenant/TenantWallet'
import TenantWalletTwo from '../components/Tenant/TenantWalletTwo'
import TenantWalletTransaction from '../components/Tenant/TenantWalletTransaction'
import TenantHistory from '../components/Tenant/TenantHistory'
import TenantHistoryTwo from '../components/Tenant/TenantHistoryTwo'
import TenantCalendar from '../components/Tenant/TenantCalendar'
import HomePage from '../components/Landlord/HomePage'
import { tenantOptions } from '../datas/constants'

export const tenantRoutes = (
  <Route path='/tenant' element={<Tenant />}>
    <Route path='' element={<HomePage options={tenantOptions} />} />
    <Route path='apartment-details' element={<TenantApartmentDetails />} />
    <Route
      path='add-apartment-details'
      element={<TenantAddApartmentDetails />}
    />
    <Route path='reminders' element={<TenantReminders />} />
    <Route path='add-reminder' element={<TenantAddReminder />} />
    <Route
      path='add-reminder/:reminderId/edit'
      element={<TenantAddReminder />}
    />
    <Route path='notices' element={<TenantNotices />} />
    <Route path='notifications' element={<TenantNotifications />} />
    <Route path='due-date' element={<TenantDueDates />} />
    <Route path='edit-profile' element={<TenantEditProfilePage />} />
    <Route path='profile' element={<TenantProfileSettings />} />
    <Route path='payment' element={<TenantPaymentPage />} />
    <Route path='payment-form' element={<TenantPaymentForm />} />
    <Route path='payment-review' element={<TenantPaymentReview />} />
    <Route path='payment-review-two' element={<TenantPaymentReviewTwo />} />
    <Route path='payment-receipt' element={<TenantPaymentReceipt />} />
    <Route path='wallet' element={<TenantWallet />} />
    <Route path='wallet-two' element={<TenantWalletTwo />} />
    <Route path='wallet-transaction' element={<TenantWalletTransaction />} />
    <Route path='history' element={<TenantHistory />} />
    <Route path='history-two' element={<TenantHistoryTwo />} />
    <Route path='calendar' element={<TenantCalendar />} />
  </Route>
)
