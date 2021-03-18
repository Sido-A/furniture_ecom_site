import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = (e) => {
    e.preventDefault();

    const newUser = {
      name: `${firstName} ${lastName}`,
      email,
      password,
    };
  };

  return (
    <div className="signup userForm">
      <div className="signup__container userForm__container container">
        <div className="signup__header userForm__header">
          <span>
            <Link to="/">Back</Link>
          </span>
          <span>
            <Link to="/login">Login</Link>
          </span>
        </div>

        <div className="signup__inputWrapper userForm__inputWrapper">
          <input
            id="firstName"
            name="firstname"
            className="userInput"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            id="lastName"
            name="lastname"
            className="userInput"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
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
          <button type="submit" className="button" onClick={register}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
