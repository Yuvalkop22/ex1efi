import React from 'react'
import Product from './Product';
export default function ProductsList(productList) {
  return (
    productList.map(product => {
        return <Product key={product.name} product={product}/>
    })
  )
}

