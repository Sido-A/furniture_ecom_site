import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth, provider } from "../firebase";

function Login() {
  const [{ user, product, cart }, dispatch] = useStateValue();
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "LOGIN_USER",
          user: result.user,
          product,
        });
        if (location.pathname === "/login") {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: "LOGIN_USER",
          user: result.user,
        });
        if (location.pathname === "/login") {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="loginForm userForm">
      <div className="loginForm__container userForm__container container">
        <div className="loginForm__header userForm__header">
          <span>
            <Link to="/">Back</Link>
          </span>
          <span>
            <Link to="signup">Sign up</Link>
          </span>
        </div>

        <form className="loginForm__inputWrapper userForm__inputWrapper">
          <input
            id="email"
            className="userInput"
            type="email"
            placeholder="email@address.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            id="password"
            className="userInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button" onClick={signIn}>
            Login
          </button>

          <button type="submit" className="button" onClick={signInWithGoogle}>
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
