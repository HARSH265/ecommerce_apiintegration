import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';

const ProductListingPage = () => {
  const dispatch= useDispatch();
  const {items,loading,error} = useSelector((state)=>state.products)


  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch])
 

  return (
    <div>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
 
      <div>
        
      {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
       
      </div>
    </div>
  );
};

export default ProductListingPage;
