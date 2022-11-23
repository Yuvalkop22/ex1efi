import React from 'react'
import './Home.css'
import './Product/Product.css'
import Product from './Product/Product';
export default function Home(props) {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>List Of Products</h1>
      { 
          props.props.map(product=>
            <Product name ={product.name} price={product.price} imgUrl={product.imgUrl}/>)
      }

    </div>
  )
}


