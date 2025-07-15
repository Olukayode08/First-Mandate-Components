import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useFirstMandateMutation } from '../../data-layer/utils'
// import { useUpdateToken } from '../../hooks/useUpdateToken'

const ActivateEmailModal = () => {
  const { emailTokenId } = useParams()
  const navigate = useNavigate()
  // const updateToken = useUpdateToken()

  const { mutateAsync: postEmail } = useFirstMandateMutation('/activate', {
    onSuccess: (data) => {
      //   updateToken(data)
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    },
    onError: (error) => {},
  })

  useEffect(() => {
    const handleEmail = async () => {
      try {
        await postEmail({ emailTokenId })
      } catch (error) {}
    }
    // Call handleEmail when the component mounts
    handleEmail()
  }, [emailTokenId, navigate, postEmail])

  return (
    <>
      <ActivateEM>
        <section>
          <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>
              <p className='modal-text'>
                Congrat!!! Your E-mail has been activated successfully. You can
                now proceed to login
              </p>
              <button className='login-btn' onClick={() => navigate('/login')}>Login</button>
            </div>
          </div>
        </section>
      </ActivateEM>
    </>
  )
}
const ActivateEM = styled.section`
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
    top: 50%;
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
  .modal-text {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #000;
  }
`
export default ActivateEmailModal
