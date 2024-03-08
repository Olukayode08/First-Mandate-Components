import React from 'react'
import styled from 'styled-components'
import { managerNotififcations } from '../../datas/ManagerNotifications'

const ManagerNotifications = () => {
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
                    <th>Time</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {managerNotififcations.map((notifications) => {
                    return (
                      <tr key={notifications.id} className='t-notifications'>
                        <td>{notifications.date}</td>
                        <td>{notifications.time}</td>
                        <td>{notifications.desc}</td>
                        <td>
                          <div style={notifications.style} className='status-m'>
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
      </ManagerN>
    </>
  )
}
const ManagerN = styled.section`
  position: relative;
  .l-notify {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: flex-start;
    width: 81%;
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
    height: 60px;
  }
  .status-m {
    border: 1px solid black;
    text-align: center;
    margin: 15px 0;
    padding: 7px 10px;
    border-radius: 4px;
  }

  @media screen and (max-width: 1350px) {
    .l-notify {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .l-notify {
      width: 90%;
      top: 0;
      left: 0;
      right: 0;
      margin: 20px auto;
      padding: 10px;
    }
  }
`
export default ManagerNotifications
