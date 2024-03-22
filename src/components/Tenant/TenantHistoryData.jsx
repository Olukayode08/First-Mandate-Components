import React from 'react'
import styled from 'styled-components'
import { tenantTransactionHistory } from '../../datas/TenantTransactionHistory'

const TenantHistoryData = () => {
  return (
    <>
      <TenantHD>
        <section>
          <div className='table'>
            <table>
              <thead>
                <tr className='t-heading'>
                  <th>S/N</th>
                  <th>Date</th>
                  <th>Payment Type</th>
                  <th>Amount</th>
                  <th>Time</th>
                  <th>Paid by</th>
                  <th>Property</th>
                  <th>Unit</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {tenantTransactionHistory.map((list) => {
                  return (
                    <tr key={list.id} className='t-list'>
                      <td>1</td>
                      <td>{list.date}</td>
                      <td>{list.paymentType}</td>
                      <td>{list.amount}</td>
                      <td>{list.time}</td>
                      <td>Lateef O.</td>
                      <td>Elovia</td>
                      <td>4</td>
                      <td>{list.pMethod}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      </TenantHD>
    </>
  )
}
const TenantHD = styled.section`
  .table {
    overflow-x: scroll;
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 4px;
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
    height: 50px;
  }
  .t-list {
    height: 50px;
    background-color: #f6f6f8;
  }
`
export default TenantHistoryData
