import React, { useState, useEffect } from "react";
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/credits" element={<Home scrollToCredits />} />
          <Route path="/beats" element={<Home scrollToBeats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;