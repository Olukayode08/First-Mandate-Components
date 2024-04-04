import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import LandlordEmptyTenant from './LandlordEmptyTenant'
import { useFirstMandateQuery } from '../../data-layer/utils'

const token = localStorage.getItem('token')
const LandlordTenants = () => {
  // Fetch Tenants
  const navigate = useNavigate()
  const { data, isLoading: pageLoading } = useFirstMandateQuery('/tenants', {
    enabled: !!token,
    onSuccess: (data) => {},
  })

  if (pageLoading) {
    return <div className='page-loading'>Loading...</div>
  }
  return (
    <>
      <LTenants>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>My Tenants</h3>
              <Link to='/landlord/select-unit' className='add-r'>
                <h4>Add New Tenant</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>SN</th>
                    <th>Tenant's Name</th>
                    <th>Email</th>
                    <th>Phone no.</th>
                    <th>Edit Tenant</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((list) => (
                        <tr key={list.uuid} className='m-list'>
                          <td>1</td>
                          <td>{list.name}</td>
                          <td>{list.email}</td>
                          <td>{list.phone}</td>
                          <td
                            onClick={() =>
                              navigate(
                                `/landlord/select-unit/${list.uuid}/edit`
                              )
                            }
                          >
                            Edit Tenant
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              {!pageLoading && !data.data.data?.length && (
                <div>
                  <LandlordEmptyTenant />
                </div>
              )}
            </div>
          </main>
        </section>
      </LTenants>
    </>
  )
}
const LTenants = styled.section`
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
    border-radius: 4px;
    width: 250px;
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
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
  .t-heading {
    height: 60px;
  }
  .t-list {
    height: 60px;
    background-color: #f6f6f8;
    box-shadow: -2px 4px 16px 0px #eeeeee;
  }
  .l-location {
    text-align: left;
  }
  .margin-r {
    margin: 5px 0;
    padding: 7px 10px;
    border-radius: 4px;
    background-color: #ffffff;
  }
  .margin-t {
    margin: 5px 0;
    padding: 7px 10px;
    border-radius: 4px;
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
export default LandlordTenants
