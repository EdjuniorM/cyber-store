import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GenericCarousel.css';


const GenericCarousel = ({ getProducts, title }) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const productsData = await getProducts();
          setProducts(productsData);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, [getProducts]);
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
      };
    
  return (
    <div className="generic-carousel">
      <h2 className="text-center mb-4">{title}</h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="carousel-item">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <p className="product-name">{product.name}</p>
            </div>
          ))}
        </Slider>

    </div>
  );
};

export default GenericCarousel;