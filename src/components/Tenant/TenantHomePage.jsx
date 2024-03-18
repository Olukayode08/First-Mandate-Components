import React from 'react'
import styled from 'styled-components'
import { tenantOptions } from '../../datas/TenantHomePage'
import { Link } from 'react-router-dom'

const TenantHomePage = () => {
  return (
    <>
      <TenantHP>
        <section>
          <main className='t-section'>
              <div className='l-name'>
                <h3>Hello, Peace</h3>
                <p>What would you like to do today?</p>
              </div>
              <div className='l-options'>
                {tenantOptions.map((option) => {
                  return (
                    <Link
                      to={option.navigate}
                      className='options'
                      key={option.id}
                    >
                      <img className='h-img' src={option.icon} alt='Icon' />
                      <h1 className='option-h'>{option.heading}</h1>
                      <p className='option-text'>{option.text}</p>
                    </Link>
                  )
                })}
              </div>
          </main>
        </section>
      </TenantHP>
    </>
  )
}
const TenantHP = styled.section`
  .t-section {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
  }
  .l-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    background: #f6f6f8;
    width: 100%;
    height: 100px;
    border-radius: 4px;
  }
  h3 {
    font-size: 18px;
  }
  .l-options {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: #f6f6f8;
    flex: 1 1 350px;
    /* width: 350px; */
    height: 300px;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    color: #000;
  }
  .h-img {
    background-color: #f6f6f8;
    box-shadow: 0px 2px 8px 0px #0000001a;
    padding: 23px;
    border-radius: 4px;
  }
  h1 {
    font-size: 16px;
  }
  .option-h {
    margin: 25px 0;
  }
  .option-text {
    text-align: center;
    opacity: 0.8;
    line-height: 22px;
  }
  p {
    text-align: center;
    line-height: 27px;
  }
  @media screen and (max-width: 550px) {
    .l-options {
      align-items: center;
      justify-content: center;
    }
    .options {
      flex: 1 1 280px;
      /* width: 280px; */
    }
  }
`
export default TenantHomePage
