import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Reload from './hooks/Reload'
import Signup from './components/Registration/Signup'
import Login from './components/Registration/Login'
import VerificationCode from './components/Registration/VerificationCode'
import EnterNewPassword from './components/Registration/EnterNewPassword'
import ForgotPassword from './components/Registration/ForgotPassword'
import ErrorPage from './components/Error/ErrorPage'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import ProtectedRoute from './hooks/ProtectedRoute'
import ActivateEmailModal from './components/modal/ActivateEmailModal'
import LandingPage from './pages/LandingPage/LandingPage'
import AccessPassword from './components/Registration/AccessPassword'
import { FirstMandate } from './context/Context'
import { landlordRoutes } from './routes/landlordRoutes'
import { managerRoutes } from './routes/managerRoutes'
import { tenantRoutes } from './routes/tenantRoutes'

function App() {
  const { theme } = useContext(FirstMandate)

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
          <Route path='/' element={<LandingPage />} />
          {/* <Route path='/access-password' element={<AccessPassword />} /> */}
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verify-code' element={<VerificationCode />} />
          <Route path='/new-password/:token' element={<EnterNewPassword />} />
          <Route path='/reset-password' element={<ForgotPassword />} />
          <Route
            path='/verify-user/:emailTokenId'
            element={<ActivateEmailModal />}
          />
          {/* <Route path='/upload-ppt-sidebar' element={<UploadPptSidebar />} />
          <Route path='/checkbox' element={<Checkbox />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/calendar-days' element={<CalendarDays />} />
          <Route path='/calendar-weeks' element={<CalendarWeeks />} />
          <Route path='/calendar-months' element={<CalendarMonths />} />
          <Route path='/calendar-years' element={<CalendarYears />} />
          <Route path='/big-calendar' element={<BigCalendar />} />
          <Route
            path='/landlord-reminder'
            element={<LandLordReminderSidebar />}
          /> */}
          <Route element={<ProtectedRoute />}>
            {landlordRoutes}
            {managerRoutes}
            {tenantRoutes}
          </Route>
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
