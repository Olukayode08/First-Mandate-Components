import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { landlordProperties } from '../../datas/LandlordProperties'
import editIcon from '../../assets/pencil-edit-01.png'
import { Link } from 'react-router-dom'


const LandlordPropertyPage = () => {
  return (
    <>
      <LandlordPP>
        <section>
          <div className='m-section'>
            <Link to='/landlord/upload-property' className='add-r'>
              <h4>Upload New Property</h4>
              <FaRegPlusSquare size={20} />
            </Link>
            <div className='ppt-table'>
              {landlordProperties.map((property) => (
                <div key={property.id} className='manager-p'>
                  <div className='apart-det'>
                    {/* <img className='p-img' src={property.image} alt='House' /> */}
                    <div className='apartment'>
                      <p className='p-icon'>{property.icon}</p>
                      <div className='apart-loc'>
                        <h3 className='h-name'>{property.title}</h3>
                        <h1 className='location'>{property.location}</h1>
                        <div className='status-active'>
                          <p>
                            Status:
                            <span> Active</span>
                          </p>

                          <p>
                            Unit:
                            <span> 4 Units</span>
                          </p>
                          <p>
                            Building Type:
                            <span> Flat</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <img className='edit-img' src={editIcon} alt='Edit' />
                  </div>

                  <LandlordP>
                    {/* <main className='table'>
                    <div className='table-heading'>
                      <p className='t-header unit-w'>Unit No.</p>
                      <p className='t-header name-w'>Unit Name</p>
                      <p className='t-header name-w'>Unit Type</p>
                      <p className='t-header name-w'>Bedrooms</p>
                      <p className='t-header'>Tenant's Name</p>
                      <p className='t-header name-w'>Rent Term</p>
                      <p className='t-header name-w'>Status</p>
                      <p className='t-header'>Rent amt. yearly</p>
                    </div>
                    {property.tableData.map((table) => {
                      return (
                        <div key={table.id} className='table-body'>
                          <p className='t-body unit-w'>{table.no}</p>
                          <p className='t-body name-w'>{table.name}</p>
                          <p className='t-body name-w'>{table.unitType}</p>
                          <p className='t-body name-w'>{table.bed}</p>
                          <p className='t-body'>{table.tenantName}</p>
                          <p className='t-body name-w'>{table.rentTerm}</p>
                          <p className='t-body name-w'>{table.status}</p>
                          <p className='t-body'>{table.amt}</p>
                        </div>
                      )
                    })}
                  </main> */}
                    <div className='table'>
                      <table>
                        <thead>
                          <tr className='t-heading'>
                            <th>Unit No.</th>
                            <th>Unit Name</th>
                            <th>Unit Type</th>
                            <th>Bedrooms</th>
                            <th>Tenant's name</th>
                            <th>Rent Term</th>
                            <th>Status</th>
                            <th>Rent amt.</th>
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
                  </LandlordP>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LandlordPP>
    </>
  )
}

const LandlordP = styled.section`
  /* .table {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .table-body,
  .table-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    border: 1px solid black;
  }
  .t-body,
  .t-header {
    width: 120px;
    font-size: 15px;
    flex-shrink: 0;
    text-align: center;
  }
  .unit-w {
    width: 70px;
  }
  .name-w {
    width: 90px;
  }
  @media screen and (max-width: 900px) {
 .table-body,
  .table-heading{
    flex-direction: column;
  }
  } */
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
const LandlordPP = styled.section`
  position: relative;
  .m-section {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    width: 81%;
    padding: 20px;
  }
  .add-r {
    display: flex;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 4px;
    width: 250px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  .manager-p {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    background-color: #ffffff;
    margin: 20px 0;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .apart-det {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0;
    width: 100%;
  }
  .apartment {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .p-icon {
    font-size: 40px;
  }
  .p-img {
    width: 100px;
    height: 90px;
    border-radius: 4px;
  }
  .apart-loc {
    display: flex;
    flex-direction: column;
    gap: 17px;
  }

  .status-active {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  p {
    font-weight: 200;
    text-align: left;
  }
  span {
    font-weight: 800;
  }
  .edit-img {
    padding: 10px 12px;
    border-radius: 4px;
    background: #fedf7e;
    cursor: pointer;
  }
  @media screen and (max-width: 1350px) {
    .m-section {
      width: 79%;
    }
  }
  @media screen and (max-width: 1250px) {
    .m-section {
      width: 90%;
      top: 0;
      left: 0;
      right: 0;
      margin: 20px auto;
      padding: 10px;
    }
  }
  @media screen and (max-width: 900px) {
    .apart-det {
      flex-direction: column;
      align-items: flex-start;
    }
    .status-active,
    .apart-loc {
      align-items: flex-start;
      justify-content: left;
    }
    .h-name,
    .location {
      text-align: center;
    }
    .status-active,
    .h-name {
      margin: 10px 0;
    }
    .p-icon {
      display: none;
    }
  }
`
export default LandlordPropertyPage
