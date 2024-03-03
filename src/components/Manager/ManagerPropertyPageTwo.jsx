import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import editIcon from '../../assets/edit-btn.png'
import { managerProperties } from '../../datas/ManagerProperties'

const ManagerPropertyPageTwo = () => {
  return (
    <>
      <ManagerPPT>
        <section>
          <div className='m-section'>
            <div className='a-ppt'>
              <h3>Properties</h3>
              <Link className='add-r'>
                <h4>Add New Property</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            {managerProperties.map((property) => (
              <div key={property.id} className='manager-p'>
                <div className='apart-det'>
                  <img className='p-img' src={property.image} alt='House' />
                  <div className='apart-loc'>
                    <div className='name-edit'>
                      <h3 className='h-name'>{property.title}</h3>
                      <img className='edit-img' src={editIcon} alt='Edit' />
                    </div>
                    <h1 className='location'>{property.location}</h1>
                    <div className='status-active'>
                      <p>
                        Status:
                        <span> Active</span>
                      </p>
                      <p>
                        Property Type:
                        <span> Residential</span>
                      </p>
                      <p>
                        Unit:
                        <span> 1 unit</span>
                      </p>
                      <p>
                        Building Type:
                        <span> Duplex</span>
                      </p>
                    </div>
                  </div>
                </div>
                <ManagerP>
                  <div className='table'>
                    <table>
                      <thead>
                        <tr className='t-heading'>
                          <th>Unit No.</th>
                          <th>Unit Name</th>
                          <th>Unit Type</th>
                          <th>Bedrooms</th>
                          <th>Tenant's Name</th>
                          <th>Rent Term</th>
                          <th>Status</th>
                          <th>Rent amt. yearly</th>
                        </tr>
                      </thead>
                      <tbody>
                        {property.tableData.map((table) => {
                          return (
                            <tr key={table.id} className='t-list'>
                              <td>{table.no}</td>
                              <td>{table.name}</td>
                              <td>{table.unitType}</td>
                              <td>{table.bed}</td>
                              <td>{table.tenantName}</td>
                              <td>{table.rentTerm}</td>
                              <td>{table.status}</td>
                              <td>{table.amt}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </ManagerP>
              </div>
            ))}
          </div>
        </section>
      </ManagerPPT>
    </>
  )
}

const ManagerP = styled.section`
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
  .t-heading {
    text-align: center;
    height: 60px;
    background: #f6f6f8;
  }
  .t-list {
    height: 40px;
  }
`

const ManagerPPT = styled.section`
  position: relative;
  .m-section {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 78%;
    margin: 0 auto;
    padding: 20px;
  }
  .a-ppt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
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
  .manager-p {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .apart-det {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
    width: 100%;
  }
  .a-img {
    width: 100px;
    height: 90px;
    border-radius: 4px;
  }
  .apart-loc {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .name-edit {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  .h-name {
    margin: 0 5px;
  }
  .edit-img {
    padding: 10px 12px;
    border-radius: 4px;
    background: #fedf7e;
    cursor: pointer;
  }
  .location {
    margin: 7px 5px;
  }
  .status-active {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
  }
  p {
    font-weight: 200;
    margin: 3px 5px;
    text-align: center;
  }
  span {
    font-weight: 800;
  }
  @media screen and (max-width: 1310px) {
    .m-section {
      width: 75%;
    }
    .a-ppt {
      width: 80%;
      margin: 10px auto;
    }
  }
  @media screen and (max-width: 1200px) {
    .m-section {
      width: 100%;
      left: 0;
    }
  }
  @media screen and (max-width: 900px) {
    .apart-det {
      width: 100%;
      justify-content: center;
      flex-direction: column;
    }
    .status-active,
    .apart-loc {
      align-items: center;
      justify-content: center;
    }
    .h-name,
    .location {
      text-align: center;
    }
    .h-name {
      margin: 10px 0;
    }
    .a-ppt {
      flex-direction: column;
    }
    .add-r {
      margin: 20px 0 10px 0;
    }
  }
  @media screen and (max-width: 700px) {
    .status-active {
      width: 95%;
    }
    p {
      margin: 10px;
    }
  }
`
export default ManagerPropertyPageTwo
