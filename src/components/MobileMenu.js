import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { useStateValue } from "../StateProvider";

function MobileMenu({ mobileMenuToggle, isOpen }) {
  const [{ user }, dispatch] = useStateValue();

  // useEffect(() => {}, [user]);

  const logoutHandler = () => {
    dispatch({
      type: "LOGOUT_USER",
      user: null,
    });
  };

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
            <li>
              {!user ? (
                <NavLink to="/login" onClick={mobileMenuToggle}>
                  Login
                </NavLink>
              ) : (
                <NavLink
                  to="/"
                  onClick={mobileMenuToggle}
                  onClick={logoutHandler}
                >
                  Logout
                </NavLink>
              )}
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
