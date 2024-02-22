import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Registration/Signup'
import Login from './components/Registration/Login'
import Sidebar from './components/Sidebars/Sidebar'
import { ThemeContext } from './context/Darkmode'
import Header from './components/Headers/Header'
import UploadPptSidebar from './components/Sidebars/UploadPptSidebar'
import UploadPpt from './components/UploadPpt/UploadPpt'
import MyProperties from './components/Properties/MyProperties'
import FirstMandateSidebar from './components/Sidebars/FirstMandateSidebar'
import Reload from './hooks/Reload'
import LandLord from './pages/Landlord/LandLord'
import AddNewTenant from './components/Tenent/AddNewTenant'
import AddManager from './components/Manager/AddManager'
import Reminder from './components/Reminder/Reminder'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Reload />
      <div className='app' id={theme}>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/header' element={<Header />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/upload-ppt-sidebar' element={<UploadPptSidebar />} />
          <Route path='/main-sidebar' element={<FirstMandateSidebar />} />
          <Route path='/my-ppts' element={<MyProperties />} />
          <Route path='/add-tenant' element={<AddNewTenant />} />

          {/* Landlord page */}
          <Route path='/landlord' element={<LandLord />}>
            <Route path='' element={<Reminder />} />
            <Route path='upload-ppt' element={<UploadPpt />} />
            <Route path='add-tenant' element={<AddNewTenant />} />
            <Route path='add-manager' element={<AddManager />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
