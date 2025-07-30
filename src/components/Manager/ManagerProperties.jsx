import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useFirstMandateQuery } from '../../data-layer/utils'
import houseIcon from '../../assets/Frame-2007.png'
import SkeletonPost from '../skeletons/SkeletonPost'
import usePagination from '../../hooks/usePagination'
import Pagination from '../Pagination/Pagination'
import EmptyState from '../Globals.js/EmptyState'
import icon from '../../assets/empty-house-01 (2).png'

const ManagerProperties = () => {
  const { currentPage, handleNextPage, handlePrevPage, setCurrentPage } =
    usePagination('/manager/properties')
  const navigate = useNavigate()
  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    `/property-manager/properties?page=${currentPage}`,
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
          textOne='Please upload new property to see a list of your properties.'
          btnText={'Upload New Property'}
          btnFunction={'/manager/add-property'}
          icon={icon}
        />
      </div>
    )
  }

  return (
    <>
      <ManagerP>
        <section>
          <main className='l-section'>
            <div className='a-ppt'>
              <h3>Properties</h3>
              <Link to='/manager/add-property' className='add-r'>
                <h4>Add New Property</h4>
                <FaRegPlusSquare size={20} />
              </Link>
            </div>
            <div className='l-options'>
              {data &&
                data.data &&
                data.data.data &&
                data.data.data.length > 0 &&
                data.data.data.map((property) => (
                  <div
                    className='options'
                    onClick={() =>
                      navigate(`/manager/property/${property.uuid}`)
                    }
                    key={property.uuid}
                  >
                    <img src={houseIcon} alt='Icon' />
                    <h1 className='option-h'>{property.title}</h1>
                    <p className='option-text'>{property.address}</p>
                    <p className='option-text'>
                      Landlord's Name: {property.landlord?.name}
                    </p>
                    <p className='option-text'>
                      Property Type: {property.property_type}
                    </p>
                    <p className='option-text'>
                      Number of Unit: {property.units.length}
                    </p>
                  </div>
                ))}
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
      </ManagerP>
    </>
  )
}
const ManagerP = styled.section`
  position: relative;
  .l-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
  }
  .a-ppt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    margin: 20px 0;
  }
  .add-r {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    font-weight: 100;
    border-radius: 10px;
    width: 250px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    font-family: inherit;
  }
  .l-options {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #fff;
    flex: 1 1 320px;
    height: 370px;
    border-radius: 4px;
    cursor: pointer;
  }
  img {
    width: 112px;
    height: 100px;
  }
  .option-h {
    margin: 20px 0;
  }
  .option-text {
    text-align: center;
    opacity: 0.8;
    line-height: 22px;
    margin: 5px 0;
  }
  @media screen and (max-width: 700px) {
    .a-ppt {
      flex-direction: column;
      margin: 0;
    }
    .add-r {
      margin: 20px 0;
    }
  }
  @media screen and (max-width: 500px) {
    .options {
      flex: 1 1 280px;
      /* width: 280px; */
    }
  }
`
export default ManagerProperties
