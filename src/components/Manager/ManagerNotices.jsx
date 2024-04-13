import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import { useFirstMandateQuery } from '../../data-layer/utils'
import ManagerEmptyNotice from './ManagerEmptyNotice'
const token = localStorage.getItem('token')

const ManagerNotices = () => {
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/property-manager/notices',
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )
  if (!data || !data.data || !data.data.data || data.data.data.length === 0) {
    return (
      <div>
        <ManagerEmptyNotice />
      </div>
    )
  }

  if (pageLoading) {
    return (
      <div className='page-spinner'>
        <div className='l-spinner'></div>
      </div>
    )
  }
  return (
    <>
      <MNotice>
        <section>
          <main className='l-notify'>
            <div className='a-tenant'>
              <h3>Notices</h3>
              <Link to='/manager/send-notice' className='add-r'>
                <h4>Send Notice</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Description</th>
                    <th>Tenant's Name</th>
                    <th>Tenant's Remark</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((notification) => (
                        <tr key={notification.uuid} className='t-notifications'>
                          <td>{notification.notice_date}</td>
                          <td>{notification.notice_time}</td>
                          <td>{notification.description}</td>
                          <td>{notification?.tenant?.name}</td>
                          <td>{notification.remarks}</td>
                          <td>
                            <div
                              className={
                                notification.acknowledged_status === 'pending'
                                  ? 'red-n n-margin'
                                  : notification.acknowledged_status ===
                                    'Accept'
                                  ? 'green-n n-margin'
                                  : 'neutral-n n-margin'
                              }
                            >
                              {notification.acknowledged_status}
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </main>
        </section>
      </MNotice>
    </>
  )
}
const MNotice = styled.section`
  .l-notify {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
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
  }
  .t-heading {
    text-align: left;
    height: 60px;
    background: #f6f6f8;
  }
  .t-notifications {
    height: 60px;
  }
  .n-margin {
    text-align: center;
    margin: 15px 0;
    padding: 7px 0;
    width: 75px;
    text-transform: capitalize;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
  }
  .red-n {
    background-color: red;
  }
  .green-n {
    background-color: #159e23;
  }
  .neutral-n {
    background-color: #ff7a00;
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
export default ManagerNotices
