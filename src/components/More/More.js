import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './More.css'
export default function More(props) {
  const navigation = useNavigate();
  // eslint-disable-next-line no-restricted-globals
  const location = useLocation();
  const queryString = location.pathname.split("=")[1];
  console.log(queryString)
  const nav = () => {
    navigation("/");
  }
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
    {
      props.props.filter(item => item.name === queryString).map(item=>
        <div>
          <h2>More information about {item.name}</h2>
          <h3>Shop Name = {item.shop}</h3>
          <h3>Little Description = {item.description}</h3>
          <img src={item.secImgUrl} alt={item.name} width="100dp" height="100dp"/>
        </div>
      )
    }
    <button onClick={nav}>Click Me To Search Again</button>
    </div>
  )
}
