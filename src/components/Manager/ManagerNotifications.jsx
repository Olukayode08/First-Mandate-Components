import React from 'react'
import styled from 'styled-components'
import { managerNotififcations } from '../../datas/ManagerNotifications'

const ManagerNotifications = () => {
  return (
    <>
      <Wrapper>
        <section className='l-notify'>
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
                      <td
                        style={notifications.style}
                        className='notification-status'
                      >
                        {notifications.status}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
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
    background-color: #ffffff;
    box-shadow: -2px 4px 16px 0px #eeeeee;
  }
  .t-notifications {
    height: 50px;
  }
  .notification-status {
    border: 1px solid black;
    text-align: center;
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
export default ManagerNotifications
