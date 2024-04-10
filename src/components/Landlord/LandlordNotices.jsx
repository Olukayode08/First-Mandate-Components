import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'
import LandlordEmptyNotice from './LandlordEmptyNotice'

const token = localStorage.getItem('token')

const LandlordNotices = () => {
  const { data, isLoading: pageLoading } = useFirstMandateQuery('/notices', {
    enabled: !!token,
    onSuccess: (data) => {},
  })
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
      <LNotices>
        <section>
          <main className='l-notify'>
            <div className='a-tenant'>
              <h3>Notices</h3>
              <Link to='/landlord/send-notice' className='add-r'>
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
                  <LandlordEmptyNotice />
                </div>
              )}
            </div>
          </main>
        </section>
      </LNotices>
    </>
  )
}
const LNotices = styled.section`
  .l-notify {
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
  @media screen and (max-width: 900px) {
    .a-tenant {
      flex-direction: column;
    }
    .add-r {
      margin: 20px 0 10px 0;
    }
  }
`
export default LandlordNotices
