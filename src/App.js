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
import TenantAddApartmentDetails from './components/Tenant/TenantAddApartmentDetails'
import ManagerAddNewLandlord from './components/Manager/ManagerAddNewLandlord'
import LandlordHomePage from './components/Landlord/LandlordHomePage'
import PropertyManager from './pages/PropertyManager/PropertyManager'
import ManagerHomePage from './components/Manager/ManagerHomePage'
import TenantHomePage from './components/Tenant/TenantHomePage'
import Tenant from './pages/Tenant/Tenant'
import LandlordNotifications from './components/Landlord/LandlordNotifications'
import LandlordAddReminder from './components/AddReminder/LandlordAddReminder'
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
            <Route path='ppt-page' element={<ManagerPropertyPageOne />} />
            <Route path='add-landlord' element={<ManagerAddLandlord />} />
            <Route
              path='add-new-landlord'
              element={<ManagerAddNewLandlord />}
            />
            <Route path='tenant-list' element={<ManagerTenantList />} />
            <Route path='add-tenant' element={<ManagerAddNewTenant />} />
            <Route path='notify' element={<ManagerNotifications />} />

            <Route
              path='add-landord-details'
              element={<ManagerAddNewLandlord />}
            />
            <Route path='reminders' element={<ManagerReminders />} />
          </Route>

          {/* Tenant Page */}
          <Route path='/tenant' element={<Tenant />}>
            <Route path='' element={<TenantHomePage />} />
            <Route path='notify' element={<TenantNotifications />} />
            <Route
              path='add-apartment-details'
              element={<TenantAddApartmentDetails />}
            />
            <Route
              path='apartment-details'
              element={<TenantApartmentDetails />}
            />
            <Route
              path='apartment-details-two'
              element={<TenantApartmentDetailsTwo />}
            />
          </Route>
          {/* Landlord page */}
          <Route path='/landlord' element={<LandLord />}>
            <Route path='' element={<LandlordHomePage />} />
            <Route path='reminders' element={<LandlordReminders />} />
            <Route path='upload-ppt' element={<UploadPpt />} />
            <Route path='tenant-list' element={<LandlordTenantList />} />
            <Route path='add-tenant' element={<LandlordAddNewTenant />} />
            <Route path='add-manager' element={<LandlordAddManager />} />
            <Route path='add-new-manager' element={<LandlordAddNewManager />} />
            <Route path='notify' element={<LandlordNotifications />} />
            <Route path='add-reminder' element={<LandlordAddReminder />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
