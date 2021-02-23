import React from "react";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/magazine">Magazine</NavLink>
            </li>
          </ul>
        </div>

        <div className="header__mobileUnderlay">
          <Link className="cart" to="#">
            <ShoppingCartIcon />
          </Link>

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
