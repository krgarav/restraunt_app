import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "m1", name: "sushi", amount: "2", price: "35.62" }].map(
        (item) => {
          return <li key={item.id}>{item.name}</li>;
        }
      )}
    </ul>
  );

  return (
    <Modal onClickBackdrop={props.onClickClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClickClose} className={classes["btn--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
