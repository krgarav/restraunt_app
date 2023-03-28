import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import "./App.css";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const closeCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <React.Fragment>
      {cartIsShown && <Cart onClickClose={closeCartHandler} />}
      <Header onClickYourCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
