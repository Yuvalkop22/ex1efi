import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import More from './components/More';
import Home from './components/Home';

function App() {
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [shop, setShop] = useState("");
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home desc={desc} setDesc={setDesc} name={name} setName={setName} url={url}
          setUrl={setUrl} shop={shop} setShop={setShop}/>}/>
        <Route path={'/more'} element={<More desc={desc} setDesc={setDesc} name={name} setName={setName} url={url}
          setUrl={setUrl} shop={shop} setShop={setShop} />} />
      </Routes>
    </Router> 
  );
}

export default App;
