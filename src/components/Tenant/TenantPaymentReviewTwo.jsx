import React from 'react'
import styled from 'styled-components'
import icon from '../../assets/credit-card-pos (1).png'

const TenantPaymentReviewTwo = () => {
  return (
    <>
      <TenantPRT>
        <section>
          <main>
            <div className='payment-r'>
              <h3>Payment Review</h3>
              <div className='p-means'>
                <img src={icon} alt='1st Mandate' />
                <p>Flutterwave</p>
                <input type='radio' className='r-btn' />
              </div>
              <div className='receipt-content'>
                <div className='t-details'>
                  <h4>Name:</h4>
                  <h4>Adekola Peace</h4>
                </div>
                <div className='t-details'>
                  <h4>Description:</h4>
                  <h4>March Rent Payment</h4>
                </div>
                <div className='t-details'>
                  <h4>Amount:</h4>
                  <h4>#300,000.00k</h4>
                </div>
              </div>

              <button>Pay Now</button>
            </div>
          </main>
        </section>
      </TenantPRT>
    </>
  )
}

const TenantPRT = styled.section`
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .payment-r {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 500px;
    padding: 20px;
    border-radius: 4px;
  }
  .p-means {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 200px;
    margin: 20px 0;
  }
  .r-btn {
    height: 15px;
    width: 15px;
  }
  .receipt-content {
    width: 450px;
    margin: 0 auto;
  }
  .t-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
  }
  button {
    background-color: #000;
    padding: 12px 0;
    width: 450px;
    color: #ffffff;
    border: none;
    font-size: 14px;
    border-radius: 4px;
    margin: 10px 0;
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    .payment-r {
      width: 95%;
      margin: 0 auto;
    }
    .receipt-content,
    button {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 380px) {
    h4 {
      font-size: 12px;
    }
  }
`
export default TenantPaymentReviewTwo
