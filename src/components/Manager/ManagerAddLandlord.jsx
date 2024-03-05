import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { managerLandlordList } from '../../datas/ManagerLandlordList'
import { Link } from 'react-router-dom'

const ManagerAddLandlord = () => {
  return (
    <>
      <ManagerAL>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>Landlords</h3>
              <Link to='/manager/add-landlord' className='add-r'>
                <h4>Add New Landlord</h4>
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
                  {managerLandlordList.map((list) => {
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
      </ManagerAL>
    </>
  )
}
const ManagerAL = styled.section`
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
    box-shadow: -2px 4px 16px 0px #eeeeee;
  }
  .m-list {
    height: 50px;
  }
  @media screen and (max-width: 1310px) {
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
export default ManagerAddLandlord
