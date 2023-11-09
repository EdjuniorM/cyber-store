import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './presentation/pages/HomePage/HomePage';
import HelloWorld from './presentation/components/HelloWorld/HelloWorld';
import AppBar from './presentation/components/AppBar/AppBar'; 
import ProductsList from './presentation/components/Products/ProductsList';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <AppBar />
        <Routes>
          <Route path="/helloworld" element={<HelloWorld />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;