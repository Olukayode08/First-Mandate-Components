// import houseIcon from '../assets/Frame-2007.png'
import { AiOutlineStop } from 'react-icons/ai'

export const managerProperties = [
  {
    id: 2021,
    // image: houseIcon,
    icon: <AiOutlineStop />,

    title: 'House of Elovia',
    location: '17, Street 7, GRA, Osogbo, Osun State.',
    tableData: [
      {
        id: 20211,
        no: '1.',
        name: 'Love',
        unitType: 'Flat',
        bed: '3',
        tenantName: '-',
        rentTerm: '-',
        status: 'Vacant',
        amt: '#1,000,000.00k',
      },
      {
        id: 20212,
        no: '2.',
        bed: '-',
        name: 'Peace',
        tenantName: 'Mr. Kelly',
        unitType: 'Self con',
        rentTerm: '6 months',
        status: 'Occupied',
        amt: '#400,000.00k',
      },
      {
        id: 20213,
        no: '3.',
        bed: '4',
        name: 'Joy',
        tenantName: 'Mr. Segun',
        unitType: 'Bungalow',
        rentTerm: '6 months',
        status: 'Occupied',
        amt: '#400,000.00k',
      },
      {
        id: 20214,
        no: '4.',
        bed: '3',
        tenantName: '-',
        name: 'Grace',
        unitType: 'Bungalow',
        rentTerm: '-',
        status: 'Vacant',
        amt: '#1,000,000.00k',
      },
    ],
  },
]
