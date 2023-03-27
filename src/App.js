import React from "react";
import Header from "./Components/Layout/Header"
import MealsSummary from "./Components/Meals/MealsSummary"
import "./App.css";

const App=()=> {
  return (
    <React.Fragment>
      <Header/>
      <MealsSummary/>
    </React.Fragment>
  );
}

export default App;
