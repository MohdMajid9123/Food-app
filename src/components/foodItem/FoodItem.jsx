import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assist/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { removeFromCart, addToCart, cartItems } = useContext(StoreContext);
  return (
    <div className="food_item">
      <div className="food_item_img_container">
        <img src={image} alt="" className="food_item_image" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            className="add"
            onClick={() => addToCart(id)}
            alt=""
          />
        ) : (
          <div className="food_item_counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
              className="add-2"
            />
          </div>
        )}
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
