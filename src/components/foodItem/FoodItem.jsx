import React from "react";
import "./FoodItem.css";
import { assets } from "../../assist/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food_item">
      <div className="food_item_img_container">
        <img src={image} alt="" className="food_item_image" />
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food_item_desc">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
