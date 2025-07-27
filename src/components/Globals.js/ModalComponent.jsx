import React from 'react'
import styled from 'styled-components'

const ModalComponent = ({
  textOne,
  textTwo,
  btnFunction,
  btnText = 'Login',
}) => {
  return (
    <>
      <ModalC>
        <section>
          <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>
              <p className='modal-text'>{textOne}</p>
              {textTwo && <p className='modal-text'>{textTwo}</p>}
              {btnFunction && (
                <button className='login-btn' onClick={btnFunction}>
                  {btnText}
                </button>
              )}
            </div>
          </div>
        </section>
      </ModalC>
    </>
  )
}
const ModalC = styled.section`
  /* TOAST NOTIFICATION */
  body.active-modal {
    overflow-y: hidden;
  }
  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 1000;
  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    border-radius: 10px;
    max-width: 514px;
    height: 200px;
    padding: 20px;
    min-width: 300px;
    z-index: 2000;
  }

  .modal-text {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #000;
  }

  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    background-color: #000;
    color: #f1f1f1;
    margin-top: 10px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }
`
export default ModalComponent
