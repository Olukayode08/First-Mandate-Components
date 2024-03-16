import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LandlordPropertiesDropdown from '../Dropdowns/LandlordPropertiesDropdown'
import LandlordEmptyProperty from './LandlordEmptyProperty'
import { landlordProperties } from '../../datas/LandlordProperties'
import LandlordEditProperty from './LandlordEditProperty'
import LandlordPropertyUnit from './LandlordPropertyUnit'
const LandlordPropertyPage = () => {
  const [properties, setProperties] = useState(landlordProperties)
  const [editProperty, setEditProperty] = useState(null)
  const handleEdit = (property) => {
    setEditProperty(property)
  }

  const handleSave = (updatedProperty) => {
    setProperties(
      properties.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : property
      )
    )
    setEditProperty(null)
  }
  // Data Length Empty Property
  if (properties.length === 0) {
    return (
      <div>
        <LandlordEmptyProperty />
      </div>
    )
  }
  return (
    <>
      <LandlordPP>
        <section>
          <div className='m-section'>
            <Link to='/landlord/upload-property' className='add-r'>
              <h4>Upload New Property</h4>
              <FaRegPlusSquare size={20} />
            </Link>
            {properties.map((property) => (
              <div key={property.id} className='manager-p'>
                <div className='apart-det'>
                  <div className='apartment'>
                    <p className='p-icon'>{property.icon}</p>
                    <div className='apart-loc'>
                      <h3>{property.title}</h3>
                      <h1>{property.location}</h1>
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
                          <span> Flat</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {editProperty && (
                    <LandlordEditProperty
                      property={editProperty}
                      onSave={handleSave}
                      onCancel={() => setEditProperty(null)}
                    />
                  )}
                  <div>
                    <LandlordPropertiesDropdown
                      property={property}
                      handleEdit={handleEdit}
                    />
                  </div>
                </div>
                <LandlordPropertyUnit property={property} />
              </div>
            ))}
          </div>
        </section>
      </LandlordPP>
    </>
  )
}
const LandlordPP = styled.section`
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
export default LandlordPropertyPage
