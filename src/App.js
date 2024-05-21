// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
       </Routes>
    </Router>
  );
}

export default App;
