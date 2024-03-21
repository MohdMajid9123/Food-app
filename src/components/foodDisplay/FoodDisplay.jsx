import React, { useContext } from "react";
import "./FoodDisplay.css";

import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food_display" id="food_display">
      <h2>Top Dishesh Near You</h2>
      <div className="food_display_list">
        {food_list.map((item, index) => {
          const { _id, name, description, price, image } = item;
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={_id}
                name={name}
                description={description}
                price={price}
                image={image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
