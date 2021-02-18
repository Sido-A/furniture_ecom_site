import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container  container">
        <div className="header__desktop">
          <div className="header__desktopLeft">
            <img src="#" alt="logo" />
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
              <img src="#" alt="cart" />
            </NavLink>

            <NavLink to="#">Login</NavLink>
          </div>
        </div>

        <div className="header__mobile">
          <div className="header__mobileLeft">
            <img src="#" alt="logo" />
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

          <div className="header__mobileRight">
            <NavLink to="#">
              <img src="#" alt="cart" />
            </NavLink>

            <div className="hamburgerMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
