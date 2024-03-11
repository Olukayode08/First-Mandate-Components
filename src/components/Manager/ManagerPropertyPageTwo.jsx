import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { managerProperties } from '../../datas/ManagerProperties'
import ManagerPropertiesDropdown from '../Dropdowns/ManagerPropertiesDropdown'

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
                  <div>
                    <ManagerPropertiesDropdown />
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
  .m-section {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
  }
  .a-ppt {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    background-color: #ffffff;
    margin: 20px 0;
    width: 100%;
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
  .a-img {
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
    .a-ppt {
      width: 80%;
      margin: 10px auto;
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
    .a-ppt {
      flex-direction: column;
    }
    .add-r {
      margin: 20px 0 10px 0;
    }
  }
  @media screen and (max-width: 700px) {
    .p-icon {
      display: none;
    }
  }
`
export default ManagerPropertyPageTwo
