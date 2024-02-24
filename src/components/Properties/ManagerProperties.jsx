import React from 'react'
import styled from 'styled-components'
import { managerProperties } from '../../datas/ManagerProperties'
import editIcon from '../../assets/edit-btn.png'
const ManagerProperties = () => {
  return (
    <>
      <ManagerP>
        <div className='table'>
          <table>
            <thead>
              <tr className='t-heading'>
                <th>Unit No.</th>
                <th>Size</th>
                <th>Bedrooms</th>
                <th>Bathrooms</th>
                <th>Tenant’s Name</th>
                <th>Status</th>
                <th>Rent amt. yearly</th>
              </tr>
            </thead>
            <tbody>
              {managerProperties.map((property) => {
                return (
                  <tr key={property.id} className='t-list'>
                    <td>{property.no}</td>
                    <td>{property.size}</td>
                    <td>{property.bed}</td>
                    <td>{property.bath}</td>
                    <td>{property.tenantName}</td>
                    <td>{property.status}</td>
                    <td>{property.amt}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className='mp-btns'>
            <img className='edit-img' src={editIcon} alt='Edit' />
            <span className='delete'>Delete</span>
          </div>
        </div>
      </ManagerP>
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
  }

  .t-heading {
    text-align: left;
    height: 60px;
    background: #f6f6f8;
  }

  .t-list {
    height: 50px;
  }
  .mp-btns {
    display: flex;
    align-items: flex-start;
    justify-content: right;
    justify-content: flex-end;
    width: 100%;
    padding: 20px;
  }
  .delete {
    background: #ffdfe2;
    padding: 8px 20px;
    border-radius: 4px;
  }
  .edit-img {
    padding: 8px 20px;
    border-radius: 4px;
    background: #fedf7e;
  }
`
export default ManagerProperties
