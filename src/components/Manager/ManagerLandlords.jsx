import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'
import ManagerEmptyLandlord from './ManagerEmptyLandlord'
import SkeletonPost from '../skeletons/SkeletonPost'

const ManagerLandlords = () => {
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/property-manager/properties',
    {
      onSuccess: (data) => {},
    }
  )

    if (pageLoading) {
      return [...Array(10).keys()].map((i) => {
        return <SkeletonPost key={i} />
      })
      // <div className='page-spinner'>
      //   <div className='l-spinner'></div>
      // </div>
    }
  if (!data || !data.data || !data.data.data || data.data.data.length === 0) {
    return (
      <div>
        <ManagerEmptyLandlord />
      </div>
    )
  }

  return (
    <>
      <ManagerAL>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>Landlords</h3>
              <Link to='/manager/add-landlord' className='add-r'>
                <h4>Add New Landlord</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='l-m-heading'>
                    <th>Landlord's Name</th>
                    <th>Property Name</th>
                    <th>Property Location</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>No. Of Units</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((property) => (
                        <tr key={property.uuid} className='m-list'>
                          <td>{property.landlord?.name}</td>
                          <td>{property.title}</td>
                          <td>{property.address}</td>
                          <td>{property.landlord?.email}</td>
                          <td>{property.landlord?.phone}</td>
                          <td>{property.units.length}</td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </main>
        </section>
      </ManagerAL>
    </>
  )
}
const ManagerAL = styled.section`
  .a-t-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .a-tenant {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
  .add-r {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 10px;
    width: 250px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  .table {
    overflow-x: scroll;
    width: 100%;
  }
  table {
    border-collapse: separate;
    border-spacing: 0 20px;
    width: 100%;
  }
  th,
  td {
    white-space: nowrap;
    padding: 0 20px;
    text-align: left;
  }
  .l-m-heading {
    text-align: center;
    height: 60px;
    background-color: #f6f6f8;
  }
  .m-list {
    height: 50px;
  }
  @media screen and (max-width: 900px) {
    .a-tenant {
      flex-direction: column;
    }
    .add-r {
      margin: 20px 0 10px 0;
    }
  }
`
export default ManagerLandlords
