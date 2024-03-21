import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assist/assets";
const LogInPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("sign up");
  return (
    <div className="login_pop">
      <form className="login_pop_container">
        <div className="login_popup_title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login_popup_inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "sign up" ? "Create account" : "Login"}</button>
        <div className="login_popup_condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a New Account ?
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already Have an Account ?
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogInPopUp;
