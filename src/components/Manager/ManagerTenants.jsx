import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'
import ManagerEmptyTenant from './ManagerEmptyTenant'

const token = localStorage.getItem('token')
const ManagerTenants = () => {
  // Fetch Tenants
  const navigate = useNavigate()

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/property-manager/property-tenants',
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )
  
  console.log(data)

  if (pageLoading) {
    return (
      <div className='page-spinner'>
        <div className='l-spinner'></div>
      </div>
    )
  }
  return (
    <>
      <LTenants>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>My Tenants</h3>
              <Link to='/manager/select-unit' className='add-r'>
                <h4>Add New Tenant</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Rent Location</th>
                    <th>Tenant's Name</th>
                    <th>Unit Name</th>
                    <th>Unit Type</th>
                    <th>Email</th>
                    <th>Phone no.</th>
                    <th>Amount</th>
                    <th>Payment Status</th>
                    <th>Rent Due Date</th>
                    <th>Lease Start</th>
                    <th>Lease End</th>
                    <th>Edit Tenant</th>
                    <th>Send Reminder</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((list) => (
                        <tr key={list.uuid} className='m-list'>
                          <td>{list.property.address}</td>
                          <td>{list.name}</td>
                          <td>{list.property_unit.unit_name}</td>
                          <td>{list.property_unit.unit_type}</td>
                          <td>{list.email}</td>
                          <td>{list.phone}</td>
                          <td>{list.installment_amount}</td>
                          <th>
                            <div
                              className={
                                list.rent_payment_status === 'Paid in full'
                                  ? 'margin-p green'
                                  : list.rent_payment_status === 'Not Paid'
                                  ? 'margin-p red'
                                  : 'margin-p half'
                              }
                            >
                              {list.rent_payment_status}
                            </div>
                          </th>
                          <th>{list.rent_due_date}</th>
                          <td>{list.lease_start}</td>
                          <td>{list.lease_end}</td>
                          <td
                            onClick={() =>
                              // navigate(
                              //   `/landlord/select-unit/${list.uuid}/edit`
                              // )
                              navigate(
                                `/landlord/add-tenant/${list.uuid}/${list.property_unit.uuid}/edit`
                              )
                            }
                          >
                            <div className='margin-t'>Edit Tenant</div>
                          </td>
                          <td
                            onClick={() => navigate(`/manager/add-reminder`)}
                          >
                            <div className='margin-t'>Send Reminder</div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              {!pageLoading && !data.data.data?.length && (
                <div>
                  <ManagerEmptyTenant />
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
    border-spacing: 0 25px;
    width: 100%;
  }
  th,
  td {
    white-space: nowrap;
    padding: 0 20px;
    font-size: 15px;
    line-height: 22px;
    text-align: left;
  }
  .t-heading {
    height: 60px;
  }
  .m-list {
    height: 60px;
    background-color: #f6f6f8;
    box-shadow: -2px 4px 16px 0px #eeeeee;
  }
  .l-location {
    text-align: left;
  }
  .margin-p {
    margin: 5px 0;
    padding: 7px 10px;
    border-radius: 4px;
    text-align: center;
    color: #ffffff;
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: #159e23;
  }
  .half {
    background-color: #ff7a00;
  }
  .margin-t {
    margin: 5px 0;
    padding: 7px 10px;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
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
export default ManagerTenants
