import React from 'react'
import styled from 'styled-components'
import { RiArrowRightSLine } from 'react-icons/ri'

const ManagerGenerateDocument = () => {
  return (
    <>
      <ManagerGD>
        <section>
          <main className='l-section'>
            <div className='l-home-page'>
              <h3>Generate Documents</h3>
              <div className='gen-doc'>
                <div className='g-doc'>
                  <p className='select-temp'>Select Template</p>
                  <section className='template'>
                    <h5>Template 1</h5>
                    <h5>Template 2</h5>
                    <h5>Template 3</h5>
                  </section>
                </div>
                <div className='doc-type'>
                  <p>What type of document do you want to generate?</p>
                  <div className='select-doc'>
                    <div className='type'>
                      <input type='radio' />
                      <p>Rent Receipt</p>
                    </div>
                    <div className='type'>
                      <input type='radio' />
                      <p>Tenancy Agreement</p>
                    </div>
                    <div className='type'>
                      <input type='radio' />
                      <p>Rental Agreement</p>
                    </div>
                  </div>
                </div>
                <div className='btn'>
                  <p>Next</p>
                  <RiArrowRightSLine size={20} />
                </div>
              </div>
            </div>
          </main>
        </section>
      </ManagerGD>
    </>
  )
}
const ManagerGD = styled.section`
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
    margin: 0 0 20px 0;
  }
  .select-temp {
    font-size: 18px;
    margin: 12px 0;
  }
  .gen-doc {
    width: 100%;
    background: #f6f6f8;
    padding: 20px;
    border-radius: 4px;
  }
  .g-doc {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 14px;
    border-radius: 4px;
  }
  .template {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  h5 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f6f8;
    height: 220px;
    width: 250px;
  }
  .doc-type {
    margin: 20px 0;
  }
  .select-doc {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 20px 0;
  }
  .type {
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #fff;
    padding: 10px 17px;
    border-radius: 4px;
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
  }
  @media screen and (max-width: 1000px) {
    .template,
    .g-doc {
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 300px) {
    h5 {
      width: 210px;
    }
  }
`
export default ManagerGenerateDocument
