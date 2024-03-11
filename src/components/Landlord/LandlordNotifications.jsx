import React from 'react'
import styled from 'styled-components'
import { landlordNotififcations } from '../../datas/LandlordNotifications'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const LandlordNotifications = () => {
  return (
    <>
      <LNotify>
        <section>
          <main className='l-notify'>
            <div className='a-tenant'>
              <h3>Notifications</h3>
              <Link className='add-r'>
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
                        <td>
                          <div className='n-margin' style={notifications.style}>
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
export default LandlordNotifications
