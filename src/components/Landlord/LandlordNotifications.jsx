import React from 'react'
import styled from 'styled-components'
import { landlordNotififcations } from '../../datas/LandlordNotifications'

const LandlordNotifications = () => {
  return (
    <>
      <Wrapper>
        <section className='l-notify'>
          <h1>Notifications</h1>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr className='t-heading'>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {landlordNotififcations.map((notifications) => {
                  return (
                    <tr key={notifications.id} className='t-notifications'>
                      <td>{notifications.date}</td>
                      <td>{notifications.time}</td>
                      <td>{notifications.desc}</td>
                      <td className='notification-status'>
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

  table {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
  }
  tr {
    border: 1px solid red;
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
  tr {
    flex-shrink: 0;
  }
  th,
  td {
    flex-shrink: 0;
    padding: 0 20px;
    border: 1px solid red;
    width: auto;
  }
  .notification-status {
    border: 1px solid black;
    text-align: center;
  }
  @media screen and (max-width: 1270px) {
    .l-notify {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    .l-notify {
      width: 100%;
      left: 0;
    }
  }
`
export default LandlordNotifications
