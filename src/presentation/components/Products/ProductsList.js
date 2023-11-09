import React, { useEffect, useState } from 'react';
import ProductsService from '../../../data/services/ProductsService';
import ProductModel from '../../../domain/models/ProductModel';
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
    <div>
      <h2>Products List</h2>
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-card" onClick={() => handleProductClick(product.affiliateLink)}>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;