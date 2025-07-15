import managerIcon from '../assets/manager.png'
import notificationIcon from '../assets/notification-02.png'
import vectorIcon from '../assets/Vector.png'
import houseIcon from '../assets/house-01.png'
import uploadIcon from '../assets/upload-01.png'

export const landlordOptions = [
  {
    id: 1001,
    icon: managerIcon,
    heading: 'Add Tenants',
    text: 'Welcome Residents: Expand Your Community with New Tenants.',
    navigate: '/landlord/select-unit',
  },
  {
    id: 1002,
    icon: notificationIcon,
    heading: 'Create Reminders',
    text: 'Set Up Alerts: Stay Organized and On Track with Important Tasks.',
    navigate: '/landlord/add-reminder',
  },
  {
    id: 1003,
    icon: uploadIcon,
    heading: 'Upload New Property',
    text: 'Expand Your Portfolio: Integrate New Properties with Ease.',
    navigate: '/landlord/add-property',
  },
  {
    id: 1004,
    icon: houseIcon,
    heading: 'View Properties',
    text: 'Survey Properties: Navigate, Assess, and Manage Your Real Estate Holdings.',
    navigate: '/landlord/properties',
  },
  {
    id: 1005,
    icon: managerIcon,
    heading: 'Add Manager',
    text: 'Assign Oversight: Delegate Responsibilities for Efficient Property Management.',
    navigate: '/landlord/add-manager',
  },
  {
    id: 1006,
    icon: vectorIcon,
    heading: 'View Due Dates',
    text: 'Track Deadlines: Stay On Top of Important Dates and Tasks',
    navigate: '#',
  },
]

export const managerOptions = [
  {
    id: 1111,
    icon: managerIcon,
    heading: 'Add Tenants',
    text: 'Welcome Residents: Expand Your Community with New Tenants.',
    navigate: '/manager/select-unit',
  },
  {
    id: 1112,
    icon: notificationIcon,
    heading: 'Create Reminders',
    text: 'Set Up Alerts: Stay Organized and On Track with Important Tasks.',
    navigate: '/manager/add-reminder',
  },
  {
    id: 1113,
    icon: uploadIcon,
    heading: 'Upload New Property',
    text: 'Expand Your Portfolio: Integrate New Properties with Ease.',
    navigate: '/manager/add-property',
  },
  {
    id: 1114,
    icon: houseIcon,
    heading: 'View Properties',
    text: 'Survey Properties: Navigate, Assess, and Manage Your Real Estate Holdings.',
    navigate: '/manager/properties',
  },
  {
    id: 1115,
    icon: managerIcon,
    heading: 'Add Landlord',
    text: 'Engage Landlords: Strengthen Your Property Management Team with New Partners.',
    navigate: '/manager/add-landlord',
  },
  {
    id: 1116,
    icon: vectorIcon,
    heading: 'View Due Dates',
    text: 'Track Deadlines: Stay On Top of Important Dates and Tasks',
    navigate: '#',
  },
]

export const tenantOptions = [
  {
    id: 1011,
    icon: houseIcon,
    heading: 'Add Apartment Details',
    text: 'Provide Comprehensive Information for Improved Management',
    navigate: '/tenant/add-apartment-details',
  },
  {
    id: 1012,
    icon: notificationIcon,
    heading: 'Create Reminders',
    text: 'Set Up Alerts: Stay Organized and On Track with Important Tasks.',
    navigate: '/tenant/reminders',
  },

  {
    id: 1013,
    icon: vectorIcon,
    heading: 'View Due Dates',
    text: 'Track Deadlines: Stay On Top of Important Dates and Tasks',
    navigate: '#',
  },
  {
    id: 1014,
    icon: managerIcon,
    heading: 'Add Manager',
    text: 'Delegate Responsibilities for Efficient Property Management.',
    navigate: '#',
  },
]
