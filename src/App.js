import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/Login';
import Profil from '../src/pages/Profil/Profil';

function App() {
  return (
    <Router basename="/ArgentBank-Frontend">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
