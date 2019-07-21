import React from 'react';
import styled from 'styled-components';

function FeaturedProducts() {
  return (
    <FeaturedWindow>
      <div className="products">
        <div className="product">
          <img src="https://images.unsplash.com/photo-1536302446738-272630cf902e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
          <div className="text-block">
            <h3>New!</h3>
            <p>Try our new berry & cream cheese cakes</p>
            <button>Shop</button>
          </div>
        </div>
        <div className="product">
          <img src="https://images.unsplash.com/photo-1546393009-ef37dc6dfd35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="" />
          <div className="text-block">
            <h3>Cupcakes</h3>
            <p>Our cupcakes sell like hotcakes</p>
            <button>Shop</button>
          </div>
        </div>
      </div>
    </FeaturedWindow>
  )
}

const FeaturedWindow = styled.div`
  width: 100%;
  height: 70vh;
  padding: 5rem 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  .products {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .product {
      height: 100%;
      flex: 1 1 50%;
      margin: 1.5rem 1rem;
      position: relative;
      overflowX: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        transition: all ease 0.4s;

        &:hover {
          opacity: 0.8;
        }

      }

      .text-block {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        bottom: -2rem;
        left: 25%;
        padding: 1rem 1rem;
        background: var(--lightBlue);
        text-align: center;

        button {
          background: none;
          border: 2px solid var(--mainBlue);
          padding: 0.4rem 1rem;
          color: var(--mainBlue);

          &:hover {
            color: var(--lightBlue);
            background: var(--mainBlue);
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    height: 100vh;

    .products {
      flex-direction: column;
    }

    .product {
        flex: 1 1 50%;
        width: 100%;
    }
  }

`

export default FeaturedProducts
