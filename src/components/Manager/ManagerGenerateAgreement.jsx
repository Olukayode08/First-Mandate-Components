import React from 'react'
import styled from 'styled-components'

const ManagerGenerateAgreement = () => {
  return (
    <>
      <ManagerD>
        <section>
          <main className='l-section'>
            <div className='l-home-page'>
              <h3>Generate Tenancy Agreement</h3>
              <div className='tenancy-agreement'>
                <div className='agreement-form'>
                  <h5>Document Details</h5>
                  <div className='input'>
                    <label>Tenant’s Name</label>
                    <input
                      type='text'
                      className='text-input'
                      placeholder='Enter tenant’s name'
                    />
                  </div>
                  <div className='input'>
                    <label>Landlord’s Name</label>
                    <input
                      type='text'
                      className='text-input'
                      placeholder='Enter landlord’s name'
                    />
                  </div>
                  <div className='input'>
                    <label>Date</label>
                    <input
                      type='date'
                      className='date-input'
                      placeholder='dd/mm/yyyy'
                    />
                  </div>
                  <button className='btn'>Generate Document</button>
                </div>
                <div className='agreement-text'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Dapibus metus vel
                    morbi pellentesque vel. Sit neque mauris nisi sit. Consequat
                    metus in eleifend luctus. Odio eget quisque non tellus quis
                    nam consectetur lorem.
                  </p>
                  <p>
                    Tortor tristique leo pellentesque ullamcorper cras. Interdum
                    dolor dictum enim dolor egestas sagittis. Placerat interdum
                    felis porta tellus. At vitae ultrices vitae sagittis ut hac
                    tristique. Enim mauris feugiat mollis sagittis scelerisque
                    id donec. Neque scelerisque ipsum euismod magna. Vulputate
                    dolor id ac gravida et auctor ipsum mauris. Commodo augue
                    sagittis vel est donec at faucibus diam non.
                  </p>
                  <p>
                    Vel ornare purus fermentum ullamcorper nisi. Tristique elit
                    a leo mi. Purus in cursus in lacus nullam risus lacus orci.
                    Sodales amet et pretium consectetur lectus amet lacus eget.
                    Neque amet condimentum integer est a maecenas morbi.
                    Tristique varius et porttitor arcu. Id nec vulputate mattis
                    eget sed ipsum. Diam vel aenean at in et. Aenean libero
                    tincidunt augue in eget dictum. Sed hendrerit enim lacinia
                    vitae bibendum sit sit. Sit at sollicitudin feugiat nulla
                    sit justo faucibus eget.
                  </p>
                </div>
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
  .tenancy-agreement {
    background: #f6f6f8;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    width: 100%;
  }
  h5 {
    font-size: 22px;
    margin: 0 0 13px 0;
  }
  .agreement-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 8px 0;
  }
  label {
    font-size: 16px;
    margin: 10px 0;
  }
  input {
    background: transparent;
    outline: none;
    padding: 0 15px;
    height: 48px;
    border: 1px solid #00000080;
    border-radius: 4px;
    font-size: 16px;
    font-family: inherit;
  }
  .text-input {
    width: 390px;
  }
  .date-input {
    width: 190px;
  }
  .btn {
    background-color: #000;
    color: #fff;
    width: 220px;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    margin: 15px 0;
  }
  .agreement-text {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 14px;
    border-radius: 4px;
    width: 100%;
  }
  p {
    font-size: 15px;
    line-height: 25px;
  }
  @media screen and (max-width: 1000px) {
    .tenancy-agreement {
      flex-direction: column-reverse;
    }
    .agreement-form {
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    .text-input {
      width: 85%;
    }
  }
`
export default ManagerGenerateAgreement
