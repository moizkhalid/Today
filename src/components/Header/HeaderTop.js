import React from "react";
import logo from "../../images/logo.svg";
import burger_menu from "../../images/burger_menu.svg";
import moon from "../../images/moon.svg";
const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="top-left-corner">
          <div className="menu">
            <img src={burger_menu} alt="burger_menu" />
            <span>MENU</span>
          </div>
          <img className="toggle-mode" src={moon} alt="moon" />
        </div>
        <img src={logo} className="logo" alt="logo" />
      </div>
    </div>
  );
};

export default HeaderTop;
