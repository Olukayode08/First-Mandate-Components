import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import LandlordPropertiesDropdown from '../Dropdowns/LandlordPropertiesDropdown'
import LandlordPropertyUnit from './LandlordPropertyUnit'
import { useFirstMandateQuery } from '../../data-layer/utils'
import iconHouse from '../../assets/unavailable.svg'
import Pagination from '../Pagination/Pagination'
import SkeletonPost from '../skeletons/SkeletonPost'
import usePagination from '../../hooks/usePagination'
import Button from '../Globals.js/Button'
import EmptyState from '../Globals.js/EmptyState'
import icon from '../../assets/empty-house-01 (2).png'

const LandlordProperties = () => {
  const navigate = useNavigate()
  const { currentPage, handleNextPage, handlePrevPage, setCurrentPage } =
    usePagination('/landlord/properties')

  const { data, isLoading: pageLoading } = useFirstMandateQuery(
    `/properties?page=${currentPage}`,
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

  return (
    <>
      <LandlordP>
        <section>
          <div className='m-section'>
            <Link to='/landlord/add-property' className='add-r'>
              <h4>Upload New Property</h4>
              <FaRegPlusSquare size={20} />
            </Link>
            {data &&
            data.data &&
            data.data.data &&
            data.data.data.length > 0 ? (
              data.data.data.map((property) => (
                <div key={property.uuid} className='manager-p'>
                  <div className='apart-det'>
                    <div className='apartment'>
                      <img
                        className='h-img'
                        src={iconHouse}
                        alt={property.title}
                      />
                      <div className='apart-loc'>
                        <h3>{property.title}</h3>
                        <h1>{property.address}</h1>
                        <div className='status-active'>
                          <p>
                            Status:
                            <span> Active</span>
                          </p>
                          <p>
                            Unit:
                            <span> {property.units.length} Unit</span>
                          </p>
                          <p>
                            Property Type:
                            <span> {property.property_type}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-2.5'>
                      <div className='w-[150px] h-12'>
                        <Button
                          btnText={'Add Apartment'}
                          btnFunction={() =>
                            navigate(
                              `/landlord/add-unit/${property.uuid}/units`
                            )
                          }
                        />
                      </div>

                      <LandlordPropertiesDropdown property={property} />
                    </div>
                  </div>
                  <LandlordPropertyUnit property={property} />
                </div>
              ))
            ) : (
              <div>
                <EmptyState
                  textOne='Please upload new property to see a list of your properties.'
                  btnText={'Upload New Property'}
                  btnFunction={'/landlord/add-property'}
                  icon={icon}
                />{' '}
              </div>
            )}
          </div>
          {data?.data?.total > 10 && (
            <Pagination
              currentPage={currentPage}
              totalPages={data?.data.last_page || 1}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              setCurrentPage={setCurrentPage}
              x
            />
          )}
        </section>
      </LandlordP>
    </>
  )
}
const LandlordP = styled.section`
  .m-section {
    width: 100%;
    border-radius: 4px;
    padding: 20px;
  }
  .add-r {
    display: flex;
    justify-content: space-between;
    background-color: #ffe48e;
    padding: 15px;
    border-radius: 4px;
    width: 250px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  .manager-p {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    background-color: #ffffff;
    margin: 20px 0;
    box-shadow: 0px 2px 16px 0px #00000026;
  }
  .apart-det {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0;
    width: 100%;
  }
  .apartment {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .p-img {
    width: 100px;
    height: 90px;
    border-radius: 4px;
  }
  .apart-loc {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .status-active {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  p {
    font-weight: 200;
    text-align: left;
  }
  span {
    font-weight: 800;
  }
  @media screen and (max-width: 900px) {
    .apart-det {
      flex-direction: column;
      align-items: flex-start;
    }
    .status-active,
    .apart-loc {
      align-items: flex-start;
      justify-content: left;
    }
    .status-active {
      margin-bottom: 15px;
    }
    .h-img {
      display: none;
    }
  }
`
export default LandlordProperties
