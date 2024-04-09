import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import { useFirstMandateQuery } from '../../data-layer/utils'
import ManagerEmptyNotification from './ManagerEmptyNotification'
const token = localStorage.getItem('token')

const ManagerNotifications = () => {
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/property-manager/notices',
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )

  if (pageLoading) {
    return (
      <div className='page-spinner'>
        <div className='l-spinner'></div>
      </div>
    )
  }
  return (
    <>
      <ManagerN>
        <section>
          <main className='l-notify'>
            <div className='a-tenant'>
              <h3>Notifications</h3>
              <Link to='/manager/send-notification' className='add-r'>
                <h4>Send Notifications</h4>
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
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((notifications) => (
                        <tr
                          key={notifications.uuid}
                          className='t-notifications'
                        >
                          <td>{notifications.notice_date}</td>
                          <td>{notifications.notice_time}</td>
                          <td>{notifications.description}</td>
                          <td>{notifications?.tenant?.name}</td>
                          <td>
                            <div className='n-margin'>
                              {notifications.acknowledged_status}
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              {!pageLoading && !data.data.data?.length && (
                <div>
                  <ManagerEmptyNotification/>
                </div>
              )}
            </div>
          </main>
        </section>
      </ManagerN>
    </>
  )
}
const ManagerN = styled.section`
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
  .status-m {
    border: 1px solid black;
    text-align: center;
    margin: 15px 0;
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
export default ManagerNotifications
