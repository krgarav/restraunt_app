import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Chicken",
    description: "Fresh meat with butter added",
    price: 220.99,
  },
  {
    id: "m2",
    name: "Palak Paneer",
    description: "Spinach with freshness of Dairy",
    price: 160.5,
  },
  {
    id: "m3",
    name: "Chicken Tandoor",
    description: "Juicy, raw, meaty",
    price: 120.99,
  },
  {
    id: "m4",
    name: "Mix Veg",
    description: "Healthy...and green...",
    price: 180.99,
  },
];
const AvailabeMeals = (props) => {
  const mealData = DUMMY_MEALS.map((data) => {
    return (
      <MealItem
        key={data.id}
        name={data.name}
        description={data.description}
        price={data.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealData}</ul>
      </Card>
    </section>
  );
};

export default AvailabeMeals;
