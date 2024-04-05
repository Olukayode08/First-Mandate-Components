import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import editIcon from '../../assets/pencil-edit-01.png'
import { useNavigate } from 'react-router-dom'

const ManagerPropertyDropdown = ({ selectedProperty }) => {
  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTimeout(() => {
          setShowDropdown(false)
        }, 200)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const navigateUnit = () => {
    navigate(`/manager/add-unit/${selectedProperty.uuid}/units`)
    setTimeout(() => {
      setShowDropdown(false)
    }, 1000)
  }

  // const navigateLandlord = () => {
  //   navigate(`/manager/add-landlord/${selectedProperty.uuid}`)
  //   setTimeout(() => {
  //     setShowDropdown(false)
  //   }, 1000)
  // }

  return (
    <>
      <ManagerPD ref={dropdownRef}>
        <img
          className='edit-img'
          onClick={toggleDropdown}
          src={editIcon}
          alt='Edit'
        />
        {showDropdown && (
          <div className='navigate-dropdown'>
            <p onClick={navigateUnit} className='nav'>
              Add Units
            </p>
            {/* <p onClick={navigateLandlord} className='nav'>
              Add Landlord
            </p> */}
          </div>
        )}
      </ManagerPD>
    </>
  )
}
const ManagerPD = styled.section`
  .edit-img {
    position: relative;
    padding: 10px 12px;
    border-radius: 4px;
    background: #fedf7e;
    cursor: pointer;
  }
  .navigate-dropdown {
    position: absolute;
    right: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    border-radius: 4px;
    width: 160px;
    background-color: #ffffff;
    box-shadow: 0px 2px 16px 0px #00000026;
    z-index: 999;
  }
  .nav {
    margin: 3px 0;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    .navigate-dropdown {
      left: 0;
    }
  }
`
export default ManagerPropertyDropdown
