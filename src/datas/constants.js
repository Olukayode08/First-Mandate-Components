import managerIcon from '../assets/manager.png'
import notificationIcon from '../assets/notification-02.png'
import vectorIcon from '../assets/Vector.png'
import houseIcon from '../assets/house-01.png'
import uploadIcon from '../assets/upload-01.png'
import payment from '../assets/house-01.png'
import pdf from '../assets/pdf-02.png'
import doc from '../assets/doc-02.png'
import txt from '../assets/txt-02.png'
import electricity from '../assets/Group.png'
import water from '../assets/ion_water-outline.png'
import security from '../assets/carbon_security.png'
import wrench from '../assets/wrench-01.png'
import paymentTwo from '../assets/house-01.png'
import collection from '../assets/mingcute_wastebasket-line.png'

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

export const managerDocuments = [
  {
    id: 1001,
    icon: payment,
    heading: 'Payment Receipts',
  },
  {
    id: 1002,
    icon: payment,
    heading: 'Lease Agreement',
  },
  {
    id: 1003,
    icon: payment,
    heading: 'Lease Terms',
  },
]

export const wallets = [
  {
    id: 1,
    amt: '#100k',
    status: 'Rent',
    text: 'Rent Payment towards 2025',
  },
  {
    id: 2,
    amt: '#100k',
    status: 'Rent',
    text: 'Rent Payment towards 2025',
  },
  {
    id: 3,
    amt: '#100k',
    status: 'Rent',
    text: 'Rent Payment towards 2025',
  },
  {
    id: 4,
    amt: '#100k',
    status: 'Rent',
    text: 'Rent Payment towards 2025',
  },
]

