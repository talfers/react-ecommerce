import React from 'react';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import ProductList from './ProductList';
import Footer from '../components/Footer';

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <content className="home">
          <Hero img={"https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
          <ProductList></ProductList>
          <FeaturedProducts></FeaturedProducts>
        </content>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Home;
