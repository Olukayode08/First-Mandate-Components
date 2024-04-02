import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import LandlordEmptyManager from './LandlordEmptyManager'
import { useFirstMandateQuery } from '../../data-layer/utils'
const token = localStorage.getItem('token')

const LandlordManagers = () => {
  const navigate = useNavigate()

  const [propertyManagers, setPropertyManagers] = useState([])

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/property-managers',
    {
      enabled: !!token,
      onSuccess: (data) => {
        setPropertyManagers(data?.data?.data || [])
      },
    }
  )
  if (pageLoading) {
    return <div className='page-loading'>Loading...</div>
  }

  return (
    <>
      <LManager>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>My Manager</h3>
              <Link to='/landlord/add-manager' className='add-r'>
                <h4>Add New Manager</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='l-m-heading'>
                    <th>SN</th>
                    <th>Managers's Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Edit Manager</th>
                  </tr>
                </thead>
                <tbody>
                  {propertyManagers && propertyManagers.length > 0
                    ? propertyManagers.map((list) => (
                        <tr key={list.uuid} className='m-list'>
                          <td>1</td>
                          <td>{list.name}</td>
                          <td>{list.email}</td>
                          <td>{list.phone}</td>
                          {/* <td
                            onClick={() =>
                              navigate(`/landlord/managers/${list.uuid}`)
                            }
                          >
                            View Manager
                          </td> */}
                          <td
                            onClick={() =>
                              navigate(
                                `/landlord/add-manager/${list.property.uuid}/${list.uuid}/edit`
                              )
                            }
                          >
                            Edit Manager
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              {!pageLoading && !propertyManagers?.length && (
                <div>
                  <LandlordEmptyManager />
                </div>
              )}
            </div>
          </main>
        </section>
      </LManager>
    </>
  )
}
const LManager = styled.section`
  .a-t-section {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .a-tenant {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
    text-align: center;
  }
  .l-m-heading {
    text-align: center;
    height: 60px;
    background: #f6f6f8;
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
export default LandlordManagers
