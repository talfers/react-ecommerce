import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { Button } from './Button';

class Details extends React.Component {
  render () {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, img, company, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to='/products'><Button>back to products</Button></Link>
                    <Button
                      cart
                      onClick={() => value.addToCart(id)}
                      disabled={inCart ? true:false}>
                        {inCart ? "inCart" : "Add to Cart"}
                    </Button>

                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

export default Details;
