import React from 'react'
import '../Home.css'
import { useNavigate } from 'react-router-dom'
export default function Product(product) {
  const navigation = useNavigate()
  function nav(){
    navigation("/more=" + product.name)
  }
  return (
    <div className='expense-item' onClick={nav}>
      <h4 className='expense-item_description'>{product.name}<br />{product.price}₪</h4>
      <img style={{ border: '1px solid' }} src={product.imgUrl} alt={product.name} width="70dp" height="70dp" />
    </div>
  )
}
