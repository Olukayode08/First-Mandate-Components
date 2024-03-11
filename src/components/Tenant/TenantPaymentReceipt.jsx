import React from 'react'
import styled from 'styled-components'

const TenantPaymentReceipt = () => {
  return (
    <>
      <TPReceipt>
        <section>
          <div className='p-receipt'>
            <h1 className='r-heading'>Receipt</h1>
            <p className='r-text'>
              Thank you for using 1st Mandate, This is your receipt for your
              payment.
            </p>
            <div className='receipt-content'>
              <h3>PAID BY</h3>
              <div className='t-details'>
                <h4>Name:</h4>
                <h4>Adekola Peace</h4>
              </div>
              <div className='t-details'>
                <h4>Email:</h4>
                <h4>pea*******2@gmail.com</h4>
              </div>
            </div>
            <div className='receipt-content'>
              <h3>TRANSACTION DETAILS</h3>
              <div className='t-details'>
                <h4>Description:</h4>
                <h4>March Rent Payment</h4>
              </div>
              <div className='t-details'>
                <h4>Ref Id:</h4>
                <h4>566523456789098765432123</h4>
              </div>
              <div className='t-details'>
                <h4>Date:</h4>
                <h4>02/03/2024</h4>
              </div>
              <div className='t-details'>
                <h4>Status:</h4>
                <h4>Successful</h4>
              </div>
              <div className='t-details'>
                <h4>Amount:</h4>
                <h4>#300,000.00k</h4>
              </div>
            </div>
            <div className='receipt-content'>
              <h3>PAID TO</h3>
              <div className='t-details'>
                <h4>Name:</h4>
                <h4>Mr. Kelly</h4>
              </div>
              <div className='t-details'>
                <h4>Email:</h4>
                <h4>hi.k*******i@gmail.com</h4>
              </div>
            </div>
            <button>Download Receipt</button>
          </div>
        </section>
      </TPReceipt>
    </>
  )
}
const TPReceipt = styled.section`
  .p-receipt {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;
    background-color: #ffffff;
    width: 100%;
  }
  h1 {
    font-size: 20px;
  }
  .r-text {
    margin: 20px 0 7px 0;
  }
  .receipt-content {
    background-color: #f6f6f8;
    width: 600px;
    padding: 20px;
    border-radius: 4px;
    margin: 13px 0;
  }
  .t-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3,
  h4,
  p {
    text-align: left;
    font-size: 16px;
    font-weight: 100;
    line-height: 25px;
  }
  h4 {
    margin: 12px 0;
  }
  h3 {
    margin-top: 12px;
  }
  button {
    background-color: #000;
    color: #ffffff;
    padding: 12px 0;
    border: transparent;
    border-radius: 5px;
    width: 250px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    margin: 10px 0;
  }
  @media screen and (max-width: 650px) {
    .receipt-content {
      width: 90%;
    }
  }
  @media screen and (max-width: 550px) {
    .receipt-content {
      width: 100%;
    }
  }
  @media screen and (max-width: 370px) {
    h4,
    h3,
    p {
      font-size: 12px;
    }
    button {
      width: 220px;
    }
  }
`
export default TenantPaymentReceipt
