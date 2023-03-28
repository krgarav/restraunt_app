import React from "react";
import classes from "./Header.module.css";
import image from "../../Assets/meals.jpg";
import HeaderButtonCard from "./HeaderButtonCard";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButtonCard onClick={props.onClickYourCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="meals"></img>
      </div>
    </React.Fragment>
  );
};
export default Header;
