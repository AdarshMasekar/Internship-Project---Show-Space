import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input is empty
    if (username === "" || email === "" || password === "") {
      alert("Please enter all the fields");
      return;
    }

    // Store the username and password details in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to the login form
    alert("Registration succussfull")
    navigate("/login");

    // Log the details of the user
    // console.log(data);
  };

  const handleLogin= () =>{
    navigate("/login");
  }

  return (
    <div className="container register">
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit} className="form">
      <label htmlFor="username">Name</label>
        <input className="finput"
          type="text"
          name = "username"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
         <label htmlFor="email">Email</label>
        <input className="finput"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
         <label htmlFor="password">Password</label>
        <input className="finput"
          type="password"
          name = "password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="fbutton" type="submit">Sign Up</button>
       <h5 className="text-center mt-4">Already have an account? <button className=" btn1" onClick={handleLogin}>Log In</button></h5>
      </form>
    </div>
  );
};

export default RegisterForm;