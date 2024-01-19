import React, { useEffect, useState } from 'react';
import '../assets/Styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the FakeStoreAPI
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span className="product-name">{product.title}</span>
            <span className="product-price">${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
