import React from 'react'
import { Route } from 'react-router-dom'
import PropertyManager from '../pages/PropertyManager/PropertyManager'
import ManagerProperties from '../components/Manager/ManagerProperties'
import ManagerSingleProperty from '../components/Manager/ManagerSingleProperty'
import ManagerUploadPropertyPage from '../components/Manager/ManagerUploadPropertyPage'
import ManagerAddUnit from '../components/Manager/ManagerAddUnit'
import ManagerTenants from '../components/Manager/ManagerTenants'
import ManagerSelectUnit from '../components/Manager/ManagerSelectUnit'
import ManagerAddNewTenant from '../components/Manager/ManagerAddNewTenant'
import ManagerLandlords from '../components/Manager/ManagerLandlords'
import ManagerAddNewLandlord from '../components/Manager/ManagerAddNewLandlord'
import ManagerReminders from '../components/Manager/ManagerReminders'
import ManagerAddReminder from '../components/Manager/ManagerAddReminder'
import ManagerSendReminder from '../components/Manager/ManagerSendReminder'
import ManagerNotifications from '../components/Manager/ManagerNotifications'
import ManagerNotices from '../components/Manager/ManagerNotices'
import ManagerSendNotices from '../components/Manager/ManagerSendNotice'
import ManagerDueDates from '../components/Manager/ManagerDueDates'
import ManagerDueDatesTwo from '../components/Manager/ManagerDueDatesTwo'
import ManagerEditProfilePage from '../components/Manager/ManagerEditProfilePage'
import ManagerProfileSettings from '../components/Manager/ManagerProfileSettings'
import ManagerDocuments from '../components/Manager/ManagerDocuments'
import ManagerDocumentsTwo from '../components/Manager/ManagerDocumentsTwo'
import ManagerGenerateDocument from '../components/Manager/ManagerGenerateDocument'
import ManagerGenerateAgreement from '../components/Manager/ManagerGenerateAgreement'
import HomePage from '../components/Landlord/HomePage'
import { managerOptions } from '../datas/constants'

export const managerRoutes = (
  <Route path='/manager' element={<PropertyManager />}>
    <Route path='' element={<HomePage options={managerOptions} />} />
    <Route path='properties' element={<ManagerProperties />} />
    <Route
      path='property/:singlePropertyId'
      element={<ManagerSingleProperty />}
    />
    <Route path='add-property' element={<ManagerUploadPropertyPage />} />
    <Route path='add-unit/:propertyId/units' element={<ManagerAddUnit />} />
    <Route path='tenants' element={<ManagerTenants />} />
    <Route path='select-unit' element={<ManagerSelectUnit />} />
    <Route
      path='add-tenant/:unitId/tenants'
      element={<ManagerAddNewTenant />}
    />
    <Route
      path='add-tenant/:tenantId/:unitId/edit'
      element={<ManagerAddNewTenant />}
    />
    <Route path='landlords' element={<ManagerLandlords />} />
    <Route path='add-landlord' element={<ManagerAddNewLandlord />} />
    <Route
      path='add-landlord/:propertyId'
      element={<ManagerAddNewLandlord />}
    />
    <Route
      path='add-landlord/:propertyId/:landlordId/edit'
      element={<ManagerAddNewLandlord />}
    />
    <Route path='reminders' element={<ManagerReminders />} />
    <Route path='add-reminder' element={<ManagerAddReminder />} />
    <Route
      path='add-reminder/:reminderId/edit'
      element={<ManagerAddReminder />}
    />
    <Route
      path='tenants/:tenantId/send-reminder'
      element={<ManagerSendReminder />}
    />
    <Route path='notifications' element={<ManagerNotifications />} />
    <Route path='notices' element={<ManagerNotices />} />
    <Route path='send-notice' element={<ManagerSendNotices />} />
    <Route path='due-date' element={<ManagerDueDates />} />
    <Route path='due-date-two' element={<ManagerDueDatesTwo />} />
    <Route path='edit-profile' element={<ManagerEditProfilePage />} />
    <Route path='profile' element={<ManagerProfileSettings />} />
    <Route path='document' element={<ManagerDocuments />} />
    <Route path='document-two' element={<ManagerDocumentsTwo />} />
    <Route path='generate-document' element={<ManagerGenerateDocument />} />
    <Route path='generate-agreement' element={<ManagerGenerateAgreement />} />
  </Route>
)
