import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import "./App.css";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CardProvider from "./Store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const closeCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CardProvider>
      {cartIsShown && <Cart onClickClose={closeCartHandler} />}
      <Header onClickYourCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
};

export default App;
