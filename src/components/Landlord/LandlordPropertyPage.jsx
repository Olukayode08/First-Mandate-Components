import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { landlordProperties } from '../../datas/LandlordProperties'
import { Link } from 'react-router-dom'
import LandlordPropertiesDropdown from '../Dropdowns/LandlordPropertiesDropdown'

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
            {landlordProperties.map((property) => (
              <div key={property.id} className='manager-p'>
                <div className='apart-det'>
                  {/* <img className='p-img' src={property.image} alt='House' /> */}
                  <div className='apartment'>
                    <p className='p-icon'>{property.icon}</p>
                    <div className='apart-loc'>
                      <h3>{property.title}</h3>
                      <h1>{property.location}</h1>
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
                  <div>
                    <LandlordPropertiesDropdown />
                  </div>
                </div>

                <LandlordP>
              
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
    .status-active {
      margin: 10px 0;
    }
    .p-icon {
      display: none;
    }
  }
`
export default LandlordPropertyPage
