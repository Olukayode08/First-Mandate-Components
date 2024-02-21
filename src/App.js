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


function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className='app' id={theme}>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/header' element={<Header />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/upload-ppt-sidebar' element={<UploadPptSidebar />} />
          <Route path='/main-sidebar' element={<FirstMandateSidebar />} />
          <Route path='/my-ppts' element={<MyProperties />} />
          <Route path='/upload-ppt' element={<UploadPpt />} />
        </Routes>
      </div>
    </>
  )
}

export default App
