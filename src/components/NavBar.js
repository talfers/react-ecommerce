import React from 'react';
import { Link } from 'react-router-dom';
// Icon made by Kiranshastry from www.flaticon.com
import logo from '../fly.png';
import styled from 'styled-components';
// Make sure to do {} if no default
import {Button} from './Button'



class NavBar extends React.Component {
  render () {
    return(
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/'>
          <img src={logo} style={{height: "72px"}} className="navbar-brand" alt="logo"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to='/' className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <Button>
            <span className="mr-2"><i className="fas fa-cart-plus" /></span> My Cart</Button>
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
