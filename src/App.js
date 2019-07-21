import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch , Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home'
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer'

function App() {
  return (
  <div className="app">
    <NavBar ></NavBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer/>
      <Modal />

  </div>
  );
}

export default App;
