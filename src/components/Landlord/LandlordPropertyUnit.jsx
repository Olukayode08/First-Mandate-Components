import React from 'react'
import styled from 'styled-components'

const LandlordPropertyUnit = ({property}) => {
  return (
    <>
      <LandlordPU>
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
      </LandlordPU>
    </>
  )
}
const LandlordPU = styled.section`
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
export default LandlordPropertyUnit