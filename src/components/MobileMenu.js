import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

function MobileMenu({ mobileMenuToggle, isOpen }) {
  return (
    <>
      <div className={`overlay ${isOpen ? "open" : "close"}`}></div>
      <div className="header__mobile container container--pall hide-for-desktop">
        <div
          className={`header__mobileOverlayMenu ${isOpen ? "open" : "close"}`}
        >
          <div
            onClick={mobileMenuToggle}
            id="hamburgerMenu"
            className={`hamburgerMenu ${isOpen ? "open" : "close"}`}
          >
            {/* need to add open on click */}
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul>
            <li>
              <NavLink exact to="/" onClick={mobileMenuToggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={mobileMenuToggle}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/magazine" onClick={mobileMenuToggle}>
                Magazine
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="header__mobileUnderlay">
          <Cart />
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
    </>
  );
}

export default MobileMenu;
