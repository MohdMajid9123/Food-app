import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assist/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore_menu" id="explore_menu">
      <h1>explore our menu</h1>
      <p className="explore_menu_text">
        choose from a diverse menu featuring a delectable array
      </p>
      <div className="explore_menu_list">
        {menu_list.map((item, index) => {
          const { menu_name, menu_image } = item;
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === menu_name ? "All" : menu_name))
              }
              key={index}
              className="explore_menu_list_item"
            >
              <img
                className={category === menu_name ? "active" : ""}
                src={menu_image}
                alt=""
              />
              <p>{menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
