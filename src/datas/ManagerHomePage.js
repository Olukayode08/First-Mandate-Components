import managerIcon from '../assets/manager.png'
import notificationIcon from '../assets/notification-02.png'
import vectorIcon from '../assets/Vector.png'
import houseIcon from '../assets/house-01.png'
import uploadIcon from '../assets/upload-01.png'

export const managerOptions = [
  {
    id: 1111,
    icon: managerIcon,
    heading: 'Add Tenants',
    text: 'Welcome Residents: Expand Your Community with New Tenants.',
    navigate: '/manager/add-tenant',
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
    navigate: '#',
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
