import './styles/App.css'
import React from 'react';
import MainPage from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Main/catalog.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Delivery from './components/Delivery/delivery.jsx';
import About from './components/AboutUs/AboutUs.jsx';
import { NotFound } from './NotFound.jsx';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
