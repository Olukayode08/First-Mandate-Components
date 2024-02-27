import React from 'react'
import styled from 'styled-components'
import houseIcon from '../../assets/Frame-2007.png'

const TenantApartmentDetails = () => {
  return (
    <>
      <TenantAD>
        <section>
          <div className='a-section'>
            <div className='rent-sec'>
              <h3 className='rent-det'>My Rent Details</h3>
              <div className='apart-det'>
                <img src={houseIcon} alt='House' />
                <div className='apart-loc'>
                  <h3 className='h-name'>House of Elovia</h3>
                  <h3 className='location'>
                    Location:
                    <span> 32, Street 7, GRA, Osogbo, Osun State.</span>
                  </h3>
                </div>
              </div>
              <div className='apartment-details'>
                <h3>Apartment Details</h3>
                <div className='t-details'>
                  <div className='input'>
                    <h1>Lanlord's Name</h1>
                    <input type='text' disabled placeholder='Mr Adekola' />
                  </div>
                  <div className='input'>
                    <h1>Manager's Name</h1>
                    <input type='text' disabled placeholder='Mr. Adewumi' />
                  </div>
                </div>
                <div className='t-details'>
                  <div className='input'>
                    <h1>Lanlord's Phone</h1>
                    <input
                      type='text'
                      disabled
                      placeholder='+234 814 6573 112'
                    />
                  </div>
                  <div className='input'>
                    <h1>Managers's Phone</h1>
                    <input
                      type='text'
                      disabled
                      placeholder='+234 814 6573 112'
                    />
                  </div>
                </div>
                <div className='t-details'>
                  <div className='input'>
                    <h1>Rent Amount per year</h1>
                    <input type='text' disabled placeholder='#800.000.00k' />
                  </div>
                  <div className='input'>
                    <h1>Current Rent Status</h1>
                    <input type='text' disabled placeholder='Occupied' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TenantAD>
    </>
  )
}
const TenantAD = styled.section`
  position: relative;
  .a-section {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 78%;
    margin: 0 auto;
    padding: 20px;
  }
  .rent-sec {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .apart-det {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    width: 600px;
  }
  .input,
  .apart-loc {
    display: flex;
    flex-direction: column;
  }
  .location {
    margin: 10px 0;
  }
  span {
    opacity: 0.7;
  }
  .apartment-details {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 2px 16px 0px #00000026;
    width: 100%;
  }
  .t-details {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .input {
    padding: 10px 0;
    width: 47%;
    margin: 10px 0;
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    margin: 10px 0 0 0;
    padding: 0 20px;
    height: 30px;
    font-size: 16px;
    font-family: inherit;
  }
  @media screen and (max-width: 1270px) {
    .a-section {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    .a-section {
      width: 100%;
      left: 0;
    }
  }
  @media screen and (max-width: 900px) {
    .apart-det,
    .t-details {
      flex-direction: column;
    }
    .apart-det {
      width: 100%;
      justify-content: center;
    }
    .rent-det,
    .h-name,
    .location {
      text-align: center;
    }
    .h-name {
      margin: 10px 0;
    }
    .apartment-details {
      background-color: none;
      box-shadow: none;
      align-items: center;
      justify-content: center;
    }
    .input {
      width: 300px;
      align-items: center;
      justify-content: center;
    }
    input {
      text-align: center;
    }
  }
  @media screen and (max-width: 320px) {
    .input {
      width: 200px;
    }
  }
`
export default TenantApartmentDetails
