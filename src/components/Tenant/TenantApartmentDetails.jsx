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
                <h3 className='rent-det'>Apartment Details</h3>
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
              <div className='t-plan'>
                <p className='plan-text'>
                  What do you plan to do after your rent has ended?
                </p>
                <p className='plan-text'>Please pick an option below.</p>
                <div className='btns'>
                  <div className='btn-plan'>
                    <button>Renew Terms</button>
                    <button>End Terms</button>
                  </div>
                  <div className='btn-plan'>
                    <button className='request-r'>
                      Request Term Renegotiation
                    </button>
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
    width: 78%;
    padding: 20px 10px;
  }
  .rent-sec {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .rent-det{
    font-size: 18px;
  }
  .apart-det {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
    width: 600px;
  }
  .input,
  .apart-loc {
    display: flex;
    flex-direction: column;
  }
  .apart-loc {
    gap: 10px;
  }
  span {
    opacity: 0.7;
  }
  .apartment-details {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 0;
    padding: 20px;
    width: 100%;
    background: #f6f6f8;
  }
  .t-details {
    display: flex;
    gap: 30px;
    margin: 10px 0;
    width: 100%;
  }
  .input {
    padding: 10px 0;
    width: 90%;
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
  /* Tenant Plan */
  .t-plan {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    width: 100%;
  }
  .plan-text {
    font-size: 16px;
    line-height: 28px;
  }
  .btns {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .btn-plan {
    display: flex;
    gap: 20px;
    margin: 10px 0;
  }
  button {
    background: transparent;
    border: 1px solid black;
    padding: 10px;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    border-radius: 4px;
    font-family: inherit;
  }
  @media screen and (max-width: 1310px) {
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
    .apart-det {
      width: 95%;
      justify-content: left;
      align-items: center;
    }
    h1,
    h3 {
      font-size: 16px;
    }
    .plan-text,
    .rent-det,
    .h-name,
    .location {
      text-align: left;
    }
  }
  @media screen and (max-width: 700px) {
    .t-details {
      flex-direction: column;
      gap: 0;
      margin: 0;
    }
    .input {
      width: 300px;
    }
    .btns {
      flex-direction: column;
      gap: 0;
      flex-wrap: nowrap;
    }
  }
  @media screen and (max-width: 450px) {
    .apart-det {
      gap: 15px;
    }
    .input {
      width: 95%;
    }
    .btns,
    .btn-plan {
      width: 100%;
      display: flex;
      margin: 10px auto;
      align-items: center;
      justify-content: center;
    }
    button {
      width: 70%;
    }
    .request-r {
      width: 100%;
    }
  }
`
export default TenantApartmentDetails
