import React from "react";
import { NavLink, Link } from "react-router-dom";
import Cart from "./Cart";
import logo from "../Images/logo64.png";

function DesktopMenu() {
  return (
    <>
      <div className="header__desktop container container--prl hide-for-mobile">
        <div className="header__desktopLeft">
          {/* <div>Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
          <img className="logo" src={`${logo}`} alt="logo" />
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

        <div className="header__desktopRight">
          <Cart />

          <Link className="login" to="#">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default DesktopMenu;
