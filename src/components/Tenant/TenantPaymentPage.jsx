import React from 'react'
import styled from 'styled-components'
import { tenantsPayment } from '../../datas/TenantPaymentPage'
import { Link } from 'react-router-dom'

const TenantPaymentPage = () => {
  return (
    <>
      <TenantPP>
        <section>
          <main className='l-section'>
            <div className='l-home-page'>
              <h3>Payments</h3>
              <div className='l-options'>
                {tenantsPayment.map((option) => {
                  return (
                    <Link className='options' key={option.id}>
                      <img className='h-img' src={option.icon} alt='Icon' />
                      <h1 className='option-h'>{option.heading}</h1>
                    </Link>
                  )
                })}
              </div>
            </div>
          </main>
        </section>
      </TenantPP>
    </>
  )
}
const TenantPP = styled.section`
  position: relative;
  .l-section {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    width: 81%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .l-home-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  h3 {
    margin: 20px 0;
  }
  .l-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    width: 100%;
    gap: 10px;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: #f6f6f8;
    width: 300px;
    height: 200px;
    margin: 20px 0;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }
  .h-img {
    background-color: #ffffff;
    box-shadow: 0px 2px 8px 0px #0000001a;
    padding: 23px;
    border-radius: 4px;
  }
  .option-h {
    margin: 25px 0;
  }
  @media screen and (max-width: 1350px) {
    .l-section {
      width: 79%;
    }
    h3 {
      text-align: center;
      width: 100%;
    }
    .l-options {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
  @media screen and (max-width: 1250px) {
    .l-section {
      width: 90%;
      top: 0;
      left: 0;
      right: 0;
      margin: 20px auto;
      padding: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .options {
      width: 280px;
    }
  }
`
export default TenantPaymentPage
