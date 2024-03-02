import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { landlordTenantList } from '../../datas/LandlordTenantList'
import { Link } from 'react-router-dom'

const LandlordTenantList = () => {
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
      <LTenantL>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>My Tenants</h3>
              <Link to='/landlord/add-tenant' className='add-r'>
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
                        <td>{insertLineBreaks(list.location)}</td>
                        <td>{list.name}</td>
                        <td>{list.property}</td>
                        <td>{list.unit}</td>
                        <td>{list.amount}</td>
                        <td>{list.renewStatus}</td>
                        <td>{list.reminder}</td>
                        <td style={list.style} className='list-status'>
                          {list.paymentStatus}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </main>
        </section>
      </LTenantL>
    </>
  )
}
const LTenantL = styled.section`
  position: relative;
  .a-t-section {
    position: absolute;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 78%;
    margin: 0 auto;
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
  }

  .t-heading {
    text-align: left;
    height: 60px;
  }
  .t-list {
    height: 50px;
    box-shadow: -2px 4px 16px 0px #eeeeee;
  }
  .list-status {
    text-align: center;
  }
  @media screen and (max-width: 1320px) {
    .a-t-section {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    .a-t-section {
      width: 100%;
      left: 0;
    }
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
export default LandlordTenantList
