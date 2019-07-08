import React from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: [],
    cart: [],
    detailProduct: detailProduct,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(product => {
      const singleItem = {...product};
      tempProducts = [...tempProducts, singleItem]
    });
    this.setState({products: tempProducts});
  }

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;

  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({detailProduct: product});
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState({products: tempProducts, cart: [...this.state.cart, product]}, () => {
      this.addTotals();
    })
  }

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({modalProduct: product, modalOpen: true})
  }

  closeModal = () => {
    this.setState({modalOpen: false});
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const chosenProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(chosenProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState({cart: [...tempCart]}, () => {
      this.addTotals();
    })
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const chosenProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(chosenProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if(product.count === 0){
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState({cart: [...tempCart]}, () => {
        this.addTotals();
      })
    }
  }

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id))
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState({cart: [...tempCart], products: [...tempProducts]}, () => {
      this.addTotals();
    });
  }

  clearCart = () => {
    this.setState({cart: []}, () => {
      this.setProducts();
      this.addTotals();
    })
  }

  addTotals = () => {
    let subTotals = 0;
    this.state.cart.map(item => (subTotals += item.total))
    const tempTax = subTotals * 0.09;
    // convert to simple 2 dec float
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotals + tax;
    this.setState({cartSubtotal: subTotals, cartTax: tax, cartTotal: total});
  }

  render () {
    return(
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
