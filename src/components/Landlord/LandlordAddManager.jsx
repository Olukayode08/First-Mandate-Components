import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { landlordManagerList } from '../../datas/LandlordManagerList'

const LandlordAddManager = () => {
  return (
    <>
      <LAManager>
        <section>
          <main className='a-t-section'>
            <div className='a-tenant'>
              <h3>My Manager</h3>
              <div className='add-r'>
                <h4>Add New Manager</h4>
                <FaRegPlusSquare size={20} />
              </div>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='l-m-heading'>
                    <th>SN</th>
                    <th>Property Name / Location</th>
                    <th>Managers's Name</th>
                  </tr>
                </thead>
                <tbody>
                  {landlordManagerList.map((list) => {
                    return (
                      <tr key={list.id} className='m-list'>
                        <td>{list.no}</td>
                        <td>{list.location}</td>
                        <td>{list.name}</td>
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
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 78%;
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
    background-color: #ffffff;
    box-shadow: -2px 4px 16px 0px #eeeeee;
  }
  .m-list {
    height: 50px;
  }
  @media screen and (max-width: 1270px) {
    .a-t-section {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    .a-t-section {
      width: 98%;
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
export default LandlordAddManager
