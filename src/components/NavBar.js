import React from 'react';
import { Link } from 'react-router-dom';
// Icon made by Kiranshastry from www.flaticon.com
import logo from '../logo.png';
import styled from 'styled-components';
// Make sure to do {} if no default
import {Button} from './Button'
import link1 from '../link-1.jpg';
import link2 from '../link-2.jpg';
import link3 from '../link-3.jpg';
import link4 from '../link-4.jpg';

class NavBar extends React.Component {
  render () {
    return(
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/' className="navbar-brand brand d-flex align-items-center">
          <img src={logo} style={{height: "3rem"}} alt="logo"/>
          <h2 className=" d-inline pl-3 m-0">Sweet's Bakery</h2>
        </Link>
        <ul className="navbar-nav align-items-center">
          <LinkHoverMenu className="nav-item ml-4">
            <Link to='/products' className="nav-link p-0">
              Cakes
            </Link>
            <div className="hover-menu">
              <div className='hover-links'>
                <Link to='/products' className="hover-link">
                  <img src={link1} alt="link1"></img>
                  <h3>Shop All</h3>
                </Link>
                <Link to="/" className="hover-link">
                  <img src={link2} alt="link2"></img>
                  <h3>Shop 1</h3>
                </Link>
                <Link to="/" className="hover-link">
                  <img src={link3} alt="link3"></img>
                  <h3>Shop 2</h3>
                </Link>
                <Link to="/" className="hover-link">
                  <img src={link4} alt="link4"></img>
                  <h3>Shop 3</h3>
                </Link>
              </div>
            </div>
          </LinkHoverMenu>
        </ul>
        <Link to='/cart' className="ml-auto">
          <Button>
            <span className="mr-2"><i className="fas fa-shopping-cart"></i></span>Cart</Button>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);

  .nav-link {
    position: relative;
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;

    &:hover {

      .hover-menu {
        transform: scale(0);
      }
    }
  }
`


const LinkHoverMenu = styled.li`

  .hover-menu {
    position: absolute;
    top: 110%;
    left: 75%;
    z-index: 10;
    transform: scaleX(0);
    transition: all 0.4s ease;
    transform-origin: left;
    opacity: 0;

    .hover-links {
      display: grid;
      grid-template-columns: repeat(2, 2fr);
      padding: 0.5rem;
      background: var(--mainYellow);

      .hover-link {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5rem;
        height: 240px;
        width: 240px;
        color: #fff;
        cursor: pointer;
        background: rgba(0,0,0,0.7);
        transition: 0.2s linear;
        position: relative;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.3;
          z-index: 11;
          transition: opacity 0.4s linear;

        }

        &:hover {
          img {
            opacity: 1;
          }
      }

        h3 {
          z-index: 12;
        }
      }
    }
  }
  &:hover {

    .hover-menu {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`

export default NavBar;
