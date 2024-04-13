import React from 'react'
import styled from 'styled-components'
import { useFirstMandateQuery } from '../../data-layer/utils'
import TenantEmptyApartment from './TenantEmptyApartment'
import iconHouse from '../../assets/Frame-2007.png'

const token = localStorage.getItem('token')

const TenantApartmentDetails = () => {
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/tenant/apartments',
    {
      enabled: !!token,
      onSuccess: (data) => {
        console.log(data)
      },
    }
  )

  if (pageLoading) {
    return (
      <div className='page-spinner'>
        <div className='l-spinner'></div>
      </div>
    )
  }
  return (
    <>
      <TenantAD>
        <section>
          <div className='a-section'>
            {data &&
            data.data &&
            data.data.data &&
            data.data.data.length > 0 ? (
              data.data.data.map((property) => (
                <div key={property.uuid} className='rent-sec'>
                  <h3 className='rent-det'>My Rent Details</h3>
                  <div className='apartment'>
                    <img
                      className='h-img'
                      src={iconHouse}
                      alt={property.property_title}
                    />
                    <div className='apart-loc'>
                      <h3>{property.property_title}</h3>
                      <h1>
                        Location: <span>{property.property_address}</span>
                      </h1>
                    </div>
                  </div>
                  <div className='apartment-details'>
                    <h3 className='rent-det'>Apartment Details</h3>
                    <div className='t-details'>
                      <div className='input'>
                        <h1>Lanlord's Name</h1>
                        <input
                          type='text'
                          disabled
                          placeholder={property.landlord_name}
                        />
                      </div>
                      <div className='input'>
                        <h1>Manager's Name</h1>
                        <input
                          type='text'
                          disabled
                          placeholder={property.manager_name}
                        />
                      </div>
                    </div>
                    <div className='t-details'>
                      <div className='input'>
                        <h1>Landlord's Phone</h1>
                        <input
                          type='text'
                          disabled
                          placeholder={property.landlord_phone}
                        />
                      </div>
                      <div className='input'>
                        <h1>Managers's Phone</h1>
                        <input
                          type='text'
                          disabled
                          placeholder={property.manager_phone}
                        />
                      </div>
                    </div>
                    <div className='t-details'>
                      <div className='input'>
                        <h1>Rent Amount per year</h1>
                        <input
                          type='text'
                          disabled
                          placeholder={property.rent_amount}
                        />
                      </div>
                      <div className='input'>
                        <h1>Current Rent Status</h1>
                        <input
                          type='text'
                          disabled
                          placeholder={property.rent_payment_status}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className='t-plan'>
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
                    </div> */}
                </div>
              ))
            ) : (
              <div>
                <TenantEmptyApartment />
              </div>
            )}
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
    width: 100%;
  }
  .rent-sec {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    margin: 20px 0;
  }
  .rent-det {
    font-size: 18px;
  }
  .apartment {
    display: flex;
    align-items: center;
    margin: 20px 0;
    gap: 30px;
  }
  span {
    font-weight: 100;
  }
  .input,
  .apart-loc {
    display: flex;
    flex-direction: column;
  }
  .apart-loc {
    gap: 17px;
  }
  p {
    font-weight: 200;
    text-align: left;
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
  @media screen and (max-width: 900px) {
    .apartment {
      flex-direction: column;
      align-items: flex-start;
    }
    .apart-loc {
      align-items: flex-start;
      justify-content: left;
    }
    .h-img {
      display: none;
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
    .rent-sec {
      padding: 15px;
    }
    .apartment {
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
    .rent-sec {
      padding: 10px;
    }
    button {
      padding: 10px 7px;
    }
  }
`
export default TenantApartmentDetails
