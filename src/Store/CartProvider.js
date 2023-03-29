import React, { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = { items: [], totalAmount: 0 };
const cardReducer = (state,action) => {
if(action.type==="ADD"){
  const updateItems=state.items.concat(action.item);
  const updatedTotalAmount=state.totalAmount+ action.item.price*action.item.amount;
  return {
    items:updateItems,
    totalAmount:updatedTotalAmount
  }
}
  return defaultCartState;
};

const CardProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cardReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartState({type:"ADD",item:item})
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({type:"REMOVE"})
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CardProvider;
