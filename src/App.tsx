import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/PageHome/PageHome';

function App() {
  return (
    <Routes>
      <Route path="/my-website" element={<Home />} />
    </Routes>
  );
}

export default App; 
