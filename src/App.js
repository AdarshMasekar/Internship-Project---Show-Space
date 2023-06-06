import React from 'react';
import "./styles/App.css";
import BookingPage from './components/BookingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;