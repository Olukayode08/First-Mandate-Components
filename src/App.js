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
import LandlordTenantList from './components/Landlord/LandlordTenantList'
import ManagerTenantList from './components/Manager/ManagerTenantList'
import LandlordAddNewManager from './components/Landlord/LandlordAddNewManager'
import LandlordAddManager from './components/Landlord/LandlordAddManager'
import LandlordAddNewTenant from './components/Landlord/LandlordAddNewTenant'
import ManagerAddNewTenant from './components/Manager/ManagerAddNewTenant'
import ManagerAddLandlord from './components/Manager/ManagerAddLandlord'
import LandlordReminders from './components/Landlord/LandlordReminders'
import ManagerReminders from './components/Manager/ManagerReminders'
import TenantApartmentDetails from './components/Tenant/TenantApartmentDetails'
import TenantApartmentDetailsTwo from './components/Tenant/TenantApartmentDetailsTwo'
import ManagerPropertyPageTwo from './components/Manager/ManagerPropertyPageTwo'
import LandlordPropertyPage from './components/Landlord/LandlordPropertyPage'
import Email from './pages/Email/Email'
import ResetPasswordEmail from './components/Email/ResetPasswordEmail'
import ConfirmEmail from './components/Email/ConfirmEmail'
import GeneralEmail from './components/Email/GeneralEmail'
import WelcomeEmail from './components/Email/WelcomeEmail'
import Signup from './components/Registration/Signup'
import Login from './components/Registration/Login'
import VerificationCode from './components/Registration/VerificationCode'
import ResetPassword from './components/Registration/ResetPassword'
import ResetEmailPassword from './components/Registration/ResetEmailPassword'
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
import LandlordSendReminder from './components/Landlord/LandlordSendReminder'
import UploadPropertyPage from './components/UploadProperty/UploadPropertyPage'
import LandlordSelectProperty from './components/Landlord/LandlordSelectProperty'
import ManagerSendReminder from './components/Manager/ManagerSendReminder'
import ManagerEditProfilePage from './components/Manager/ManagerEditProfilePage'
import ManagerProfileSettings from './components/Manager/ManagerProfileSettings'
import ManagerDocuments from './components/Manager/ManagerDocuments'
import LandlordEmptyProperty from './components/Landlord/LandlordEmptyProperty'
import LandlordEmptyTenant from './components/Landlord/LandlordEmptyTenant'
import LandlordEmptyManager from './components/Landlord/LandlordEmptyManager'
import LandlordEmptyReminder from './components/Landlord/LandlordEmptyReminder'
import LandlordUploadUnit from './components/Landlord/LandlordUploadUnit'
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
          <Route path='' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verify-code' element={<VerificationCode />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route
            path='/reset-email-password'
            element={<ResetEmailPassword />}
          />

          <Route path='/upload-ppt-sidebar' element={<UploadPptSidebar />} />
          <Route path='/checkbox' element={<Checkbox />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/calendar-days' element={<CalendarDays />} />
          <Route path='/calendar-weeks' element={<CalendarWeeks />} />
          <Route path='/calendar-months' element={<CalendarMonths />} />
          <Route path='/calendar-years' element={<CalendarYears />} />
          <Route path='/big-calendar' element={<BigCalendar />} />

          {/* Landlord page */}
          <Route path='/landlord' element={<LandLord />}>
            <Route path='' element={<LandlordHomePage />} />
            <Route path='notifications' element={<LandlordNotifications />} />
            <Route path='properties' element={<LandlordPropertyPage />} />
            <Route path='upload-property' element={<UploadPropertyPage />} />
            <Route path='add-unit' element={<LandlordUploadUnit />} />
            <Route path='tenants' element={<LandlordTenantList />} />
            <Route path='select-unit' element={<LandlordSelectProperty />} />
            <Route path='add-tenant' element={<LandlordAddNewTenant />} />
            <Route path='managers' element={<LandlordAddManager />} />
            <Route path='add-manager' element={<LandlordAddNewManager />} />
            <Route path='reminders' element={<LandlordReminders />} />
            <Route path='add-reminder' element={<LandlordAddReminder />} />
            <Route path='send-reminder' element={<LandlordSendReminder />} />
            <Route path='due-date' element={<LandlordDueDates />} />

            <Route path='edit-profile' element={<LandlordEditProfilePage />} />
            <Route path='profile' element={<LandlordProfileSettings />} />
            <Route path='empty-property' element={<LandlordEmptyProperty />} />
            <Route path='empty-tenant' element={<LandlordEmptyTenant />} />
            <Route path='empty-manager' element={<LandlordEmptyManager />} />
            <Route path='empty-reminder' element={<LandlordEmptyReminder />} />
          </Route>

          {/* Manager's Page */}
          <Route path='/manager' element={<PropertyManager />}>
            <Route path='' element={<ManagerHomePage />} />
            <Route path='notifications' element={<ManagerNotifications />} />
            <Route path='properties' element={<ManagerPropertyPageOne />} />
            <Route path='property' element={<ManagerPropertyPageTwo />} />
            <Route path='tenants' element={<ManagerTenantList />} />
            <Route path='add-tenant' element={<ManagerAddNewTenant />} />
            <Route path='landlords' element={<ManagerAddLandlord />} />
            <Route path='add-landlord' element={<ManagerAddNewLandlord />} />
            <Route path='reminders' element={<ManagerReminders />} />
            <Route path='due-date' element={<ManagerDueDates />} />
            <Route path='send-reminder' element={<ManagerSendReminder />} />
            <Route path='add-reminder' element={<ManagerAddReminder />} />
            <Route path='edit-profile' element={<ManagerEditProfilePage />} />
            <Route path='profile' element={<ManagerProfileSettings />} />
            <Route path='documents' element={<ManagerDocuments />} />
          </Route>

          {/* Tenant Page */}
          <Route path='/tenant' element={<Tenant />}>
            <Route path='' element={<TenantHomePage />} />
            <Route path='notifications' element={<TenantNotifications />} />
            <Route
              path='apartment-details'
              element={<TenantApartmentDetails />}
            />
            <Route
              path='apartment-details-two'
              element={<TenantApartmentDetailsTwo />}
            />
            <Route
              path='add-apartment-details'
              element={<TenantAddApartmentDetails />}
            />
            <Route path='reminders' element={<TenantReminders />} />
            <Route path='due-date' element={<TenantDueDates />} />
            <Route path='add-reminder' element={<TenantAddReminder />} />
            <Route path='edit-profile' element={<TenantEditProfilePage />} />
            <Route path='profile' element={<TenantProfileSettings />} />
            <Route path='payment' element={<TenantPaymentPage />} />
            <Route path='payment-form' element={<TenantPaymentForm />} />
            <Route path='payment-review' element={<TenantPaymentReview />} />
            <Route
              path='payment-review-two'
              element={<TenantPaymentReviewTwo />}
            />
            <Route path='payment-receipt' element={<TenantPaymentReceipt />} />
            <Route path='wallet' element={<TenantWallet />} />
            <Route path='wallet-transaction' element={<TenantWalletTransaction />} />
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
