import React from 'react'
import styled from 'styled-components'
import { tenantTransaction } from '../../datas/TenantTransaction'

const TenantTransaction = () => {
  return (
    <>
      <TenantT>
        <section>
          <div className='table'>
            <table>
              <thead>
                <tr className='t-heading'>
                  <th>Date</th>
                  <th>Payment Type</th>
                  <th>Amount</th>
                  <th>Time</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tenantTransaction.map((list) => {
                  return (
                    <tr key={list.id} className='t-list'>
                      <td>{list.date}</td>
                      <td>{list.paymentType}</td>
                      <td>{list.amount}</td>
                      <td>{list.time}</td>
                      <td>{list.pMethod}</td>
                      <td style={list.style}>{list.property}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      </TenantT>
    </>
  )
}
const TenantT = styled.section`
  .table {
    overflow-x: scroll;
    width: 100%;
    background-color: #f6f6f8;
    padding: 20px;
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
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
  .t-heading {
    height: 40px;
  }
  .t-list {
    height: 40px;
    background-color: #fff;
  }
  .margin-r {
    margin: 5px 0;
    padding: 7px 10px;
    border-radius: 4px;
    background-color: #ffffff;
  }
`
export default TenantTransaction
