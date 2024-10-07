import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
  

 

  return (
    <div>
      <h2>Product Listing</h2>
      <p>Loading...</p>
       <p style={{ color: 'red' }}>error</p>
      <div>
        
          <ProductCard/>
       
      </div>
    </div>
  );
};

export default ProductListingPage;
