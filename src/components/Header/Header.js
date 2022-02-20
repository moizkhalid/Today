import React from "react";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container">
      <header className="header container">
        <HeaderTop />
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
