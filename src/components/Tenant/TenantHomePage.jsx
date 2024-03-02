import React from 'react'
import styled from 'styled-components'
import { tenantOptions } from '../../datas/TenantHomePage'

const TenantHomePage = () => {
  return (
    <>
      <TenantHP>
        <section>
          <main className='t-section'>
            <div className='l-home-page'>
              <div className='l-name'>
                <h3>Hello, Peace</h3>
                <p>What would you like to do today?</p>
              </div>
              <div className='l-options'>
                {tenantOptions.map((option) => {
                  return (
                    <div className='options' key={option.id}>
                      <img className='h-img' src={option.icon} alt='Icon' />
                      <h1 className='option-h'>{option.heading}</h1>
                      <p className='option-text'>{option.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
        </section>
      </TenantHP>
    </>
  )
}
const TenantHP = styled.section`
  position: relative;
  .t-section {
    position: absolute;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 78%;
    margin: 0 auto;
    padding: 20px;
  }
  .l-home-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  }
  .l-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    gap: 10px;
    width: 100%;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: #f6f6f8;
    width: 310px;
    height: 300px;
    margin: 20px 0;
    border-radius: 4px;
    cursor: pointer;
  }
  .h-img {
    background-color: #f6f6f8;
    box-shadow: 0px 2px 8px 0px #0000001a;
    padding: 23px;
    border-radius: 4px;
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
  @media screen and (max-width: 1270px) {
    .t-section {
      width: 75%;
    }
    .l-name {
      align-items: center;
      justify-content: center;
      background-color: none;
      box-shadow: none;
    }
    .l-options {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .t-section {
      width: 100%;
      left: 0;
    }
  }
  @media screen and (max-width: 500px) {
    .options {
      width: 280px;
    }
  }
`
export default TenantHomePage
