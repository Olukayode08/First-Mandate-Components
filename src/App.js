import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './context/Darkmode'
import UploadPptSidebar from './components/Sidebars/UploadPptSidebar'
import Reload from './hooks/Reload'
import LandLord from './pages/Landlord/LandLord'
import TenantAddApartmentDetails from './components/Tenant/TenantAddApartmentDetails'
import ManagerAddNewLandlord from './components/Manager/ManagerAddNewLandlord'
import LandlordHomePage from './components/Landlord/LandlordHomePage'
import PropertyManager from './pages/PropertyManager/PropertyManager'
import ManagerHomePage from './components/Manager/ManagerHomePage'
import TenantHomePage from './components/Tenant/TenantHomePage'
import Tenant from './pages/Tenant/Tenant'
import LandlordNotifications from './components/Landlord/LandlordNotifications'
import LandlordAddReminder from './components/Landlord/LandlordAddReminder'
import TenantNotifications from './components/Tenant/TenantNotifications'
import ManagerNotifications from './components/Manager/ManagerNotifications'
import ManagerPropertyPageOne from './components/Manager/ManagerPropertyPageOne'
import LandlordTenants from './components/Landlord/LandlordTenants'
import ManagerTenants from './components/Manager/ManagerTenants'
import LandlordAddNewManager from './components/Landlord/LandlordAddNewManager'
import LandlordManagers from './components/Landlord/LandlordManagers'
import LandlordUploadPropertyPage from './components/Landlord/LandlordUploadPropertyPage'
import LandlordAddNewTenant from './components/Landlord/LandlordAddNewTenant'
import ManagerAddNewTenant from './components/Manager/ManagerAddNewTenant'
import ManagerAddLandlord from './components/Manager/ManagerAddLandlord'
import LandlordReminders from './components/Landlord/LandlordReminders'
import ManagerReminders from './components/Manager/ManagerReminders'
import TenantApartmentDetails from './components/Tenant/TenantApartmentDetails'
import TenantApartmentDetailsTwo from './components/Tenant/TenantApartmentDetailsTwo'
import ManagerPropertyPageTwo from './components/Manager/ManagerPropertyPageTwo'
import LandlordProperties from './components/Landlord/LandlordProperties'
import Email from './pages/Email/Email'
import ResetPasswordEmail from './components/Email/ResetPasswordEmail'
import ConfirmEmail from './components/Email/ConfirmEmail'
import GeneralEmail from './components/Email/GeneralEmail'
import WelcomeEmail from './components/Email/WelcomeEmail'
import Signup from './components/Registration/Signup'
import Login from './components/Registration/Login'
import VerificationCode from './components/Registration/VerificationCode'
import EnterNewPassword from './components/Registration/EnterNewPassword'
import ForgotPassword from './components/Registration/ForgotPassword'
import ErrorPage from './components/Error/ErrorPage'
import LandlordEditProfilePage from './components/Landlord/LandlordEditProfilePage'
import LandlordProfileSettings from './components/Landlord/LandlordProfileSettings'
import Checkbox from './components/Checkbox/Checkbox'
import ManagerAddReminder from './components/Manager/ManagerAddReminder'
import TenantReminders from './components/Tenant/TenantReminders'
import TenantAddReminder from './components/Tenant/TenantAddReminder'
import TenantEditProfilePage from './components/Tenant/TenantEditProfilePage'
import TenantProfileSettings from './components/Tenant/TenantProfileSettings'
import TenantPaymentPage from './components/Tenant/TenantPaymentPage'
import TenantPaymentReview from './components/Tenant/TenantPaymentReview'
import LandlordSelectUnit from './components/Landlord/LandlordSelectUnit'
import ManagerEditProfilePage from './components/Manager/ManagerEditProfilePage'
import ManagerProfileSettings from './components/Manager/ManagerProfileSettings'
import ManagerDocuments from './components/Manager/ManagerDocuments'
import LandlordAddUnit from './components/Landlord/LandlordAddUnit'
import RentPaymentSuccessfulEmail from './components/Email/RentPaymentSuccessfulEmail'
import RentPaymentReceiptEmail from './components/Email/RentPaymentReceiptEmail'
import RentReminderEmail from './components/Email/RentReminderEmail'
import GenerateReceiptEmail from './components/Email/GenerateReceiptEmail'
import TenantPaymentForm from './components/Tenant/TenantPaymentForm'
import TenantPaymentReceipt from './components/Tenant/TenantPaymentReceipt'
import TenantPaymentReviewTwo from './components/Tenant/TenantPaymentReviewTwo'
import LandlordDueDates from './components/Landlord/LandlordDueDates'
import Calendar from './components/Calendar/Calendar'
import CalendarMonths from './components/Calendar/CalendarMonths'
import CalendarDays from './components/Calendar/CalendarDays'
import CalendarYears from './components/Calendar/CalendarYears'
import CalendarWeeks from './components/Calendar/CalendarWeeks'
import ManagerDueDates from './components/Manager/ManagerDueDates'
import TenantDueDates from './components/Tenant/TenantDueDates'
import BigCalendar from './components/Calendar/BigCalendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import TenantWallet from './components/Tenant/TenantWallet'
import TenantWalletTransaction from './components/Tenant/TenantWalletTransaction'
import TenantHistory from './components/Tenant/TenantHistory'
import TenantCalendar from './components/Tenant/TenantCalendar'
import ProtectedRoute from './hooks/ProtectedRoute'
import LandlordSingleProperty from './components/Landlord/LandlordSingleProperty'
import ManagerUploadPropertyPage from './components/Manager/ManagerUploadPropertyPage'
import ManagerAddUnit from './components/Manager/ManagerAddUnit'
import ManagerSelectUnit from './components/Manager/ManagerSelectUnit'

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
    if (theme === 'light') {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
    }
  }, [theme])

  return (
    <>
      <Reload />
      <div className='app' id={theme}>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verify-code' element={<VerificationCode />} />
          <Route path='/new-password' element={<EnterNewPassword />} />
          <Route path='/reset-password' element={<ForgotPassword />} />
          <Route path='/upload-ppt-sidebar' element={<UploadPptSidebar />} />
          <Route path='/checkbox' element={<Checkbox />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/calendar-days' element={<CalendarDays />} />
          <Route path='/calendar-weeks' element={<CalendarWeeks />} />
          <Route path='/calendar-months' element={<CalendarMonths />} />
          <Route path='/calendar-years' element={<CalendarYears />} />
          <Route path='/big-calendar' element={<BigCalendar />} />

          {/* Landlord page */}
          <Route element={<ProtectedRoute />}>
            <Route path='/landlord' element={<LandLord />}>
              <Route path='' element={<LandlordHomePage />} />
              <Route path='notifications' element={<LandlordNotifications />} />
              <Route path='properties' element={<LandlordProperties />} />
              <Route
                path='property/:singlePropertyId'
                element={<LandlordSingleProperty />}
              />
              <Route
                path='add-property'
                element={<LandlordUploadPropertyPage />}
              />
              <Route
                path='add-unit/:propertyId/units'
                element={<LandlordAddUnit />}
              />

              <Route path='tenants' element={<LandlordTenants />} />
              <Route path='select-unit' element={<LandlordSelectUnit />} />
              {/* <Route
                path='select-unit/:tenantId/edit'
                element={<LandlordSelectUnit />}
              /> */}
              <Route
                path='add-tenant/:unitId/tenants'
                element={<LandlordAddNewTenant />}
              />
              <Route
                path='add-tenant/:tenantId/:unitId/edit'
                element={<LandlordAddNewTenant />}
              />
              {/* <Route path='add-tenant' element={<LandlordAddNewTenant />} /> */}
              <Route path='managers' element={<LandlordManagers />} />
              <Route path='add-manager' element={<LandlordAddNewManager />} />
              <Route
                path='add-manager/:propertyId'
                element={<LandlordAddNewManager />}
              />
              <Route
                path='add-manager/:propertyId/:managerId/edit'
                element={<LandlordAddNewManager />}
              />
              <Route path='reminders' element={<LandlordReminders />} />
              <Route path='add-reminder' element={<LandlordAddReminder />} />
              <Route
                path='add-reminder/:reminderId/edit'
                element={<LandlordAddReminder />}
              />
              <Route path='due-date' element={<LandlordDueDates />} />

              <Route
                path='edit-profile'
                element={<LandlordEditProfilePage />}
              />
              <Route path='profile' element={<LandlordProfileSettings />} />
            </Route>
          </Route>

          {/* Manager's Page */}
          <Route element={<ProtectedRoute />}>
            <Route path='/manager' element={<PropertyManager />}>
              <Route path='' element={<ManagerHomePage />} />
              <Route path='notifications' element={<ManagerNotifications />} />
              <Route path='properties' element={<ManagerPropertyPageOne />} />
              <Route
                path='property/:singlePropertyId'
                element={<ManagerPropertyPageTwo />}
              />

              <Route
                path='add-property'
                element={<ManagerUploadPropertyPage />}
              />
              <Route
                path='add-unit/:propertyId/units'
                element={<ManagerAddUnit />}
              />
              <Route path='tenants' element={<ManagerTenants />} />
              <Route path='select-unit' element={<ManagerSelectUnit />} />

              <Route
                path='add-tenant/:unitId/tenants'
                element={<ManagerAddNewTenant />}
              />
              <Route
                path='add-tenant/:unitId/tenants/edit'
                element={<ManagerAddNewTenant />}
              />
              <Route path='landlords' element={<ManagerAddLandlord />} />
              <Route path='add-landlord' element={<ManagerAddNewLandlord />} />
              <Route path='reminders' element={<ManagerReminders />} />
              <Route path='due-date' element={<ManagerDueDates />} />
              <Route path='add-reminder' element={<ManagerAddReminder />} />
              <Route path='edit-profile' element={<ManagerEditProfilePage />} />
              <Route path='profile' element={<ManagerProfileSettings />} />
              <Route path='documents' element={<ManagerDocuments />} />
            </Route>
          </Route>

          {/* Tenant Page */}
          <Route element={<ProtectedRoute />}>
            <Route path='/tenant' element={<Tenant />}>
              <Route path='' element={<TenantHomePage />} />
              <Route path='notifications' element={<TenantNotifications />} />
              <Route
                path='apartment-details'
                element={<TenantApartmentDetails />}
              />
              {/* <Route
                path='apartment-details-two'
                element={<TenantApartmentDetailsTwo />}
              /> */}
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
              <Route path='due-date' element={<TenantDueDates />} />
              <Route path='edit-profile' element={<TenantEditProfilePage />} />
              <Route path='profile' element={<TenantProfileSettings />} />
              <Route path='payment' element={<TenantPaymentPage />} />
              <Route path='payment-form' element={<TenantPaymentForm />} />
              <Route path='payment-review' element={<TenantPaymentReview />} />
              <Route
                path='payment-review-two'
                element={<TenantPaymentReviewTwo />}
              />
              <Route
                path='payment-receipt'
                element={<TenantPaymentReceipt />}
              />
              <Route path='wallet' element={<TenantWallet />} />
              <Route
                path='wallet-transaction'
                element={<TenantWalletTransaction />}
              />
              <Route path='history' element={<TenantHistory />} />
              <Route path='calendar' element={<TenantCalendar />} />
            </Route>
          </Route>

          {/* Email Page */}
          <Route path='/email' element={<Email />}>
            <Route path='reset-password' element={<ResetPasswordEmail />} />
            <Route path='confirm-email' element={<ConfirmEmail />} />
            <Route path='general-email' element={<GeneralEmail />} />
            <Route path='welcome-email' element={<WelcomeEmail />} />
            <Route
              path='payment-notification'
              element={<RentPaymentSuccessfulEmail />}
            />
            <Route path='email-receipt' element={<RentPaymentReceiptEmail />} />
            <Route path='rent-reminder' element={<RentReminderEmail />} />
            <Route path='pdf-receipt' element={<GenerateReceiptEmail />} />
          </Route>
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
