import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context.js';
import { Button } from './Button';
import { Link } from 'react-router-dom';

class Modal extends React.Component {
  render () {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if(!modalOpen){
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-8 mx-auto p-5 col-md-6 col-lg-4 text-center text-capitalize">
                      <h5>item added to cart</h5>
                      <img className="img-fluid" alt="product" src={img} />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: $ {price}</h5>
                      <Link to='/'>
                        <Button onClick={() => {closeModal()}}>
                          store
                        </Button>
                      </Link>
                      <Link to='/cart'>
                        <Button cart onClick={() => {closeModal()}}>
                          go to cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`

export default Modal;
