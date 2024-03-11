import React from 'react'
import styled from 'styled-components'
import { tenantPaymentReview } from '../../datas/TenantPaymentReview'
import creditCard from '../../assets/credit-card-pos.png'
import paypal from '../../assets/paypal.png'
const TenantPaymentReview = () => {
  return (
    <>
      <TenantPR>
        <section>
          <main className='l-notify'>
            <h1>Payment Review</h1>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Payment For</th>
                    <th>Payment Method</th>
                    <th className='t-amt'>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {tenantPaymentReview.map((review) => {
                    return (
                      <tr key={review.id} className='t-payment'>
                        <td>{review.rent}</td>
                        <td>{review.method}</td>
                        <td className='t-amt'>{review.amount}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <h1>Payment Info</h1>
            <div className='payments'>
              <label>Payment Method</label>
              <div className='cards'>
                <div className='card'>
                  <img src={creditCard} alt='CreditCard' />
                  <p>Credit Card</p>
                  <input type='radio' className='p-input' />
                </div>
                <div className='card'>
                  <img src={paypal} alt='Paypal' />
                  <p>Paypal</p>
                  <input type='radio' className='p-input' />
                </div>
              </div>
              <label>Name on Card</label>
              <p className='t-name'>Peace</p>
              <label>Card Number</label>
              <p className='t-name'>**** **** **** 6789</p>
              <button>Pay Now</button>
            </div>
          </main>
        </section>
      </TenantPR>
    </>
  )
}
const TenantPR = styled.section`
  .l-notify {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 4px;
    padding: 20px;
  }
  h1 {
    margin: 20px 0;
    font-size: 20px;
  }
  .table {
    overflow-x: scroll;
    width: 100%;
  }
  table {
    border-collapse: separate;
    border-spacing: 0 20px;
    width: 100%;
  }
  .t-heading {
    text-align: left;
    height: 60px;
    background: #f6f6f8;
  }
  th,
  td {
    white-space: nowrap;
    padding: 0 20px;
    text-align: left;
  }
  .t-amt {
    text-align: right;
  }

  .t-payment {
    height: 50px;
  }
  .payments {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  .cards,
  label {
    margin: 10px 0;
  }
  .cards {
    width: 500px;
  }
  .card,
  .cards {
    display: flex;
    gap: 30px;
  }
  .card {
    width: 220px;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 27px;
  }
  .p-input {
    width: 18px;
    height: 18px;
  }
  .t-name {
    margin-bottom: 15px;
    font-size: 18px;
  }
  button {
    background-color: #000;
    color: #fff;
    width: 260px;
    padding: 12px 0;
    border: none;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px 0;
  }
  @media screen and (max-width: 550px) {
    .cards {
      flex-direction: column;
    }
  }
`
export default TenantPaymentReview
