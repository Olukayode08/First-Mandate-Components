import React, { useState } from 'react'
import styled from 'styled-components'

const countries = {
  Nigeria: {
    Lagos: ['Badagry', 'Epe', 'Ikeja', 'Ikorodu', 'Lagos', 'Mushin', 'Shomolu'],
    Ogun: ['Abeokuta', 'Ijebu-Ode', 'Ilaro', 'Shagamu'],
    Ondo: ['Badagry', 'Epe', 'Ikeja', 'Ikorodu', 'Lagos', 'Mushin', 'Shomolu'],
    Osun: ['Abeokuta', 'Ijebu-Ode', 'Ilaro', 'Shagamu'],
    Oyo: ['Badagry', 'Epe', 'Ikeja', 'Ikorodu', 'Lagos', 'Mushin', 'Shomolu'],
  },
  USA: {
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    Texas: ['Houston', 'Dallas', 'Austin'],
  },
  Canada: {
    Ontario: ['Toronto', 'Ottawa', 'Hamilton'],
    Quebec: ['Montreal', 'Quebec City'],
  },
}

const CountryDropdown = () => {
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
      <CountryDD>
        <section className='select-section'>
          <div className='select'>
            <select
              id='country'
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value=''>Country</option>
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
              <option value=''>State</option>
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
              <option value=''>City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </section>
      </CountryDD>
    </>
  )
}
const CountryDD = styled.section`
  .select-section {
    display: flex;
    gap: 20px;
    margin: 10px 0;
  }
  .select {
    width: 200px;
    height: 48px;
    border: 1px solid black;
    padding: 0 15px;
    border-radius: 5px;
  }
  select {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    background: transparent;
    border: transparent;
    outline: none;
    color: #000;
    font-family: inherit;
  }
  option {
    flex-shrink: 0;
  }

  @media screen and (max-width: 700px) {
    .select {
      width: 100%;
    }
  }
`
export default CountryDropdown
