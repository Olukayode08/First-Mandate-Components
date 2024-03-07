import React from 'react'
import styled from 'styled-components'
import { managerProperty } from '../../datas/ManagerPropertyPageOne'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ManagerPropertyPageOne = () => {
  return (
    <>
      <ManagerPPO>
        <section>
          <main className='l-section'>
            <div className='l-home-page'>
              <div className='a-ppt'>
                <h3>Properties</h3>
               <Link className='add-r'>
                  <h4>Add New Property</h4>
                  <FaRegPlusSquare size={20} />
                </Link>
              </div>
              <div className='l-options'>
                {managerProperty.map((property) => {
                  return (
                    <div className='options' key={property.id}>
                      <img src={property.icon} alt='Icon' />
                      <h1 className='option-h'>{property.heading}</h1>
                      <p className='option-text'>{property.street}</p>
                      <p className='option-text'>{property.type}</p>
                      <p className='option-text'>{property.unit}</p>
                      <p className='option-text'>{property.status}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
        </section>
      </ManagerPPO>
    </>
  )
}
const ManagerPPO = styled.section`
  position: relative;
  .l-section {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    width: 81%;
    background-color: #fff;
    margin: 0 auto;
    padding: 20px;
  }
  .l-home-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .a-ppt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    margin: 20px 0;
  }
  .add-r {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 10px;
    width: 250px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
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
    padding: 15px;
    box-shadow: -2px 4px 16px 0px #eeeeee;
    width: 330px;
    height: 370px;
    margin: 20px 0;
    border-radius: 4px;
    cursor: pointer;
  }
  img {
    width: 112px;
    height: 100px;
  }
  .option-h {
    margin: 20px 0;
  }
  .option-text {
    text-align: center;
    opacity: 0.8;
    line-height: 22px;
    margin: 5px 0;
  }
  @media screen and (max-width: 1350px) {
    .l-section {
      width: 79%;
    }
    .a-ppt {
      width: 75%;
      margin: 0 auto;
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
      width: 100%;
      left: 0;
      top: 0;
      padding: 10px;
    }
    .l-name {
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1000px) {
    .l-name {
      background-color: none;
      box-shadow: none;
    }
    .a-ppt {
      flex-direction: column;
    }
    .add-r {
      margin: 20px 0 10px 0;
    }
  }
  @media screen and (max-width: 500px) {
    .options {
      width: 280px;
    }
  }
`
export default ManagerPropertyPageOne
