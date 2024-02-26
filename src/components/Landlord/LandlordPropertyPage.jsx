import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { landlordProperties } from '../../datas/LandlordProperties'
import editIcon from '../../assets/edit-btn.png'

const LandlordPropertyPage = () => {
  return (
    <>
      <LandlordPP>
        <section>
          <div className='m-section'>
            <div className='add-r'>
              <h4>Upload New Property</h4>
              <FaRegPlusSquare size={20} />
            </div>

            {landlordProperties.map((property) => (
              <div key={property.id} className='manager-p'>
                <div className='apart-det'>
                  <img src={property.image} alt='House' />
                  <div className='apart-loc'>
                    <h3 className='h-name'>{property.title}</h3>
                    <h1 className='location'>
                      {property.location}
                    </h1>
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
                <LandlordP>
                  <div className='table'>
                    <table>
                      <thead>
                        <tr className='t-heading'>
                          <th>Unit No.</th>
                          <th>Bedrooms</th>
                          <th>Tenant's Name</th>
                          <th>Unit Type</th>
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
                              <td>{table.bed}</td>
                              <td>{table.tenantName}</td>
                              <td>{table.unitType}</td>
                              <td>{table.rentTerm}</td>
                              <td>{table.status}</td>
                              <td>{table.amt}</td>
                            </tr>
                          )
                        })}
                        <tr>
                          <td colSpan='7'>
                            <span style={{ float: 'right' }} className='delete'>
                              Delete
                            </span>
                            <img
                              className='edit-img'
                              style={{ float: 'right' }}
                              src={editIcon}
                              alt='Edit'
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </LandlordP>
              </div>
            ))}
          </div>
        </section>
      </LandlordPP>
    </>
  )
}

const LandlordP = styled.section`
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

  .delete {
    background: #ffdfe2;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 0 20px;
    cursor: pointer;
  }
  .edit-img {
    padding: 8px 20px;
    border-radius: 4px;
    background: #fedf7e;
    cursor: pointer;
  }
`

const LandlordPP = styled.section`
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
    margin: 20px 0;
  }
  .manager-p {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    margin: 20px 0;
    background: #ffffff;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .apart-det {
    display: flex;
    align-items: center;
    margin: 20px 0;
    width: 100%;
  }

  .apart-loc {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .h-name {
    margin: 0 5px;
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
  }
  span {
    font-weight: 800;
  }
  @media screen and (max-width: 1270px) {
    .m-section {
      width: 75%;
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
    .rent-det,
    .h-name,
    .location {
      text-align: center;
    }
    .h-name {
      margin: 10px 0;
    }
  }
  @media screen and (max-width: 700px) {
    .status-active {
      width: 90%;
    }
    p {
      margin: 3px 10px;
    }
    .add-r {
      align-items: center;
      margin: 20px auto;
    }
  }
`
export default LandlordPropertyPage
