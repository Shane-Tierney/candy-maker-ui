import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import CandyMakers from './pages/CandyMakers/CandyMakers';
import Error from './pages/Error/Error';
import ManufacturerInfo from './pages/ManufacturerInfo/ManufacturerInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manufacturers/:id" element={<ManufacturerInfo/>}/>
        <Route path="/" element={<CandyMakers/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
