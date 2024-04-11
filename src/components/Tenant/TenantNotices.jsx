import React, { useState } from 'react'
import styled from 'styled-components'
import {
  useFirstMandateMutation,
  useFirstMandateQuery,
} from '../../data-layer/utils'
import TenantEmptyNotice from './TenantEmptyNotice'
const token = localStorage.getItem('token')

const AcknowledgeModal = ({
  modal,
  notice,
  cancelModal,
  handleChangeNotice,
  handleNotice,
  isLoading,
  error,
  isSuccess,
  notification,
}) => {
  return (
    <>
      {modal && (
        <AcknowledgeM>
          <section>
            <div className='modal'>
              <div className='overlay'></div>
              <div className='modal-content'>
                <p className='modal-text'>Send your feedback.</p>
                {error && <p className='error'>{error?.message}</p>}
                {isSuccess && (
                  <p className='error success'>
                    Notice acknowledgement sent successfully'
                  </p>
                )}
                <div className='select'>
                  <select id='uuid' name='uuid' disabled>
                    <option value={notification.uuid}>
                      {notification.notice_date}
                    </option>
                  </select>
                </div>
                <div className='select'>
                  <select
                    id='acknowledged_status'
                    name='acknowledged_status'
                    value={notice.acknowledged_status}
                    onChange={handleChangeNotice}
                  >
                    <option value=''>Select</option>
                    <option value='Accept'>Accept</option>
                    <option value='Decline'>Decline</option>
                  </select>
                </div>
                <div className='input'>
                  <label>Remarks</label>
                  <input
                    type='text'
                    name='remarks'
                    value={notice.remarks}
                    onChange={handleChangeNotice}
                    placeholder='Remarks'
                    autoComplete='off'
                  />
                </div>
                <div className='btn-container'>
                  <button
                    disabled={isLoading}
                    onClick={handleNotice}
                    type='submit'
                    className={
                      isLoading ? 'btn-disabled btn-delete ' : 'btn btn-delete'
                    }
                  >
                    {isLoading ? (
                      <div className='login-spinner'>
                        <div className='spinner'></div>
                        <p>Send</p>
                      </div>
                    ) : (
                      <p className='login-btn'>Send</p>
                    )}
                  </button>
                  <button className='btn-cancel' onClick={cancelModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </section>
        </AcknowledgeM>
      )}
    </>
  )
}

const TenantNotices = () => {
  const [modal, setModal] = useState(false)
  const [selectedNoticeUuid, setSelectedNoticeUuid] = useState(null)

  const [notice, setNotice] = useState({
    acknowledged_status: '',
    uuid: selectedNoticeUuid,
    remarks: '',
  })
  const handleChangeNotice = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value })
  }

  const {
    mutateAsync: postAcknowledge,
    isLoading,
    error,
    isSuccess,
  } = useFirstMandateMutation(`/tenant/notices/acknowledge`, {
    onSuccess: (data) => {
      setTimeout(() => {
        setModal(false)
      }, 3000)
    },
  })

  const handleNotice = async (e) => {
    const payload = {
      acknowledged_status: notice.acknowledged_status,
      remarks: notice.remarks,
      uuid: selectedNoticeUuid,
    }
    try {
      await postAcknowledge(payload)
    } catch (e) {}
  }

  const cancelModal = () => {
    setModal(false)
  }
  const showModal = (notificationUuid) => {
    setSelectedNoticeUuid(notificationUuid)
    setModal(true)
  }

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    '/tenant/all-notices',
    {
      enabled: !!token,
      onSuccess: (data) => {},
    }
  )

  console.log(data);

  if (pageLoading) {
    return (
      <div className='page-spinner'>
        <div className='l-spinner'></div>
      </div>
    )
  }
  return (
    <>
      <TenantN>
        <section>
          <main className='l-notify'>
            <h1>Notices</h1>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Description</th>
                    <th>Landlord's Name</th>
                    <th>Sender</th>
                    <th>Notice Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((notification) => (
                        <tr key={notification.uuid} className='t-notifications'>
                          <td>{notification.notice_date}</td>
                          <td>{notification.notice_time}</td>
                          <td>{notification.description}</td>
                          <td>{notification?.apartment?.landlord_name}</td>
                          <td>{notification.sender_type}</td>
                          <td>{notification.type}</td>
                          <td
                            onClick={() =>
                              notification.acknowledged_status === 'pending'
                                ? showModal(notification.uuid)
                                : null
                            }
                          >
                            <div
                              className={
                                notification.acknowledged_status === 'pending'
                                  ? 'red-n n-margin'
                                  : notification.acknowledged_status ===
                                    'Accept'
                                  ? 'green-n n-margin'
                                  : 'neutral-n n-margin'
                              }
                            >
                              {notification.acknowledged_status}
                            </div>
                          </td>
                          <td>
                            <AcknowledgeModal
                              modal={modal}
                              isLoading={isLoading}
                              error={error}
                              notice={notice}
                              handleChangeNotice={handleChangeNotice}
                              isSuccess={isSuccess}
                              cancelModal={cancelModal}
                              handleNotice={handleNotice}
                              notification={notification}
                            />
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              {!pageLoading && !data.data.data?.length && (
                <div>
                  <TenantEmptyNotice />
                </div>
              )}
            </div>
          </main>
        </section>
      </TenantN>
    </>
  )
}
const TenantN = styled.section`
  .l-notify {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 4px;
    padding: 20px;
  }
  h1 {
    font-size: 18px;
    padding: 0 20px;
    margin: 20px 0;
  }
  .table {
    overflow-x: scroll;
    width: 100%;
  }
  table {
    border-collapse: separate;
    border-spacing: 0 20px;
    width: 100%;
  }
  th,
  td {
    white-space: nowrap;
    padding: 0 20px;
  }
  .t-heading {
    text-align: left;
    height: 60px;
    background: #f6f6f8;
  }
  .t-notifications {
    height: 50px;
  }
  .n-margin {
    text-align: center;
    margin: 15px 0;
    padding: 7px 0;
    width: 75px;
    text-transform: capitalize;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
  }
  .red-n {
    background-color: red;
  }
  .green-n {
    background-color: #159e23;
  }
  .neutral-n {
    background-color: #ff7a00;
  }
`

const AcknowledgeM = styled.section`
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
    height: 400px;
    padding: 20px;
    min-width: 360px;
    z-index: 2000;
  }
  .error {
    color: #ff0000;
    text-align: left;
    margin: 10px 0;
  }
  .success {
    color: green;
  }

  .modal-text {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: red;
  }
  .select {
    margin: 10px 0;
    width: 250px;
    height: 45px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid black;
  }
  select {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
  }
  .input {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 250px;
    height: 45px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid black;
    outline: none;
    font-size: 16px;
    font-family: inherit;
  }
  label {
    margin: 10px 0;
    font-size: 16px;
  }
  .btn-container {
    display: flex;
    gap: 20px;
    margin: 20px 0;
  }
  button {
    border: none;
    background: transparent;
    border-radius: 4px;
  }
  .btn-cancel {
    border: 1px solid black;
    padding: 10px 0;
    width: 70px;
  }
  .btn-delete {
    padding: 10px 0;
    width: 120px;
  }
  .btn {
    background-color: #fedf7e;
    color: #000;
  }
  .btn-disabled {
    background: #00000080;
    color: #fff;
    cursor: not-allowed;
  }
  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  .login-spinner {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .spinner {
    border: 3px solid #fff;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export default TenantNotices
