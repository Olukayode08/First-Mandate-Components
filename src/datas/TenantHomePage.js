import managerIcon from '../assets/manager.png'
import notificationIcon from '../assets/notification-02.png'
import vectorIcon from '../assets/Vector.png'
import houseIcon from '../assets/house-01.png'

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
