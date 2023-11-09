import React, { useEffect, useState } from 'react';
import ProductsService from '../../../data/services/ProductsService';
import ProductModel from '../../../domain/models/ProductModel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe as classes do Bootstrap
import { Button } from "react-bootstrap";
import './ProductsList.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await new ProductsService().getProducts();
        const mappedProducts = productsData.map((product, index) => {
          return new ProductModel(product.name, product.imageUrl, product.affiliateLink);
        });
        setProducts(mappedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (affiliateLink) => {
    window.open(affiliateLink, '_blank');
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4">Products List</h2>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ cursor: 'pointer' }} onClick={() => handleProductClick(product.affiliateLink)}>
            {/* <div className="card"> */}
              <img src={product.imageUrl} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <p className="card-text text-center">{product.name}</p>
                {/* Use o componente Button do react-bootstrap */}
                <Button className="mx-auto d-block" variant="primary" onClick={() => handleProductClick(product.affiliateLink)}>
                  Ver Detalhes
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;