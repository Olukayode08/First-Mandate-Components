import React from 'react'
import styled from 'styled-components'
import bg from '../../assets/bgImage.jpeg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <HeroS>
        <section className='background'>
          <p>1st Mandate</p>
          <p>An easier way to manage properties</p>
          <Link to='access-password' className='link access'>Get Started</Link>
        </section>
      </HeroS>
    </>
  )
}
const HeroS = styled.section`
  section {
    width: 100%;
  }
  .background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 80vh;
  }
  p {
    font-size: 36px;
    color: #fff;
  }
  .access {
    text-decoration: none;
    color: #000;
    margin: 20px 0;
    background-color: #fedf7e;
    border-radius: 10px;
    padding: 10px 20px;
  }
`
export default Hero
