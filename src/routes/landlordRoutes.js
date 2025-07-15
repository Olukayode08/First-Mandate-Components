import React from 'react'
import { Route } from 'react-router-dom'
import LandLord from '../pages/Landlord/LandLord'
import HomePage from '../components/Landlord/HomePage'
import LandlordProperties from '../components/Landlord/LandlordProperties'
import LandlordSingleProperty from '../components/Landlord/LandlordSingleProperty'
import LandlordUploadPropertyPage from '../components/Landlord/LandlordUploadPropertyPage'
import LandlordAddUnit from '../components/Landlord/LandlordAddUnit'
import LandlordTenants from '../components/Landlord/LandlordTenants'
import LandlordSelectUnit from '../components/Landlord/LandlordSelectUnit'
import LandlordAddNewTenant from '../components/Landlord/LandlordAddNewTenant'
import LandlordManagers from '../components/Landlord/LandlordManagers'
import LandlordAddNewManager from '../components/Landlord/LandlordAddNewManager'
import LandlordReminders from '../components/Landlord/LandlordReminders'
import LandlordAddReminder from '../components/Landlord/LandlordAddReminder'
import LandlordSendReminder from '../components/Landlord/LandlordSendReminder'
import LandlordNotices from '../components/Landlord/LandlordNotices'
import LandlordSendNotice from '../components/Landlord/LandlordSendNotice'
import LandlordNotifications from '../components/Landlord/LandlordNotifications'
import LandlordDueDates from '../components/Landlord/LandlordDueDates'
import RentDueDate from '../components/Landlord/RentDueDate'
import LandlordEditProfilePage from '../components/Landlord/LandlordEditProfilePage'
import LandlordProfileSettings from '../components/Landlord/LandlordProfileSettings'
import { landlordOptions } from '../datas/constants'

export const landlordRoutes = (
  <Route path='/landlord' element={<LandLord />}>
    <Route path='' element={<HomePage options={landlordOptions} />} />
    <Route path='properties' element={<LandlordProperties />} />
    <Route
      path='property/:singlePropertyId'
      element={<LandlordSingleProperty />}
    />
    <Route path='add-property' element={<LandlordUploadPropertyPage />} />
    <Route path='add-unit/:propertyId/units' element={<LandlordAddUnit />} />
    <Route path='tenants' element={<LandlordTenants />} />
    <Route path='select-unit' element={<LandlordSelectUnit />} />
    <Route
      path='add-tenant/:unitId/tenants'
      element={<LandlordAddNewTenant />}
    />
    <Route
      path='add-tenant/:tenantId/:unitId/edit'
      element={<LandlordAddNewTenant />}
    />
    <Route path='managers' element={<LandlordManagers />} />
    <Route path='add-manager' element={<LandlordAddNewManager />} />
    <Route path='add-manager/:propertyId' element={<LandlordAddNewManager />} />
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
    <Route
      path='tenants/:tenantId/send-reminder'
      element={<LandlordSendReminder />}
    />
    <Route path='notices' element={<LandlordNotices />} />
    <Route path='send-notice' element={<LandlordSendNotice />} />
    <Route path='notifications' element={<LandlordNotifications />} />
    <Route path='due-date' element={<LandlordDueDates />} />
    <Route path='due-date-two' element={<RentDueDate />} />
    <Route path='edit-profile' element={<LandlordEditProfilePage />} />
    <Route path='profile' element={<LandlordProfileSettings />} />
  </Route>
)
