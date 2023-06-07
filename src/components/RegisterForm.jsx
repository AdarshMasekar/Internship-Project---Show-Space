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

    // Register the user
    const data = {
      username,
      email,
      password,
    };

    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });

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
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="form">
        <input className="finput"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="finput"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="finput"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="fbutton" type="submit">Register</button>
      </form>
       <h5 className="text mt-4">Already have an account? <button className=" btn1" onClick={handleLogin}>Login.</button></h5>
    </div>
  );
};

export default RegisterForm;