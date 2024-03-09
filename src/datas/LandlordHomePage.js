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
    navigate: '/landlord/add-tenant',
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
    navigate: '/landlord/upload-property',
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
