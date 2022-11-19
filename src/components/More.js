import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function More(props) {
  const navigation = useNavigate();
  const nav = () => {
    navigation("/");
  }
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <h1>More information about {props.name}</h1>
      <h3>Shop name = {props.shop}</h3>
      <h3>Little description = {props.desc}</h3>
      <h3>Another Photo</h3>
      <img src={props.url} alt={props.name} width="100dp" height="100dp"/>
      <br/>
      <button onClick={nav}>Click to choose again</button>
    </div>
  )
}
