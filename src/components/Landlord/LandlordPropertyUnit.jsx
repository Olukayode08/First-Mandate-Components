import React from 'react'
import styled from 'styled-components'

const LandlordPropertyUnit = ({ property }) => {

  return (
    <>
      <LandlordPU>
        <div className='table'>
          <table>
            <thead>
              <tr className='t-heading'>
                <th>Unit Name</th>
                <th>Unit Type</th>
                <th>Bedrooms</th>
                <th>Occupation Status</th>
              </tr>
            </thead>
            <tbody>
              {property.units.map((table) => {
                return (
                  <tr key={table.uuid} className='t-list'>
                    <td>{table.unit_name}</td>
                    <td>{table.unit_type}</td>
                    <td>{table.no_of_bedrooms}</td>
                    <td>{table.occupation_status}</td>
                    {/* <td>{table.uuid}</td> */}
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