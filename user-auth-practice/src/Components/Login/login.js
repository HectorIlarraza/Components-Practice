import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    // Here we would make an API request to authenticate the user
    // and receive a token if authentication is successful.
    // For simplicity, we'll just hardcode the token here.
    const authToken = "my-auth-token";

    // If we have a token, set the `isLoggedIn` state to `true`.
    if (authToken) {
      setIsLoggedIn(true);
    }
  };

  const handleLogoutButtonClick = () => {
    // Clear the token from local storage or cookies, depending on the implementation.
    // For simplicity, we'll just remove it from state here.
    setIsLoggedIn(false);
  };

  const handleSwitchMode = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
      <h2>{isLoggedIn ? "You are logged in!" : "Log In"}</h2>
        {isLoggedIn ? (
          <div>
            <button onClick={handleLogoutButtonClick}>Log out</button>
          </div>
        ) : (
          <form onSubmit={handleLoginFormSubmit}>
            <div className="auth-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="auth-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <p>
              <div className="auth-group">
                <label htmlFor="login-state">
                  {isLoggedIn ? "Don't have an account?" : "Already have an account?"}
                </label>
              </div>{" "}
              <button type="button" onClick={handleSwitchMode}>
                {isLoggedIn ? "Sign up" : "Login"}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
