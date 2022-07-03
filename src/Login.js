import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("signInt", auth);
        if (auth) history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("auth object", auth);
        if (auth) history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to StevenCandles Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button
          type="submit"
          onClick={register}
          className="login_registerButton"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
