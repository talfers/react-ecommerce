import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends React.Component {
  render () {
    return (
      <section style={{overflow: 'hidden', minHeight: 'calc(100vh - 5rem - 100px)'}}>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name={"your"} title={"cart"} />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history}/>
                </React.Fragment>
              )
            } else {
              return (
                <EmptyCart />
              )
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}

export default Cart;
