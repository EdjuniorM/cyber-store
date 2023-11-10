import React from 'react';
import './HomePage.css';
import GenericCarousel from '../../components/GenericCarousel/GenericCarousel';
import ProductsService from '../../../data/services/ProductsService'

const HomePage = () => {
  return (
    <div>
      <div className="content">
        <h1>Bem vindo a loja</h1>
        <GenericCarousel getProducts={ProductsService.getProducts} title="Produtos Favoritos" />
        <div className="carousel-margin" />
        <GenericCarousel getProducts={ProductsService.getProducts} title="Pc de entrada" />
        <div className="carousel-margin" />
        <GenericCarousel getProducts={ProductsService.getProducts} title="Pc interme" />
      </div>
    </div>
  );
};

export default HomePage;