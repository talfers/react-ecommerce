import React from 'react';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import ProductList from './ProductList';

class Home extends React.Component {
  render () {
    return (
      <content className="home">
        <Hero img={"https://images.unsplash.com/photo-1518047601542-79f18c655718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
        <ProductList></ProductList>
        <FeaturedProducts></FeaturedProducts>
      </content>
    )
  }
}

export default Home;
