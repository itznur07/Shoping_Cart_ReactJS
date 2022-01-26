import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from './Cart';
import Items from './Items';

const ContextCart = () => {

   const {items, totalItem, totalAmount, clearCard} = useContext(CartContext);

  if(items.length === 0){
    return(
      <div>
        <header>
      <div className="continue-shopping">
        <img src="/icons/arrow.png" alt="arrow" className='arrow-icon' />
        <h3>Continue Shopping</h3>
      </div>
      <div className="cart-icon">
        <img src="/icons/cart.png" alt="cart" className="" />
        <p>0</p>
      </div>
    </header>
    <section className="main-cart-section">
      <h1>Shopping Cart</h1>
      <p className="total-items">You have <span className="total-items-count">0</span> items is show</p>
    </section>
      </div>
    )
  }

  return <div>
    <header>
      <div className="continue-shopping">
        <img src="/icons/arrow.png" alt="arrow" className='arrow-icon' />
        <h3>Continue Shopping</h3>
      </div>
      <div className="cart-icon"> 
        <img src="/icons/cart.png" alt="cart" className="" />
        <p>{totalItem}</p>
      </div>
    </header>
    <section className="main-cart-section">
      <h1>Shopping Cart</h1>
      <p className="total-items">You have <span className="total-items-count">{totalItem}</span> items is show</p>
    <div className="cart-items">
      <div className="cart-items-container">
        <Scrollbars>
          {items.map((item) => (
            <Items key={item.id} {...item}/>
          ))}
        </Scrollbars>
      </div>
    </div>

    

    <div className="card-total">
      <h3>Card Total: <span>{totalAmount}tk</span></h3>
      <button>Checkout</button>
      <button onClick={clearCard} className="clear-cart">Clear Cart</button>
    </div>
    </section>
  </div>;
};

export default ContextCart;
