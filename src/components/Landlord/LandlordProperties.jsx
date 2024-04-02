import React from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LandlordPropertiesDropdown from '../Dropdowns/LandlordPropertiesDropdown'
import LandlordEmptyProperty from './LandlordEmptyProperty'
import { RiRadioButtonLine } from 'react-icons/ri'
import LandlordPropertyUnit from './LandlordPropertyUnit'
import { useFirstMandateQuery } from '../../data-layer/utils'
import { useNavigate } from 'react-router-dom'

const token = localStorage.getItem('token')

const LandlordProperties = () => {
  const navigate = useNavigate()

  const { data, isLoading: pageLoading } = useFirstMandateQuery('/properties', {
    enabled: !!token,
    onSuccess: (data) => {},
  })

  if (pageLoading) {
    return <div className='page-loading'>Loading</div>
  }
  return (
    <>
      <LandlordP>
        <section>
          <div className='m-section'>
            <Link to='/landlord/upload-property' className='add-r'>
              <h4>Upload New Property</h4>
              <FaRegPlusSquare size={20} />
            </Link>
            {/* {data?.data?.data && data?.data?.data?.length > 0 ? (
              <select
                name='property-select'
                id='property-select'
                onChange={(e) => {
                  const selectedPropertyId = e.target.value
                  if (selectedPropertyId) {
                    navigate(`/landlord/add-manager/${selectedPropertyId}`)
                  }
                }}
              >
                <option value=''>Select</option>
                {data?.data?.data?.map((property) => (
                  <option key={property.uuid} value={property.uuid}>
                    {property.title}
                  </option>
                ))}
              </select>
            ) : (
              <p>No Property</p>
            )} */}

            {data?.data?.data && data?.data?.data?.length > 0
              ? data?.data?.data?.map((property) => (
                  <div key={property.uuid} className='manager-p'>
                    <div className='apart-det'>
                      <div className='apartment'>
                        <p className='p-icon'>
                          <RiRadioButtonLine />
                        </p>
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
                              <span> 4 Units</span>
                            </p>
                            <p>
                              Building Type:
                              <span> {property.property_type}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <LandlordPropertiesDropdown property={property} />
                      </div>
                    </div>
                    <LandlordPropertyUnit property={property} />
                  </div>
                ))
              : null}
            {!pageLoading && !data.data?.data?.length && (
              <div>
                <LandlordEmptyProperty />
              </div>
            )}
          </div>
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
    gap: 30px;
  }
  .p-icon {
    font-size: 40px;
  }
  .p-img {
    width: 100px;
    height: 90px;
    border-radius: 4px;
  }
  .apart-loc {
    display: flex;
    flex-direction: column;
    gap: 17px;
  }
  .status-active {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
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
      margin: 10px 0;
    }
    .p-icon {
      display: none;
    }
  }
`
export default LandlordProperties
