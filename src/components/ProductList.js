import React from 'react';
// import Product from './Product';
import Title from './Title';
import Product from './Product'
import { ProductConsumer } from '../context';

class ProductList extends React.Component {

  render () {
    return(
      <React.Fragment>
        <section>
          <div className="py-5">
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
        </section>
        <script src="lazysizes.min.js" async=""></script>
      </React.Fragment>
    )
  }
}

export default ProductList;
