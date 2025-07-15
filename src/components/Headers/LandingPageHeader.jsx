import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/1st mandate logo 1.png'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'

const LandingPageHeader = () => {
  const [active, setActive] = useState(false)
  const closeNav = () => {
    setActive(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 950) {
        setActive(false)
      }
    }

    // Initial check when the component mounts
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <LPHeader>
        <nav>
          <div className='logo'>
            <img src={logo} alt='logo' />
            <p>1st Mandate</p>
          </div>
          <ul className='links'>
            <Link className='link'>Home</Link>
            <Link className='link'>About</Link>
            <Link className='link'>Contact</Link>
          </ul>
          <ul className='links'>
            <Link to='/login' className='link login'>
              Login
            </Link>
            <Link to='/access-password' className='link access'>
              Early Access
            </Link>
          </ul>
          {/* Mobile Nav */}

          <div className='mobile'>
            <Hamburger
              toggled={active}
              toggle={setActive}
              easing='ease-in'
              size={17}
              direction='left'
            />
          </div>
        </nav>

        {active && (
          <div className={active ? 'mobile-nav' : null}>
            <ul className='mobile-links home-link'>
              <li onClick={closeNav}>Home</li>
              <li onClick={closeNav}>About</li>
              <li onClick={closeNav}>Contact</li>
            </ul>
            <ul className='mobile-links access-link'>
              <Link to='/login' className='link login'>
                Login
              </Link>
              <Link to='/sign-up' className='link access'>Early Access</Link>
            </ul>
          </div>
        )}
      </LPHeader>
    </>
  )
}

const LPHeader = styled.div`
  background-color: #fff;
  position: relative;
  nav {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    z-index: 30;
    height: 86px;
  }
  .logo {
    display: flex;
    gap: 10px;
    z-index: 70;
    align-items: center;
  }
  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    list-style: none;
  }
  li {
    cursor: pointer;
  }
  .link {
    text-decoration: none;
    color: #000;
  }
  .access,
  .login {
    border-radius: 10px;
    padding: 10px 20px;
  }
  .login {
    background-color: #f6f6f8;
  }
  .access {
    background-color: #fedf7e;
  }
  .mobile {
    display: none;
    z-index: 70;
  }
  .mobile-nav {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 100vh;
    z-index: 60;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mobile-links {
    display: flex;
    flex-direction: column;
  }
  .home-link {
    margin-bottom: 50px;
  }
  .access-link {
    margin-top: 50px;
  }

  @media screen and (max-width: 950px) {
    .links {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`
export default LandingPageHeader
