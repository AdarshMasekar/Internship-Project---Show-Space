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
  const handleSubmit = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if the stored username and password match the input values
    if (storedUsername === username && storedPassword === password) {
      alert("Login successful");
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };
  const handleSignUp= () =>{
    navigate("/#");
  }

  return (
   <div className="container login">
    <h1>Login</h1>
        <form className='form' onSubmit={handleSubmit}>
      
        <label htmlFor="username">Username</label>
            <input className='finput'
            type="text"
            id="username"
            name='username'
            placeholder='Enter your username'
            value={username}
            onChange={handleUsernameChange}
            />
        
          <label htmlFor="password">Password</label>
            <input className='finput'
            type="password"
            id="password"
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={handlePasswordChange}
            />
        
        <button className='fbutton' type="submit">Login</button>

        <h5 className="text mt-4 text-center">Don't have an account? <button className=" btn1" onClick={handleSignUp}>Sign Up</button></h5>
  
        </form>
   </div>
  );
};

export default LoginForm;