import React from 'react'

function CartItem({item, value}) {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;
  return (
    <div className="row d-flex align-items-center my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{width: 'auto', maxHeight: '4rem'}}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-none d-lg-block">
          <span>{title}</span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-none d-lg-block">
          <span>$ {price}</span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">
              {count}
            </span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"/>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: ${total}</strong>
      </div>
    </div>
  )
}

export default CartItem;
