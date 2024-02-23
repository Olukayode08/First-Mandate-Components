import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Registration/Signup'
import Login from './components/Registration/Login'
import Sidebar from './components/Sidebars/Sidebar'
import { ThemeContext } from './context/Darkmode'
import UploadPptSidebar from './components/Sidebars/UploadPptSidebar'
import UploadPpt from './components/UploadPpt/UploadPpt'
import MyProperties from './components/Properties/MyProperties'
import Reload from './hooks/Reload'
import LandLord from './pages/Landlord/LandLord'
import AddNewTenant from './components/Tenant/AddNewTenant'
import AddManager from './components/Manager/AddManager'
import LandlordReminder from './components/Reminder/LandlordReminder'
import LandlordHomePage from './components/Landlord/LandlordHomePage'
import PropertyManager from './pages/PropertyManager/PropertyManager'
import ManagerHomePage from './components/Manager/ManagerHomePage'
import TenantHomePage from './components/Tenant/TenantHomePage'
import Tenant from './pages/Tenant/Tenant'
import LandlordNotifications from './components/Landlord/LandlordNotifications'
import LandlordAddReminder from './components/AddReminder/LandlordAddReminder'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Reload />
      <div className='app' id={theme}>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/upload-ppt-sidebar' element={<UploadPptSidebar />} />
          <Route path='/my-ppts' element={<MyProperties />} />

          {/* Manager's Page */}
          <Route path='/manager' element={<PropertyManager />}>
            <Route path='' element={<ManagerHomePage />} />
          </Route>
          {/* Tenant Page */}
          <Route path='/tenant' element={<Tenant />}>
            <Route path='' element={<TenantHomePage />} />
          </Route>
          {/* Landlord page */}
          <Route path='/landlord' element={<LandLord />}>
            <Route path='' element={<LandlordHomePage />} />
            <Route path='reminder' element={<LandlordReminder />} />
            <Route path='add-reminder' element={<LandlordAddReminder />} />
            <Route path='upload-ppt' element={<UploadPpt />} />
            <Route path='add-tenant' element={<AddNewTenant />} />
            <Route path='add-manager' element={<AddManager />} />
            <Route path='notify' element={<LandlordNotifications />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
