import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../Images/furniture16.png";

function Header() {
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const fadeElems = document.querySelectorAll(".has-fade");
  const [isOpen, setIsOpen] = useState(false);

  const hasFadeHandler = () => {
    setIsOpen(!isOpen);
    console.log("IsOpen?", isOpen);
  };
  return (
    <header className="header">
      <div className={`overlay ${isOpen ? "open" : ""}`}></div>
      <div className="header__mobile container--pall hide-for-desktop">
        <div className={`header__mobileOverlayMenu ${isOpen ? "close" : ""}`}>
          <div
            onClick={hasFadeHandler}
            id="hamburgerMenu"
            className={`hamburgerMenu ${isOpen ? "close" : ""}`}
          >
            {/* need to add open on click */}
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/mag">Magazine</NavLink>
            </li>
          </ul>
        </div>

        <div className="header__mobileUnderlay">
          <NavLink to="#">
            <ShoppingCartIcon />
          </NavLink>

          <div
            onClick={hasFadeHandler}
            id="hamburgerMenu"
            className="hamburgerMenu default"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="header__desktop container container--pall hide-for-mobile">
        <div className="header__desktopLeft">
          <img src={`${logo}`} alt="logo" />
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/mag">Magazine</NavLink>
            </li>
          </ul>
        </div>

        <div className="header__desktopRight">
          <NavLink to="#">
            <ShoppingCartIcon />
          </NavLink>

          <NavLink className="login" to="#">
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
