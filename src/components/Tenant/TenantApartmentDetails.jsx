import React from 'react'
import styled from 'styled-components'
import { RiRadioButtonLine } from 'react-icons/ri'

const TenantApartmentDetails = () => {
  return (
    <>
      <TenantAD>
        <section>
          <div className='a-section'>
            <div className='rent-sec'>
              <h3 className='rent-det'>My Rent Details</h3>
              <div className='apart-det'>
                <div className='apartment'>
                  <p className='p-icon'>
                    <RiRadioButtonLine />
                  </p>
                  <div className='apart-loc'>
                    <h3>House of Elovia</h3>
                    <h1>Ikeja Road, Lagos State</h1>
                    <div className='status-active'>
                      <p>
                        Status:
                        <span> Active</span>
                      </p>

                      <p>
                        Unit:
                        <span> 4 Units</span>
                      </p>
                      <p>
                        Building Type:
                        <span> Flat</span>
                      </p>
                    </div>
                  </div>
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
  .a-section {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 4px;
    padding: 20px;
  }
  .rent-sec {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .rent-det {
    font-size: 18px;
  }
  .apart-det {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0;
    width: 100%;
  }
  .apartment {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .p-icon {
    font-size: 40px;
  }
  .input,
  .apart-loc {
    display: flex;
    flex-direction: column;
  }
  .apart-loc {
    gap: 17px;
  }
  .status-active {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  p {
    font-weight: 200;
    text-align: left;
  }
  span {
    font-weight: 800;
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
    /* flex-shrink: 0; */
  }
  @media screen and (max-width: 900px) {
    .apart-det {
      flex-direction: column;
      align-items: flex-start;
    }
    .status-active,
    .apart-loc {
      align-items: flex-start;
      justify-content: left;
    }
    .status-active {
      margin: 10px 0;
    }
    h1,
    h3 {
      font-size: 16px;
    }
    .plan-text,
    .rent-det {
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
    .p-icon {
      display: none;
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
  @media screen and (max-width: 320px) {
    button {
      padding: 10px 7px;
    }
  }
`
export default TenantApartmentDetails
