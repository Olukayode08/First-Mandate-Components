import React from 'react'
import styled from 'styled-components'
import { landlordOptions } from '../../datas/LandlordHomePage'

const LandlordHomePage = () => {
  return (
    <>
      <Wrapper>
        <section className='l-section'>
          <div className='l-home-page'>
            <div className='l-name'>
              <h3>Hello, Peace</h3>
              <p>What would you like to do today?</p>
            </div>
            <div className='l-options'>
              {landlordOptions.map((option) => {
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
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  position: relative;
  .l-section {
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
    background-color: #ffffff;
    box-shadow: -2px 4px 16px 0px #eeeeee;
    width: 100%;
    height: 100px;
  }
  .l-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: -2px 4px 16px 0px #eeeeee;
    width: 320px;
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

  @media screen and (max-width: 1270px) {
    .l-section {
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
    .l-section {
      width: 100%;
      left: 0;
    }
    .l-name {
      align-items: center;
      justify-content: center;
    }
    .l-options {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 1000px) {
    .l-options {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .l-name {
      align-items: center;
      justify-content: center;
      background-color: none;
      box-shadow: none;
    }
  }
  @media screen and (max-width: 500px) {
    .options {
        width: 280px;
    }
  }
`
export default LandlordHomePage
