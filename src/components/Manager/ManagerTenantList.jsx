import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { landlordTenantList } from '../../datas/LandlordTenantList'
import { Link } from 'react-router-dom'

const ManagerTenantList = () => {
  const insertLineBreaks = (text) => {
    const maxLength = 20
    const words = text.split(' ')
    let lines = []
    let currentLine = ''

    words.forEach((word) => {
      if ((currentLine + word).length > maxLength) {
        lines.push(currentLine)
        currentLine = ''
      }
      currentLine += (currentLine ? ' ' : '') + word
    })

    if (currentLine) {
      lines.push(currentLine)
    }

    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  }
  return (
    <>
      <MTenantL>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>My Tenants</h3>
              <Link to='/manager/add-tenant' className='add-r'>
                <h4>Add New Tenant</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>SN</th>
                    <th>Rent Location</th>
                    <th>Tenant's Name</th>
                    <th>Property</th>
                    <th>Unit</th>
                    <th>Amount Paid</th>
                    <th>Rewal Status</th>
                    <th>Reminder</th>
                    <th>Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {landlordTenantList.map((list) => {
                    return (
                      <tr key={list.id} className='t-list'>
                        <td>{list.no}</td>
                        <td className='l-location'>
                          {insertLineBreaks(list.location)}
                        </td>
                        <td>{list.name}</td>
                        <td>{list.property}</td>
                        <td>{list.unit}</td>
                        <td>{list.amount}</td>
                        <td>{list.renewStatus}</td>
                        <td>
                          <div className='margin-r'>{list.reminder}</div>
                        </td>
                        <td>
                          <div style={list.style} className='margin-t'>
                            {list.paymentStatus}
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
      </MTenantL>
    </>
  )
}
const MTenantL = styled.section`
  .a-t-section {
    display: flex;
    background-color: #fff;
    flex-direction: column;
    width: 100%;
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
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
  .t-heading {
    height: 60px;
  }
  .t-list {
    height: 60px;
    background-color: #f6f6f8;
    box-shadow: -2px 4px 16px 0px #eeeeee;
  }
  .l-location {
    text-align: left;
  }
  .margin-r {
    margin: 5px 0;
    padding: 7px 10px;
    border-radius: 4px;
    background-color: #ffffff;
  }
  .margin-t {
    margin: 5px 0;
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
export default ManagerTenantList
