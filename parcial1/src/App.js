import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import Home from './Components/home';
import PartDetail from './Components/partDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/part/:partName" element={<PartDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;

