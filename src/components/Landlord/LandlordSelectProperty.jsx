import React from 'react'
import styled from 'styled-components'
import { ImSearch } from 'react-icons/im'
import { IoMdCheckmark } from 'react-icons/io'
import { selectProperty } from '../../datas/LandlordSelectProperty'

const LandlordSelectProperty = () => {
  return (
    <>
      <LandlordSP>
        <section>
          <main className='s-property'>
            <h3>Add New Tenant</h3>
            <div className='search-p'>
              <p className='search-text'>
                Please select which property or unit you would love to add a
                tenant to
              </p>
              <div className='input'>
                <ImSearch />
                <input type='text' placeholder='Search property' />
              </div>
            </div>
            {selectProperty.map((property) => {
              return (
                <div key={property.id} className='units'>
                  <div className='unit'>
                    <p>{property.houseTitle}</p>
                    <div className='house'>
                      <div className='unit-a'>
                        <IoMdCheckmark />
                        <p>{property.unitOne}</p>
                      </div>
                      <div className='unit-a'>
                        <IoMdCheckmark />
                        <p>{property.unitTwo}</p>
                      </div>
                      <div className='unit-a'>
                        <IoMdCheckmark />
                        <p>{property.unitThree}</p>
                      </div>
                      <div className='unit-a'>
                        <IoMdCheckmark />
                        <p>{property.unitFour}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </main>
        </section>
      </LandlordSP>
    </>
  )
}
const LandlordSP = styled.section`
  section {
    position: relative;
  }
  .s-property {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    right: 0;
    width: 78%;
    margin: 20px 0;
    padding: 20px;
  }
  h3 {
    width: 100%;
  }
  .search-p {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    gap: 20px;
    margin: 20px 0;
  }
  .input {
    width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    background: #f6f6f8;
    padding: 0 15px;
  }
  input {
    outline: none;
    background: transparent;
    height: 100%;
    width: 92%;
    border: none;
    font-family: inherit;
    font-size: 16px;
    padding: 0 10px;
  }
  .unit,
  .units {
    display: flex;
    flex-direction: column;
  }
  .units {
    width: 100%;
  }
  .unit {
    padding: 20px;
    background: #f6f6f8;
    margin: 15px 0;
  }
  .house {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 25px 0 10px 0;
  }
  .unit-a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    gap: 10px;
    padding: 10px 20px;
    flex-shrink: 0;
    border-radius: 4px;
  }
  @media screen and (max-width: 1310px) {
    .s-property {
      width: 75%;
    }
  }
  @media screen and (max-width: 1200px) {
    .s-property {
      width: 100%;
      left: 0;
    }
  }
  @media screen and (max-width: 900px) {
    .search-p {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .search-text,
    h3 {
      text-align: center;
    }
  }
  @media screen and (max-width: 330px) {
    .input {
      width: 270px;
    }
  }
`
export default LandlordSelectProperty