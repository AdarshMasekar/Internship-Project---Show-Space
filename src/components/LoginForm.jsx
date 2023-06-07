import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation here
    if (username.length === 0) {
      alert('Please enter a username');
      return;
    }

    if (password.length === 0) {
      alert('Please enter a password');
      return;
    }

    // Retrieve user data from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);

      // Check if entered credentials match
      if (username === user.username && password === user.password) {
        // Set a flag or token to indicate logged-in state
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful');

        // Redirect to home page
        navigate("/home");
      } else {
        console.log('Invalid credentials');
      }
    } else {
      console.log('User not found');
    }

    // Clear form inputs
    setUsername('');
    setPassword('');
  };

  const handleLogin= () =>{
    navigate("/home");
  }

  return (
   <div className="container login">
    <h1>Login</h1>
        <form className='form' onSubmit={handleSubmit}>
        <div>
            <input className='finput'
            type="text"
            id="username"
            placeholder='username'
            value={username}
            onChange={handleUsernameChange}
            />
        </div>
        <div>
            <input className='finput'
            type="password"
            id="password"
            placeholder='password'
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <button className='fbutton' type="submit">Login</button>

        <h5 className="text mt-4 text-center">Don't have an account? <button className=" btn1" onClick={handleLogin}>Register</button></h5>
  
        </form>
   </div>
  );
};

export default LoginForm;