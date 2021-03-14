import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginForm">
      <div className="loginForm__container container">
        <div className="loginForm__header">
          <span>
            <Link to="/">Back</Link>
          </span>
          <span>Sign up</span>
        </div>

        <div className="loginForm__inputWrapper">
          <input
            id="email"
            className="userInput"
            type="email"
            placeholder="email@address.com"
          />
          <input
            id="password"
            className="userInput"
            type="password"
            placeholder="password"
          />
          <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
