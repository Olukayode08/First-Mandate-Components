import React, { useState } from 'react'
import styled from 'styled-components'

const flats = {
  Bungalow: {
    One: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Two: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Three: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Four: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Five: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Six: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
  },
  Duplex: {
    One: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Two: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Three: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Four: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Five: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Six: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
  },
  Residential: {
    One: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Two: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Three: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Four: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Five: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    Six: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
  },
}

const PropertyTypeDropdown = () => {
  const [selectedFlat, setSelectedFlat] = useState('')
  const [selectedBed, setSelectedBed] = useState('')
  const [selectedBath, setSelectedBath] = useState('')
  const [bedrooms, setBedrooms] = useState([])
  const [bathrooms, setBathrooms] = useState([])

  const handleFlatChange = (event) => {
    const flat = event.target.value
    setSelectedFlat(flat)
    setSelectedBed('')
    setSelectedBath('')
    setBedrooms(Object.keys(flats[flat]))
    setBathrooms([])
  }

  const handleBedChange = (event) => {
    const bed = event.target.value
    setSelectedBed(bed)
    setSelectedBath('')
    setBathrooms(flats[selectedFlat][bed])
  }

  const handleBathChange = (event) => {
    const bath = event.target.value
    setSelectedBed(bath)
  }

  return (
    <>
      <Wrapper>
        <section className='select-section'>
          <div className='select'>
            <select
              id='flat'
              value={selectedFlat}
              onChange={handleFlatChange}
            >
              <option value=''>Flat</option>
              {Object.keys(flats).map((flat, index) => (
                <option key={index} value={flat}>
                  {flat}
                </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <select
              id='bath'
              value={selectedBed}
              onChange={handleBedChange}
              disabled={!selectedFlat}
            >
              <option value=''>No. of bed</option>
              {bedrooms.map((bedroom, index) => (
                <option key={index} value={bedroom}>
                  {bedroom}
                </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <select
              id='bath'
              value={selectedBath}
              onChange={handleBathChange}
              disabled={!selectedBed}
            >
              <option value=''>No. of bath</option>
              {bathrooms.map((bathroom, index) => (
                <option key={index} value={bathroom}>
                  {bathroom}
                </option>
              ))}
            </select>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .select-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin: 10px 0;
  }
  .select {
    width: 250px;
    height: 40px;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 5px;
  }
  select {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    border: transparent;
    outline: none;
  }

  @media screen and (max-width: 1250px) {
    .select-section {
      flex-direction: column;
      width: 100%;
    }
    .select {
      margin: 10px 0;
    }
  }
`
export default PropertyTypeDropdown
