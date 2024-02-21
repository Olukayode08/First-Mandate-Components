import React, { useState } from 'react'
import styled from 'styled-components'

const countries = {
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
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  const handleCountryChange = (event) => {
    const country = event.target.value
    setSelectedCountry(country)
    setSelectedState('')
    setSelectedCity('')
    setStates(Object.keys(countries[country]))
    setCities([])
  }

  const handleStateChange = (event) => {
    const state = event.target.value
    setSelectedState(state)
    setSelectedCity('')
    setCities(countries[selectedCountry][state])
  }

  const handleCityChange = (event) => {
    const city = event.target.value
    setSelectedCity(city)
  }

  return (
    <>
      <Wrapper>
        <section className='select-section'>
          <div className='select'>
            <select
              id='country'
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value=''>Flat</option>
              {Object.keys(countries).map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <select
              id='state'
              value={selectedState}
              onChange={handleStateChange}
              disabled={!selectedCountry}
            >
              <option value=''>No. of bed</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <select
              id='city'
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedState}
            >
              <option value=''>No. of bath</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
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
    background: transparent;
    font-family: inherit;
    outline: none;
    color: #000;
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
