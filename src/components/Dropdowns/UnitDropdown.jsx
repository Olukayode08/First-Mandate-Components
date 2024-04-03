import React from 'react'
import styled from 'styled-components'
const noOfBedrooms = ['1', '2', '3', '4', '5']
const unitType = ['Flat', 'Bungalow', 'Duplex', 'Self con',]

const UnitDropdown = ({
  handleChangeAddApartment,
  addApartment,
  handleChangeUnitName,
  handleChangeUnitType,
}) => {
  return (
    <>
      <UnitDD>
        <section className='select-section'>
          <div className='select'>
            <label>Unit Name</label>
            <input
              type='text'
              id='unit_name'
              name='unit_name'
              value={addApartment.unit_name}
              placeholder='Unit Name'
              //   value={addApartment.unit_name}
              onChange={handleChangeUnitName}
            />
          </div>
          <div className='select'>
            <label>Unit Type</label>
            <div className='user-select'>
              <select
                id='unit_type'
                name='unit_type'
                // value={addApartment.unit_type}
                onChange={handleChangeUnitType}
                // disabled={!addApartment.unit_name}
              >
                <option value=''>Select</option>
                {unitType.map((installment) => (
                  <option key={installment} value={installment}>
                    {installment}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='select'>
            <label>No. of Bedrooms</label>
            <div className='user-select'>
              <select
                id='no_of_bedrooms'
                name='no_of_bedrooms'
                // value={addApartment.no_of_bedrooms}
                onChange={handleChangeAddApartment}
                // disabled={!addApartment.unit_type}
              >
                <option value=''>Select</option>
                {noOfBedrooms.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
      </UnitDD>
    </>
  )
}
const UnitDD = styled.section`
  .select-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 10px 0;
  }
  .select {
    display: flex;
    flex-direction: column;
  }
  .user-select {
    width: 200px;
    height: 48px;
    border: 1px solid black;
    padding: 0 10px;
    border-radius: 4px;
  }
  select {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    outline: none;
    background: transparent;
    border: transparent;
    color: #000;
    font-family: inherit;
  }
  input {
    width: 200px;
    height: 48px;
  }
  option {
    flex-shrink: 0;
  }
`
export default UnitDropdown
