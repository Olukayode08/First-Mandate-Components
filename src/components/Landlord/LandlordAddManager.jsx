import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { landlordManagerList } from '../../datas/LandlordManagerList'
import { Link } from 'react-router-dom'

const LandlordAddManager = () => {
  return (
    <>
      <LAManager>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>My Manager</h3>
              <Link to='/landlord/add-manager' className='add-r'>
                <h4>Add New Manager</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='l-m-heading'>
                    <th>SN</th>
                    <th>Managers's Name</th>
                    <th>Property Name</th>
                    <th>Property Location</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>WhatsApp Number</th>
                  </tr>
                </thead>
                <tbody>
                  {landlordManagerList.map((list) => {
                    return (
                      <tr key={list.id} className='m-list'>
                        <td>{list.no}</td>
                        <td>{list.name}</td>
                        <td>Nike House</td>
                        <td>{list.location}</td>
                        <td>{list.email}</td>
                        <td>{list.phoneNo}</td>
                        <td>{list.phoneNo}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </main>
        </section>
      </LAManager>
    </>
  )
}
const LAManager = styled.section`
  position: relative;
  .a-t-section {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    width: 81%;
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
    border-radius: 10px;
    width: 250px;
    text-decoration: none;
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
    text-align: center;
  }
  .l-m-heading {
    text-align: center;
    height: 60px;
    background: #f6f6f8;
  }
  .m-list {
    height: 50px;
  }
  @media screen and (max-width: 1350px) {
    .a-t-section {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .a-t-section {
      width: 98%;
      left: 0;
      top: 0;
      padding: 10px;
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
export default LandlordAddManager
