import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assist/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

import cart from "/trolley_4290854.png";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmout } = useContext(StoreContext);

  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar_manu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore_menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app_download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar_right">
        <div className="navbar_search_icon">
          <Link to="/cart">
            <img src={cart} alt="" />
          </Link>
          <div className={getTotalCartAmout() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
