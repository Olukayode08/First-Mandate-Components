import React from 'react'
import styled from 'styled-components'
import { tenantTransactionHistoryTwo } from '../../datas/TenantTransactionHistoryTwo'

const TenantHistoryDataTwo = () => {
  return (
    <>
      <TenantHDT>
        <section>
          <div className='table'>
            <table>
              <thead>
                <tr className='t-heading'>
                  <th>S/N</th>
                  <th>Date</th>
                  <th>Transaction Type</th>
                  <th>Amount</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Paid to</th>
                </tr>
              </thead>
              <tbody>
                {tenantTransactionHistoryTwo.map((list) => {
                  return (
                    <tr key={list.id} className='t-list'>
                      <td>1</td>
                      <td>{list.date}</td>
                      <td>{list.transactionType}</td>
                      <td>{list.amount}</td>
                      <td>{list.time}</td>
                      <td>{list.status}</td>
                      <td>Mr kelly</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      </TenantHDT>
    </>
  )
}
const TenantHDT = styled.section`
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
export default TenantHistoryDataTwo
