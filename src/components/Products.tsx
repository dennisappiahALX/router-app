import React, { useState } from 'react'
import { Product } from '../model/model'
import { Link } from 'react-router-dom';

interface ProductProps{
  sortBy : boolean
}

const Products = ({sortBy}: ProductProps) => {
  const [products, SetProducts] = useState<Product[]>([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
  ])

  return (
    <div>
      <h1>Products</h1>
      <ul>
      {products.map(product => 
      <li key={product.id}>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </li>)}
     </ul>
    </div>
  )
}

export default Products