import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../Images/logo64.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuToggle = () => {
    setIsOpen(!isOpen);
    console.log("IsOpen?", isOpen);
  };
  return (
    <header className="header">
      <div className={`overlay ${isOpen ? "open" : ""}`}></div>
      <div className="header__mobile container--pall hide-for-desktop">
        <div className={`header__mobileOverlayMenu ${isOpen ? "close" : ""}`}>
          <div
            onClick={mobileMenuToggle}
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
            onClick={mobileMenuToggle}
            id="hamburgerMenu"
            className="hamburgerMenu default"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="header__desktop container hide-for-mobile">
        <div className="header__desktopLeft">
          {/* <div>Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
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
          <Link to="#">
            <ShoppingCartIcon />
          </Link>

          <Link className="login" to="#">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
