import React from 'react'
import styled from 'styled-components'

const ManagerUnitTypeDropdown = ({ addUnit, handleChangeAddUnit }) => {
  return (
    <>
      <MUnitTypeD>
        <div className='unit-type'>
          <div className='select'>
            <select
              name='unit_type'
              value={addUnit.unit_type}
              onChange={handleChangeAddUnit}
            >
              <option value=''>Select Type</option>
              <option value='Duplex'>Duplex</option>
              <option value='Flat'>Flat</option>
              <option value='Self Contain'>Self Contain</option>
              <option value='Bungalow'>Bungalow</option>
            </select>
          </div>
          <div className='select'>
            <select
              name='no_of_bedrooms'
              value={addUnit.no_of_bedrooms}
              onChange={handleChangeAddUnit}
              disabled={!addUnit.unit_type}
            >
              <option value=''>No. of bedrooms.</option>
              <option value='1'>1</option>
              <option value='2'>2 </option>
              <option value='3'>3 </option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
      </MUnitTypeD>
    </>
  )
}
const MUnitTypeD = styled.section`
  .unit-type {
    display: flex;
    gap: 30px;
    margin: 10px 0;
  }
  .select {
    width: 200px;
    height: 48px;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 4%;
  }
  select {
    width: 100%;
    height: 100%;
    border: transparent;
    background: transparent;
    outline: none;
    font-family: inherit;
    color: #000;
  }
  option {
    flex-shrink: 0;
  }

  @media screen and (max-width: 550px) {
    .unit-type {
      width: 97%;
      gap: 15px;
    }
    .select {
      width: 100%;
    }
  }
`
export default ManagerUnitTypeDropdown
