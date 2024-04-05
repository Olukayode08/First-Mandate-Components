import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ManagerPropertyUnit = ({ selectedProperty }) => {
  const navigate = useNavigate()
  return (
    <>
      <ManagerPU>
        <div className='table'>
          <table>
            <thead>
              <tr className='t-heading'>
                <th>Unit Name</th>
                <th>Unit Type</th>
                <th>Bedrooms</th>
                <th>Occupation Status</th>
                <th>Add Tenant</th>
              </tr>
            </thead>
            <tbody>
              {selectedProperty.units.map((table) => {
                return (
                  <tr key={table.uuid} className='t-list'>
                    <td>{table.unit_name}</td>
                    <td>{table.unit_type}</td>
                    <td>{table.no_of_bedrooms}</td>
                    <td>{table.occupation_status}</td>
                    <td
                      onClick={() => {
                        if (table.occupation_status !== 'occupied') {
                          navigate(`/manager/add-tenant/${table.uuid}/tenants`)
                        }
                      }}
                    >
                      <div className='margin-r'>
                        {table.occupation_status === 'occupied'
                          ? 'Occupied'
                          : 'Add Tenant'}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </ManagerPU>
    </>
  )
}
const ManagerPU = styled.section`
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
  .margin-r {
    margin: 5px 0;
    padding: 10px 5px;
    border-radius: 4px;
    background-color: #f6f6f8;
    cursor: pointer;
  }
`
export default ManagerPropertyUnit
