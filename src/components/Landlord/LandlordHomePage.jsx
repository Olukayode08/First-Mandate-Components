import React from 'react'
import styled from 'styled-components'
import { landlordOptions } from '../../datas/LandlordHomePage'
import { Link } from 'react-router-dom'

const LandlordHomePage = () => {
  return (
    <>
      <LandlordHP>
        <section>
          <main className='l-section'>
              <div className='l-name'>
                <h3>Hello, Peace</h3>
                <p>What would you like to do today?</p>
              </div>
              <div className='l-options'>
                {landlordOptions.map((option) => {
                  return (
                    <Link to={option.navigate} className='options' key={option.id}>
                      <img className='h-img' src={option.icon} alt='Icon' />
                      <h1 className='option-h'>{option.heading}</h1>
                      <p className='option-text'>{option.text}</p>
                    </Link>
                  )
                })}
              </div>
          </main>
        </section>
      </LandlordHP>
    </>
  )
}
const LandlordHP = styled.section`
  .l-section {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
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
  .l-options {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
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
  .option-text {
    text-align: center;
    opacity: 0.8;
    line-height: 22px;
    max-width: 320px;
  }
  p {
    line-height: 27px;
    text-align: center;
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
export default LandlordHomePage
