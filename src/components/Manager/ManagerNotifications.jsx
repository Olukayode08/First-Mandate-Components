import React from 'react'
import styled from 'styled-components'
import { useFirstMandateQuery } from '../../data-layer/utils'
import ManagerEmptyNotification from './ManagerEmptyNotification'
import SkeletonPost from '../skeletons/SkeletonPost'

const ManagerNotifications = () => {
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/notifications',
    {
      onSuccess: (data) => {},
    }
  )
  const separateDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString)
    const date = dateTime.toLocaleDateString()
    const time = dateTime.toLocaleTimeString()
    return { date, time }
  }

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
        <ManagerEmptyNotification />
      </div>
    )
  }

  return (
    <>
      <ManagerN>
        <section>
          <main className='l-notify'>
            <h1>Notifications</h1>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Date</th>
                    <th>Time</th> <th>Title</th>
                    <th>Section</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((notification) => (
                        <tr key={notification.id} className='t-notifications'>
                          <td>
                            {separateDateTime(notification.created_at).date}
                          </td>
                          <td>
                            {separateDateTime(notification.created_at).time}
                          </td>
                          <td>{notification.title}</td>
                          <td>{notification.section}</td>
                          <td>{notification.notification}</td>
                          {/* <td>
                            <div className='n-margin'>
                              {notification.acknowledged_status}
                            </div>
                          </td> */}
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
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
  h1 {
    font-size: 18px;
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
    height: 60px;
  }
  .status-m {
    border: 1px solid black;
    text-align: center;
    margin: 15px 0;
    padding: 7px 10px;
    border-radius: 4px;
  }
`
export default ManagerNotifications
