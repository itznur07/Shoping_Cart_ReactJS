import React, { useContext } from 'react';
import { CartContext } from './Cart';

const Items = ({id, description, title, img, price, quantity}) => {

  const { removeItem, inCrement, deCrement } = useContext(CartContext)

  return <div>
    <div className="items-info">
          <div className="product-img">
            <img src={img} alt="" />
          </div>
          <div className="title">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="add-minus-quantity">
            <i onClick={() => deCrement(id)} className="fas fa-minus minus"></i>
            <input type="text" placeholder={quantity} />
            <i onClick={() => inCrement(id)} className="fas fa-plus add"></i>
          </div>
          <div className="price">
            <h3>{price} tk</h3>
          </div>
          <div className="remove-item">
            <i onClick={() => removeItem(id)} className="fas fa-trash-alt remove"></i>
          </div>
        </div>
        <hr />
  </div>;
};

export default Items;
