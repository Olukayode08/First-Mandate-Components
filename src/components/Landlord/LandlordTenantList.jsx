import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { landlordTenantList } from '../../datas/LandlordTenantList'
import { Link } from 'react-router-dom'
import LandlordEmptyTenant from './LandlordEmptyTenant'

const LandlordTenantList = () => {
  // const insertLineBreaks = (text) => {
  //   const maxLength = 20
  //   const words = text.split(' ')
  //   let lines = []
  //   let currentLine = ''

  //   words.forEach((word) => {
  //     if ((currentLine + word).length > maxLength) {
  //       lines.push(currentLine)
  //       currentLine = ''
  //     }
  //     currentLine += (currentLine ? ' ' : '') + word
  //   })

  //   if (currentLine) {
  //     lines.push(currentLine)
  //   }

  //   return lines.map((line, index) => (
  //     <React.Fragment key={index}>
  //       {line}
  //       <br />
  //     </React.Fragment>
  //   ))
  // }
  const [data] = useState(landlordTenantList)

  if (data.length === 0) {
    return (
      <div>
        <LandlordEmptyTenant />
      </div>
    )
  }
  return (
    <>
      <LTenantL>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>My Tenants</h3>
              <Link to='/landlord/select-unit' className='add-r'>
                <h4>Add New Tenant</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>SN</th>
                    <th>Tenant's Name</th>
                    <th>Property Name</th>
                    <th>Unit</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>WhatsApp Number</th>
                    <th>Lease Start Date</th>
                    <th>Lease End Date</th>
                    <th>Payment Type</th>
                    <th>Payment Status</th>
                    <th>Rent Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((list) => {
                    return (
                      <tr key={list.id} className='t-list'>
                        <td>{list.no}</td>
                        {/* <td className='l-location'>{insertLineBreaks(list.location)}</td> */}
                        <td>Nike Alade</td>
                        <td>Nike House</td>
                        <td>{list.unit}</td>
                        <td>nikealade@gmail.com</td>
                        <td>+234 8168345494</td>
                        <td>+234 8168345494</td>
                        <td>05/03/2024</td>
                        <td>05/03/2024</td>
                        <td>Full Payment</td>
                        <td>Paid</td>
                        <td>05/03/2024</td>
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
  .a-t-section {
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
export default LandlordTenantList
