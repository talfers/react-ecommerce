import React from 'react';
// import Product from './Product';
import Title from './Title';
import Product from './Product'
import { ProductConsumer } from '../context';

class ProductList extends React.Component {

  render () {
    return(
      <React.Fragment>
        <div className="py-5" style={{minHeight: 'calc(100vh - 5rem - 100px)'}}>
          <div className="store-container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProductList;
