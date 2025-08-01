import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'
import Pagination from '../Pagination/Pagination'
import SkeletonPost from '../skeletons/SkeletonPost'
import usePagination from '../../hooks/usePagination'
import { separateDateTime } from '../../hooks/functions'
import EmptyState from '../Globals.js/EmptyState'
import icon from '../../assets/undraw_new_notifications_re_xpcv.png'

const LandlordNotices = () => {
  const { currentPage, handleNextPage, handlePrevPage, setCurrentPage } =
    usePagination('/landlord/notices')
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    `/notices?page=${currentPage}`,
    {
      onSuccess: (data) => {},
    }
  )

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
          textOne='Please send a notice to see a list of your notice here.'
          btnText={'Send Notice'}
          btnFunction={'/landlord/send-notice'}
          icon={icon}
        />
      </div>
    )
  }
  return (
    <>
      <LNotices>
        <section>
          <main className='l-notify'>
            <div className='a-tenant'>
              <h3>Notices</h3>
              <Link to='/landlord/send-notice' className='add-r'>
                <h4>Send Notice</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Description</th>
                    <th>Tenant's Name</th>
                    <th>Tenant's Remark</th>
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
                          <td>
                            {separateDateTime(notification.created_at).date}
                          </td>
                          <td>
                            {separateDateTime(notification.created_at).time}
                          </td>
                          <td>{notification.description}</td>
                          <td>{notification?.tenant?.name}</td>
                          <td>{notification.remarks}</td>

                          <td>
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
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
            {data?.data?.total > 10 && (
              <Pagination
                currentPage={currentPage}
                totalPages={data?.data.last_page || 1}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </main>
        </section>
      </LNotices>
    </>
  )
}
const LNotices = styled.section`
  .l-notify {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  .a-tenant {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
  }
  .add-r {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 4px;
    width: 150px;
    color: #000;
    cursor: pointer;
    text-decoration: none;
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
    height: 60px;
  }
  .n-margin {
    text-align: center;
    margin: 15px 0;
    width: 75px;
    padding: 7px 0;
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
  @media screen and (max-width: 900px) {
    .a-tenant {
      flex-direction: column;
    }
    .add-r {
      margin: 20px 0 10px 0;
    }
  }
`
export default LandlordNotices
