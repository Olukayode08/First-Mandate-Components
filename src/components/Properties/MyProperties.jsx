import React from 'react'
import styled from 'styled-components'
import { properties } from '../../datas/PropertiesData'

const MyProperties = () => {
  return (
    <>
      <Wrapper>
        <section>
          <h2>My Properties</h2>
          <div className='my-ppts'>
            {properties.map((property) => {
              return (
                <div key={property.id} className='ppt'>
                  <img src={property.image} alt={property.name} />
                  <div className='ppt-details'>
                    <p>Name:</p>
                    <span>{property.name}</span>
                  </div>
                  <div className='ppt-details'>
                    <p>Location:</p>
                    <span>{property.location}</span>
                  </div>
                  <div className='ppt-details'>
                    <p>Property Type:</p>
                    <span>{property.type}</span>
                  </div>
                  <div className='ppt-details'>
                    <p>Rent Status:</p>
                    <span>{property.status}</span>
                  </div>
                  <div className='ppt-details'>
                    <p>Availiability:</p>
                    <span>{property.availiability}</span>
                  </div>
                  <button>Check More Details</button>
                </div>
              )
            })}
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  section {
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin: 15px 10px;
    font-size: 18px;
    text-align: center;
  }
  .my-ppts {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .ppt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    background: #ffffff;
    width: 350px;
    padding: 15px;
    margin: 10px;
  }
  img {
    width: 320px;
    border-radius: 10px;
    margin: 10px 0;
  }
  .ppt-details {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  p {
    margin: 10px 0;
    font-weight: 100;
    margin-right: 5px;
    opacity: 0.7;
    flex-shrink: 0;
  }
  span {
    font-weight: 600;
    opacity: 1;
  }
  button {
    width: 320px;
    background-color: #000;
    color: #fff;
    padding: 13px;
    border: none;
    border-radius: 7px;
    font-size: 16px;
    cursor: pointer;
  }

  @media screen and (max-width: 400px) {
    section {
      align-items: center;
      justify-content: center;
    }
    h2 {
      margin: 15px 0;
    }
    .ppt {
      width: 280px;
      margin: 10px 0;
    }
    button,
    img {
      width: 250px;
    }
  }

`
export default MyProperties
