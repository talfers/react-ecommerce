import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Hero({img}) {
  return (
    <HeroSection>
      <img src={img} alt='hero-img'/>
      <div className="hero-content">
        <h1 className="hero-title text-alternate">Cake is Good.</h1>
        <h3 className="hero-text text-alternate">Browse our many different cakes, both chocolatey and fruity.</h3>
        <Link to="/products">
          <button className="hero-btn">Shop Now</button>
        </Link>
      </div>
    </HeroSection>
  )
}

const HeroSection = styled.div`

  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    position: relative;

    &:after {
      content: '';
      background: rgba(0,0,0,0.5);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
    }
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    text-align: center;
    padding: 1rem;
    background: rgba(0,0,0,0.4);
    border-radius: 16px;
    margin: 0 auto;
    max-width: 80%;

    .hero-title {
      font-size: 5rem;
    }

    .hero-btn {
      margin-top: 1rem;
      background: none;
      border: solid var(--mainBlue) 2.5px;
      padding: 0.4rem 1rem;
      color: var(--lightBlue);
      font-size: 1.5rem;

      &:hover {
        background: var(--mainBlue);
        color: var(--lightBlue);
      }
    }
  }



`

export default Hero;
