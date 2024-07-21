import styled from 'styled-components'
import { useFirstMandateQuery } from '../../data-layer/utils'
import LandlordEmptyNotification from './LandlordEmptyNotification'
import Pagination from '../Pagination/Pagination'
import SkeletonPost from '../skeletons/SkeletonPost'
import usePagination from '../../hooks/usePagination'

const LandlordNotifications = () => {
  const { currentPage, handleNextPage, handlePrevPage, setCurrentPage } =
    usePagination('/landlord/notifications')

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    `/notifications?page=${currentPage}`,
    {
      onSuccess: (data) => {},
    }
  )
  const separateDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString)
    const date = dateTime.toLocaleDateString()
    const time = dateTime.toLocaleTimeString()
    return { date, time }
  }

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
        <LandlordEmptyNotification />
      </div>
    )
  }

  console.log(data)

  return (
    <>
      <LNotifications>
        <section>
          <main className='l-notify'>
            <h1>Notifications</h1>
            <div className='table'>
              <table>
                <thead>
                  <tr className='t-heading'>
                    <th>Date</th>
                    <th>Time</th>
                    {/* <th>Title</th> */}
                    {/* <th>Section</th> */}
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                  data.data &&
                  data.data.data &&
                  data.data.data.length > 0
                    ? data.data.data.map((notification) => (
                        <tr key={notification.id} className='t-notifications'>
                          <td>
                            {separateDateTime(notification.created_at).date}
                          </td>
                          <td>
                            {separateDateTime(notification.created_at).time}
                          </td>
                          {/* <td>{notification.title}</td> */}
                          {/* <td>{notification.section}</td> */}
                          <td>{notification.notification}</td>
                          <td>{notification.status}</td>
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
      </LNotifications>
    </>
  )
}
const LNotifications = styled.section`
  .l-notify {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  h1 {
    font-size: 18px;
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
    height: 60px;
  }
  .n-margin {
    border: 1px solid black;
    text-align: center;
    margin: 15px 0;
    padding: 7px 10px;
    border-radius: 4px;
  }
`
export default LandlordNotifications
