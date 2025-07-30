import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import icon from '../../assets/undraw_new_notifications_re_xpcv.png'

import {
  useFirstMandateQuery,
  useFirstMandateMutation,
} from '../../data-layer/utils'
import electricity from '../../assets/Frame 2007 (3).png'
import water from '../../assets/Frame 2007 (2).png'
import security from '../../assets/Frame 2007 (4).png'
import houseImage from '../../assets/Frame 2007 (6).png'
import SkeletonPost from '../skeletons/SkeletonPost'
import Pagination from '../Pagination/Pagination'
import usePagination from '../../hooks/usePagination'
import EmptyState from '../Globals.js/EmptyState'

const DeleteModal = ({
  setShowModal,
  cancelDelete,
  reminder,
  refetchReminders,
  showModal,
}) => {
  const { mutateAsync: deleteReminder } = useFirstMandateMutation(
    `/tenant/reminders/${reminder.uuid}  `,
    {
      method: 'DELETE',
      onSuccess: (data) => {
        refetchReminders()
      },
      onError: (error) => {
        console.error(error)
      },
    }
  )

  const DeleteReminder = async () => {
    try {
      await deleteReminder()
      setShowModal(false)
    } catch (e) {}
  }
  return (
    <>
      {showModal && (
        <div className='modal'>
          <div className='overlay'></div>
          <div className='modal-content'>
            <p className='modal-text'>
              Are you sure you want to delete this reminder?
            </p>
            <div className='btn-container'>
              <button className='btn-delete' onClick={DeleteReminder}>
                Yes
              </button>
              <button className='btn-cancel' onClick={cancelDelete}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const RemainderCard = ({
  reminder,
  cancelDelete,
  refetchReminders,
  showModal,
  setShowModal,
  handleDeleteReminder,
}) => {
  const navigate = useNavigate()

  return (
    <tr className='r-list'>
      <th>
        {reminder.reminder_type === 'Rent due date' ? (
          <img src={houseImage} alt='Reminder' />
        ) : reminder.reminder_type === 'Electricity Payment' ? (
          <img src={electricity} alt='Reminder' />
        ) : reminder.reminder_type === 'Water bill' ? (
          <img src={water} alt='Reminder' />
        ) : (
          <img src={security} alt='Reminder' />
        )}
      </th>
      <th>{reminder.reminder_type}</th>
      <th>{reminder.reminder_time}</th>
      <th>{reminder.short_description}</th>
      <th
        onClick={() => navigate(`/tenant/add-reminder/${reminder.uuid}/edit`)}
      >
        <button className='edit-icon'>Edit</button>
      </th>
      <th>
        <button
          // disabled={isDeleting}
          onClick={handleDeleteReminder}
          className='delete-icon'
        >
          Delete
        </button>
      </th>
      <td>
        <DeleteModal
          setShowModal={setShowModal}
          showModal={showModal}
          reminder={reminder}
          cancelDelete={cancelDelete}
          refetchReminders={refetchReminders}
        />
      </td>
    </tr>
  )
}

const LandlordReminders = () => {
  const { currentPage, handleNextPage, handlePrevPage, setCurrentPage } =
    usePagination('/tenant/reminders')
  const [showModal, setShowModal] = useState(false)

  const handleDeleteReminder = async () => {
    setShowModal(true)
  }
  const cancelDelete = () => {
    setShowModal(false)
  }

  const {
    isLoading: pageLoading,
    data,
    refetch: refetchReminders,
  } = useFirstMandateQuery(`/tenant/reminders?page=${currentPage}`, {
    onSuccess: (data) => {},
  })

  if (pageLoading) {
    return (
      <div>
        {[...Array(10).keys()].map((i) => (
          <SkeletonPost key={i} />
        ))}
      </div>
    )
  }

  if (!data || !data.data || !data.data.data || data.data.data.length === 0) {
    return (
      <div>
        <EmptyState
          textOne='Please add a reminder to see a list of your reminders here.'
          icon={icon}
          btnText={'Add Reminder'}
          btnFunction={'/tenant/add-reminder'}
        />
      </div>
    )
  }
  return (
    <>
      <LandlordR>
        <section>
          <main className='r-section'>
            <div className='landlord-reminder'>
              <div className='a-tenant'>
                <h3>Reminders</h3>
                <div className='set-reminders'>
                  <Link to='/tenant/add-reminder' className='add-r'>
                    <h4>Add Reminder</h4>
                    <FaRegPlusSquare size={20} />
                  </Link>
                </div>
              </div>
              <div className='table'>
                <table>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((reminder) => (
                        <tbody key={reminder.uuid}>
                          <RemainderCard
                            reminder={reminder}
                            refetchReminders={refetchReminders}
                            handleDeleteReminder={handleDeleteReminder}
                            setShowModal={setShowModal}
                            showModal={showModal}
                            cancelDelete={cancelDelete}
                          />
                        </tbody>
                      ))
                    : null}
                </table>
              </div>
            </div>
          </main>
          {data?.data?.total > 10 && (
            <Pagination
              currentPage={currentPage}
              totalPages={data?.data.last_page || 1}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </section>
      </LandlordR>
    </>
  )
}
const LandlordR = styled.section`
  .r-section {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .landlord-reminder {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .a-tenant {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
  }
  .set-reminders {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  .set-r,
  .add-r {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffe48e;
    padding: 15px;
    height: 48px;
    border-radius: 4px;
    width: 200px;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  button {
    border: none;
    font-size: 15px;
    outline: none;
    background: transparent;
    cursor: pointer;
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
    text-align: left;
  }
  .r-list {
    height: 60px;
    background-color: #f6f6f8;
  }
  .edit-icon {
    margin: 5px 0;
    padding: 7px 0;
    width: 60px;
    border-radius: 4px;
    background-color: #fedf7e;
    text-align: center;
    cursor: pointer;
  }
  .delete-icon {
    margin: 5px 0;
    padding: 7px 0;
    width: 80px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    background-color: #ffdfe2;
  }
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
    color: red;
  }
  .btn-container {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  .btn-delete {
    border: 1px solid black;
    padding: 10px 0;
    width: 70px;
    border-radius: 4px;
  }
  .btn-cancel {
    padding: 12px 0;
    width: 70px;
    border-radius: 4px;
    background-color: #fedf7e;
  }
  @media screen and (max-width: 900px) {
    .a-tenant {
      flex-direction: column;
      align-items: flex-start;
      justify-content: left;
    }
    .set-r,
    .add-r {
      width: 190px;
      flex-shrink: 0;
    }
    .set-reminders {
      margin: 20px 0 10px 0;
    }
    .r-desc {
      margin-left: 25px;
    }
  }
  @media screen and (max-width: 750px) {
    .r-due-date {
      align-items: center;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 450px) {
    .r-section {
      padding: 5px;
    }
  }
`
export default LandlordReminders
