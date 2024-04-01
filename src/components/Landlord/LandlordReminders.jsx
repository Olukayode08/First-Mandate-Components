import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'
import LandlordEmptyReminder from './LandlordEmptyReminder'
import {
  useFirstMandateQuery,
  useFirstMandateMutation,
} from '../../data-layer/utils'

const token = localStorage.getItem('token')

const RemainderCard = ({ reminder, refetchReminders }) => {
  const navigate = useNavigate()

  const {
    mutateAsync: deleteReminder,
    isLoading: isDeleting,
    error,
  } = useFirstMandateMutation(`/reminders/${reminder.uuid}  `, {
    method: 'DELETE',
    onSuccess: (data) => {
      refetchReminders()
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const handleDeleteRemainder = async () => {
    try {
      await deleteReminder()
    } catch (e) {
      console.log(error)
    }
  }

  return (
    <tr key={reminder.uuid} className='r-list'>
      <th>{reminder.reminder_type}</th>
      <th>{reminder.short_description}</th>
      <th
        onClick={() => navigate(`/landlord/add-reminder/${reminder.uuid}/edit`)}
      >
        <div className='edit-icon'>Edit</div>
      </th>
      <th>
        <button
          disabled={isDeleting}
          onClick={handleDeleteRemainder}
          className='delete-icon'
        >
          {isDeleting ? 'Loading Delete' : 'Delete'}
        </button>
      </th>
    </tr>
  )
}

const LandlordReminders = () => {
  const { isLoading: pageLoading, data, refetch: refetchReminders } = useFirstMandateQuery(
    '/reminders',
    {
      enabled: !!token,
      onSuccess: (data) => {
      },
    }
  )
  console.log(data)

  if (pageLoading) {
    return <div className='page-loading'>Loading</div>
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
                  <Link to='/landlord/add-reminder' className='add-r'>
                    <h4>Add Reminder</h4>
                    <FaRegPlusSquare size={20} />
                  </Link>
                </div>
              </div>
              <div className='table'>
                <table>
                  <tbody>
                    {data.data?.data && data.data?.data.length > 0
                      ? data.data?.data.map((reminder) => (
                          <RemainderCard
                            key={reminder.uuid}
                            reminder={reminder}
                            refetchReminders={refetchReminders}
                          />
                        ))
                      : null}
                  </tbody>
                </table>
                {!pageLoading && !data.data?.data?.length && (
                  <div>
                    <LandlordEmptyReminder />
                  </div>
                )}
              </div>
            </div>
          </main>
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
    background: transparent;
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
