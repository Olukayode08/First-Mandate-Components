import React from 'react'
import styled from 'styled-components'
import { tenantNotififcations } from '../../datas/TenantNotifications'

const TenantNotifications = () => {
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
                    <th>Message</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tenantNotififcations.map((notifications) => {
                    return (
                      <tr key={notifications.id} className='t-notifications'>
                        <td>{notifications.date}</td>
                        <td>{notifications.time}</td>
                        <td>{notifications.desc}</td>
                        <td>
                          <div style={notifications.style} className='n-margin'>
                            {notifications.status}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </main>
        </section>
      </TenantN>
    </>
  )
}
const TenantN = styled.section`
  position: relative;
  .l-notify {
    position: absolute;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 78%;
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
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
    border-radius: 4px;
  }
  @media screen and (max-width: 1270px) {
    .l-notify {
      width: 75%;
    }
    h3 {
    }
  }
  @media screen and (max-width: 1200px) {
    .l-notify {
      width: 100%;
      left: 0;
    }
  }
`
export default TenantNotifications