export const DocumentTwo = [
  {
    id: 1,
    img: pdf,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 2,
    img: doc,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 3,
    img: txt,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 4,
    img: pdf,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 5,
    img: doc,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 6,
    img: txt,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 7,
    img: pdf,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 8,
    img: doc,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 9,
    img: txt,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 10,
    img: pdf,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 11,
    img: doc,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
  {
    id: 12,
    img: txt,
    title: 'Payment Receipt for Peace',
    size: '112kb',
  },
]

export const tenantWallet = [
  {
    id: 1,
    header: 'Saving Towards Rent Due',
    dateCreated: 'dd/mm/yyy',
    dueDate: 'dd/mm/yyy',
    savingsType: 'Remove from card automatically.',
    amount: '#2.70M',
  },
  {
    id: 2,
    header: 'Saving Towards Rent Due',
    dateCreated: 'dd/mm/yyy',
    dueDate: 'dd/mm/yyy',
    savingsType: 'Remove from card automatically.',
    amount: '#2.70M',
  },
]

export const tenantWalletTransaction = [
  {
    id: 1,
    header: 'Saving Towards Rent Due',
    dateCreated: 'dd/mm/yyy',
    dueDate: 'dd/mm/yyy',
    savingsType: 'Remove from card automatically.',
    amount: '#2.70M',
  },
]

export const tenantTransactionHistory = [
  {
    id: 101,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#300,000.00',
    time: '10:41pm',
    pMethod: 'Bank Transfer',
  },
  {
    id: 102,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#500,000.00',
    time: '12:00am',
    pMethod: 'Bank Transfer',
  },
  {
    id: 103,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#500,000.00',
    time: '12:00am',
    pMethod: 'Bank Transfer',
  },
  {
    id: 104,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#300,000.00',
    time: '10:41pm',
    pMethod: 'Bank Transfer',
  },
  {
    id: 105,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#500,000.00',
    time: '12:00am',
    pMethod: 'Bank Transfer',
  },
  {
    id: 106,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#500,000.00',
    time: '12:00am',
    pMethod: 'Bank Transfer',
  },
  {
    id: 107,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#300,000.00',
    time: '10:41pm',
    pMethod: 'Bank Transfer',
  },
  {
    id: 108,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#500,000.00',
    time: '12:00am',
    pMethod: 'Bank Transfer',
  },
  {
    id: 109,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#500,000.00',
    time: '12:00am',
    pMethod: 'Bank Transfer',
  },
]

export const tenantTransactionHistoryTwo = [
  {
    id: 101,
    date: 'dd/mm/yy',
    transactionType: 'Rent Due',
    amount: '#300,000.00',
    time: '10:41pm',
    status: 'successful',
  },
  {
    id: 102,
    date: 'dd/mm/yy',
    transactionType: 'Rent Due',
    amount: '#500,000.00',
    time: '12:00am',
    status: 'unsuccessful',
  },
  {
    id: 103,
    date: 'dd/mm/yy',
    transactionType: 'Rent Due',
    amount: '#500,000.00',
    time: '12:00am',
    status: 'pending',
  },
  {
    id: 104,
    date: 'dd/mm/yy',
    transactionType: 'Security Bill',
    amount: '#300,000.00',
    time: '10:41pm',
    status: 'successful',
  },
  {
    id: 105,
    date: 'dd/mm/yy',
    transactionType: 'Electricity Bill',
    amount: '#500,000.00',
    time: '12:00am',
    status: 'successful',
  },
  {
    id: 106,
    date: 'dd/mm/yy',
    transactionType: 'Rent Due',
    amount: '#500,000.00',
    time: '12:00am',
    status: 'pending',
  },
  {
    id: 107,
    date: 'dd/mm/yy',
    transactionType: 'Rent Due',
    amount: '#300,000.00',
    time: '10:41pm',
    status: 'successful',
  },
  {
    id: 108,
    date: 'dd/mm/yy',
    transactionType: 'Rent Due',
    amount: '#500,000.00',
    time: '12:00am',
    status: 'successful',
  },
]

export const walletSidebar = [
  {
    id: 1,
    text: 'My Wallet',
  },
  {
    id: 2,
    text: 'Pay Bills',
  },
  {
    id: 3,
    text: 'Fund Wallet',
  },
  {
    id: 4,
    text: 'Create Goal',
  },
]

export const tenantTransaction = [
  {
    id: 20011,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#300,000.00',
    time: '10:41pm',
    pMethod: 'Bank Transfer',
    property: 'Not Successful',
    style: { color: 'red' },
  },
  {
    id: 20012,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#500,000.00',
    time: '12:00am',
    pMethod: 'Bank Transfer',
    property: 'Successful',
    style: { color: '#004400' },
  },
  {
    id: 20013,
    date: 'dd/mm/yy',
    paymentType: 'Rent',
    amount: '#500,000.00',
    time: '12:00am',
    pMethod: 'Bank Transfer',
    property: 'Successful',
    style: { color: '#004400' },
  },
]

export const paymentSidebar = [
  {
    id: 1,
    text: 'Payments made this week.',
  },
  {
    id: 2,
    text: 'Payments made this week.',
  },
  {
    id: 3,
    text: 'Payments made this week.',
  },
  {
    id: 4,
    text: 'Payments made this week.',
  },
  {
    id: 5,
    text: 'Payments made this week.',
  },
]

export const landlordDueDates = [
  {
    id: 1,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 2,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 3,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 4,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 5,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 6,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 7,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 8,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 9,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
]

export const managerDueDates = [
  {
    id: 1,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 2,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 3,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 4,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 5,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 6,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 7,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 8,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 9,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
]

export const tenantPaymentReview = [
  {
    id: 210,
    rent: 'Rent',
    method: 'Credit Card',
    amount: '#3,000,000.00',
  },
]

export const dueDates = {
  Upcoming: {
    July: [
      {
        id: 1,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 2,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 3,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
    ],
    August: [
      {
        id: 4,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 5,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 6,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
    ],
  },
  Past: {
    May: [
      {
        id: 7,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 8,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 9,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
    ],
    June: [
      {
        id: 10,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 11,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 12,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
    ],
  },
  Cancelled: {
    March: [
      {
        id: 13,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 14,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 15,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
    ],
    April: [
      {
        id: 16,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 17,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
      {
        id: 18,
        time: '09:00 - 09:30',
        text: 'Rent due for Mr. Peace Adekola for month of February',
        status: 'Rent Due',
        amount: '#400,000.00k',
        dow: 'Fri',
        date: '26',
      },
    ],
  },
}

export const interview = {
  Fantasy: [
    {
      title: 'Game of thrones',
      desc: 'House of westeros',
    },
    {
      title: 'Game of thrones',
      desc: 'House of westeros',
    },
    {
      title: 'Game of thrones',
      desc: 'House of westeros',
    },
  ],
  Scifi: [
    {
      title: 'Game of thrones',
      desc: 'House of westeros',
    },
    {
      title: 'Game of thrones',
      desc: 'House of westeros',
    },
  ],
  Drama: [
    {
      title: 'Game of thrones',
      desc: 'House of westeros',
    },
  ],
}

export const tenantsPayment = [
  {
    id: 1001,
    icon: paymentTwo,
    heading: 'Pay Rent',
  },
  {
    id: 1002,
    icon: electricity,
    heading: 'Electricity Bills',
  },
  {
    id: 1003,
    icon: water,
    heading: 'Water Bills',
  },
  {
    id: 1004,
    icon: security,
    heading: 'Security Bills',
  },
  {
    id: 1005,
    icon: collection,
    heading: 'Waste Collection Payment',
  },
  {
    id: 1006,
    icon: wrench,
    heading: 'Repair Works',
  },
]

export const tenantDueDates = [
  {
    id: 1,
    title: 'Rent Payment',
    text: 'Rent due for Mr. Kelly for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#500,000.00k',
  },
  {
    id: 2,
    title: 'Electricity Bill',
    text: 'Electricity bill due for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#10,000.00k',
  },
  {
    id: 3,
    title: 'Water Bill',
    text: 'Water bill due for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#10,000.00k',
  },
  {
    id: 4,
    title: 'Security Bill',
    text: 'Security bill due for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#10,000.00k',
  },
  {
    id: 5,
    title: 'Waste Collection Bill',
    text: 'Waste collection bill due for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#10,000.00k',
  },
  {
    id: 6,
    title: 'Repair Works',
    text: 'Repair works bill due for month of February, 2024',
    sDate: 'dd/mm/yyyy',
    eDate: 'dd/mm/yyyy',
    amount: '#10,000.00k',
  },
]
