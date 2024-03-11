import React from 'react'
import styled from 'styled-components'

const TenantApartmentDetailsTwo = () => {
  return (
    <>
      <TenantADT>
        <section>
          <div className='a-section'>
            <h2>My Apartment</h2>
            <div className='my-apart'>
              <div className='apart'>
                <img
                  src='https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?w=2000&t=st=1708296592~exp=1708297192~hmac=75445606fddce8a3dac44471b1b30399a08057fbefef9a1f0ba47f44d59f9aa4'
                  alt='House'
                />
                <div className='apart-details'>
                  <p>Name:</p>
                  <span>Peace House</span>
                </div>
                <div className='apart-details'>
                  <p>Location:</p>
                  <span>17, Street 7, GRA, Osogbo, Osun State.</span>
                </div>
                <div className='apart-details'>
                  <p>Rent Start Date:</p>
                  <span>dd/mm/yyyy</span>
                </div>
                <div className='apart-details'>
                  <p>Rent End Date:</p>
                  <span>dd/mm/yyyy</span>
                </div>
                <div className='apart-details'>
                  <p>Payment Status:</p>
                  <span className='a-status'>Not Paid</span>
                </div>
                <div className='apart-details'>
                  <p>Rent Payment Due Date:</p>
                  <span>dd/mm/yyyy</span>
                </div>
                <button>Check More Details</button>
              </div>
            </div>
          </div>
        </section>
      </TenantADT>
    </>
  )
}
const TenantADT = styled.section`
  .a-section {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
  }
  h2 {
    margin: 15px 10px;
    font-size: 18px;
    text-align: left;
  }
  .my-apart {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: left;
  }
  .apart {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 350px;
    padding: 15px;
    margin: 10px;
  }
  img {
    width: 320px;
    height: 200px;
    border-radius: 10px;
    margin: 10px 0;
  }
  .apart-details {
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
  .a-status {
    background-color: red;
    color: #ffffff;
    padding: 10px;
    border-radius: 4px;
  }
  button {
    width: 320px;
    background-color: #000;
    color: #fff;
    padding: 13px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  @media screen and (max-width: 400px) {
    h2 {
      margin: 15px 0;
    }
    .apart {
      width: 280px;
      margin: 10px 0;
    }
    button,
    img {
      width: 250px;
    }
  }
`
export default TenantApartmentDetailsTwo
