import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_contents">
        <h2>Order You Favourite Food Here</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
          corrupti.
        </p>
        <a href="#explore_menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
