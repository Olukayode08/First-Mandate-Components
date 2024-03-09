import React, { useState } from 'react'
import styled from 'styled-components'

const UnitTypeDropdown = () => {
  const [selectedUnit, setSelectedUnit] = useState('')
  const [selectedBed, setSelectedBed] = useState('')

  const unitType = {
    Flat: ['One', 'Two', 'Three', 'Four', 'Five'],
    'Self Contain': ['One'],
    Bungalow: ['One', 'Two', 'Three', 'Four', 'Five'],
  }

  const handleUnitType = (e) => {
    const unit = e.target.value
    setSelectedUnit(unit)
    setSelectedBed('')
  }

  const handleBedCount = (e) => {
    const bed = e.target.value
    setSelectedBed(bed)
  }
  return (
    <>
      <UnitTypeD>
        <div className='unit-type'>
          <div className='select'>
            <select id='country' onChange={handleUnitType} value={selectedUnit}>
              <option value=''>Select</option>
              {Object.keys(unitType).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          <div className='select'>
            <select
              id='bed'
              onChange={handleBedCount}
              value={selectedBed}
              disabled={!selectedUnit}
            >
              <option value=''>No. of bedrooms.</option>
              {selectedUnit &&
                unitType[selectedUnit].map((bed) => (
                  <option key={bed} value={bed}>
                    {bed}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </UnitTypeD>
    </>
  )
}
const UnitTypeD = styled.section`
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
export default UnitTypeDropdown
