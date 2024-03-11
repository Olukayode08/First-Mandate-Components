import React from 'react'
import styled from 'styled-components'
import { managerDocuments } from '../../datas/ManagerDocuments'
import { Link } from 'react-router-dom'

const ManagerDocuments = () => {
  return (
    <>
      <ManagerD>
        <section>
          <main className='l-section'>
            <div className='l-home-page'>
              <h3>Documents</h3>
              <div className='l-options'>
                {managerDocuments.map((option) => {
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
      </ManagerD>
    </>
  )
}
const ManagerD = styled.section`
  .l-section {
    display: flex;
    flex-direction: column;
    width: 100%;
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
    box-shadow: 0px 2px 8px 0px #0000001a;
    padding: 23px;
    border-radius: 4px;
  }
  .option-h {
    margin: 25px 0;
  }
  @media screen and (max-width: 1350px) {
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
  @media screen and (max-width: 500px) {
    .options {
      width: 280px;
    }
  }
`
export default ManagerDocuments
