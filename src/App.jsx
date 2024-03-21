import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/footer/Footer";
import ScrollBtn from "./components/scrollBtn/ScrollBtn";
import LogInPopUp from "./components/logInPopUp/LogInPopUp";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LogInPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <ScrollBtn />
      <Footer />
    </>
  );
};

export default App;
