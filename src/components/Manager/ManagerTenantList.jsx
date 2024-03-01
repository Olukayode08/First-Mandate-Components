import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { managerTenantList } from '../../datas/ManagerTenantList'
import { Link } from 'react-router-dom'

const ManagerTenantList = () => {
  return (
    <>
      <ManagerTL>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>Tenants</h3>
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
                    <th>Amount Paid</th>
                    <th>Rent Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {managerTenantList.map((list) => {
                    return (
                      <tr key={list.id} className='t-list'>
                        <td>{list.no}</td>
                        <td>{list.location}</td>
                        <td>{list.name}</td>
                        <td>{list.amount}</td>
                        <td style={list.style} className='list-status'>
                          {list.status}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </main>
        </section>
      </ManagerTL>
    </>
  )
}
const ManagerTL = styled.section`
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
  @media screen and (max-width: 1270px) {
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
export default ManagerTenantList
