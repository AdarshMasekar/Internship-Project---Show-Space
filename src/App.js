import React from 'react';
import "./styles/App.css";
import BookingPage from './components/BookingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  
  return ( 
    <Router>
      <Routes>
        <Route exact path="/" element={<RegisterForm />} /> 
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;