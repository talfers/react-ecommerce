import React from 'react';
import { Link } from 'react-router-dom';
// Icon made by Kiranshastry from www.flaticon.com
import logo from '../logo.png';
import styled from 'styled-components';
// Make sure to do {} if no default
import {Button} from './Button'

class NavBar extends React.Component {
  render () {
    return(
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/' className="navbar-brand brand d-flex align-items-center">
          <img src={logo} style={{height: "3rem"}} alt="logo"/>
          <h2 className=" d-inline pl-3 m-0">Sweet's Bakery</h2>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-4">
            <Link to='/' className="nav-link p-0">
              Cakes
            </Link>
          </li>
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
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }

`

export default NavBar;
