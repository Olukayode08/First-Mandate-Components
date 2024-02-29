import React, { useContext } from 'react'
import styled from 'styled-components'
import { FirstMandate } from '../../context/Context'

const CongratsModal = () => {
  const { toggleModal } = useContext(FirstMandate)

  return (
    <>
      <Modal>
        <section>
          <div className='modal'>
            <div className='overlay' onClick={toggleModal}></div>
            <div className='modal-content'>
              <p className='modal-text'>
                Congratulations, your property has been uploaded successfully
              </p>
            </div>
          </div>
        </section>
      </Modal>
    </>
  )
}
const Modal = styled.section`
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
`
export default CongratsModal
