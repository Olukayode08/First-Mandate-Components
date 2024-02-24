import React from 'react'
import styled from 'styled-components'
import { managerProperty } from '../../datas/ManagerPropertyPageOne'
import { FaRegPlusSquare } from 'react-icons/fa'

const ManagerPropertyPageOne = () => {
  return (
    <>
      <ManagerPPO>
        <section className='l-section'>
          <div className='l-home-page'>
            <div className='a-ppt'>
              <h3>Properties</h3>
              <div className='add-r'>
                <h4>Add New Reminder</h4>
                <FaRegPlusSquare size={20} />
              </div>
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
        </section>
      </ManagerPPO>
    </>
  )
}
const ManagerPPO = styled.section`
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
    width: 340px;
    height: 350px;
    margin: 20px 0;
    border-radius: 4px;
    cursor: pointer;
  }

  .option-h {
    margin: 15px 0;
  }
  .option-text {
    text-align: center;
    opacity: 0.8;
    line-height: 22px;
    margin: 5px 0;
  }

  @media screen and (max-width: 1270px) {
    .l-section {
      width: 75%;
    }
    .a-ppt {
      width: 80%;
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