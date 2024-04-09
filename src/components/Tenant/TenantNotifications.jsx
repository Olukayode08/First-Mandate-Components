import React from 'react'
import styled from 'styled-components'
import { useFirstMandateQuery } from '../../data-layer/utils'
import TenantEmptyNotification from './TenantEmptyNotification'
const token = localStorage.getItem('token')

const TenantNotifications = () => {
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/tenant/all-notices',
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )

  console.log(data);

  if (pageLoading) {
    return (
      <div className='page-spinner'>
        <div className='l-spinner'></div>
      </div>
    )
  }
  return (
    <>
      <TenantN>
        <section>
          <main className='l-notify'>
            <h1>Notifications</h1>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Description</th>
                    <th>Landlord's Name</th>
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
                          <td>{notifications?.apartment?.landlord_name}</td>
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
                  <TenantEmptyNotification />
                </div>
              )}
            </div>
          </main>
        </section>
      </TenantN>
    </>
  )
}
const TenantN = styled.section`
  .l-notify {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 4px;
    padding: 20px;
  }
  h1 {
    font-size: 18px;
    padding: 0 20px;
    margin: 20px 0;
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
    height: 50px;
  }
  .n-margin {
    border: 1px solid black;
    text-align: center;
    margin: 15px 0;
    padding: 7px 10px;
    cursor: pointer;
    border-radius: 4px;
  }
`
export default TenantNotifications
