import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const ProductsDetail = () => {
  let { id } = useParams();
  let location = useLocation();
  let navigate = useNavigate();

  const handleSave = () => {
    // Navigate to /products after form save
    // navigate('/products'); 
    navigate('/products', { replace: true })
  };

    return (
      <div>
        <h1>Product Details with ID - {id} </h1>
        <h2>Current pathname: {location.pathname}</h2>
        <button onClick={handleSave}>Save</button>
      </div>
    );
  
}

export default ProductsDetail