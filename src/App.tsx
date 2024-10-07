import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';
import CryptoDetail from './Pages/CryptoDetail';
import './Styles/global.css'

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto/:id" element={<CryptoDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;

