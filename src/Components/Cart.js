import React, { createContext, useEffect, useReducer } from 'react';
import './cart.css';
import ContextCart from './ContextCart';
import { products } from './Products';
import { reducer } from './reducer';

export const CartContext = createContext(); // Create Global Context HOOKS

const intialState = { // initial State Come Reducer
  items : products,
  totalAmount: 0,
  totalItem: 0,
}

const Cart = () => {

  const [state, dispatch] = useReducer(reducer, intialState); // reducer state

  // remove cart item individuali
  
  const removeItem = (id) => {
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id
    })
  }
  // Clear all cart items

  const clearCard = () => {
    return dispatch({
      type:"CLEAR_CARD"
    })
  }
  // Increment Qantity Value 

  const inCrement = (id) => {
    return dispatch({
      type:"INCREMENT",
      payload:id
    })
  }
  // Decrement Qnantity Value 

  const deCrement = (id) => {
    return dispatch({
      type:"DECREMENT",
      payload:id
    })
  }

  useEffect(() => {
    return dispatch({
      type:"GET_ITEM"
    })
  }, [state.items]);

  return <>
    <CartContext.Provider value={{...state, removeItem, clearCard, inCrement, deCrement}}> {/*Pass value GLobal Context */}
      <ContextCart /> {/* Call Child Components */}
    </CartContext.Provider>
  </>;
};

export default Cart;
