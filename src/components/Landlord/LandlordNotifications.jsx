import React from 'react'
import styled from 'styled-components'
import { useFirstMandateQuery } from '../../data-layer/utils'
import LandlordEmptyNotification from './LandlordEmptyNotice'

const token = localStorage.getItem('token')

const LandlordNotifications = () => {
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/notifications',
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
      <LNotify>
        <section>
          <main className='l-notify'>
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
                        <tr key={notifications.id} className='t-notifications'>
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
                  <LandlordEmptyNotification />
                </div>
              )}
            </div>
          </main>
        </section>
      </LNotify>
    </>
  )
}
const LNotify = styled.section`
  .l-notify {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
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
    border: 1px solid black;
    text-align: center;
    margin: 15px 0;
    padding: 7px 10px;
    border-radius: 4px;
  }
`
export default LandlordNotifications
