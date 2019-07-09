import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Hero({img}) {
  return (
    <HeroSection>
      <img src={img} alt='hero-img'/>
      <div className="hero-content">
        <h1 className="hero-title">This is the Store.</h1>
        <h3 className="hero-text">Browse our many different products for both men and ladies</h3>
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
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    text-align: center;
    padding: 0 1rem;

    .hero-title {
      font-size: 4rem;
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
