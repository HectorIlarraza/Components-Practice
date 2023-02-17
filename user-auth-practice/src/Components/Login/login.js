import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
      const authToken = 'my-auth-token';
  
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
  
  
  return (
    <div className='auth-component'>
      {isLoggedIn ? (
        <div>
          <h2>You are logged in!</h2>
          <button onClick={handleLogoutButtonClick}>Log out</button>
        </div>
      ) : (
        <form onSubmit={handleLoginFormSubmit}>
          <label>
            Email:
            <input className="input-field" type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input className="input-field" type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button className="login-btn" type="submit">Log in</button>
        </form>
      )}
    </div>
  )
}

export default Login;