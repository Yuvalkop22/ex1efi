import React from 'react'
export default function Product(product) {
  // const navigation = useNavigate()
  
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <img src={product.imgUrl} alt={product.name} width="80dp"></img>
    </div>
  )
}
