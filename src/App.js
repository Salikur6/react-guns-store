import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Menu from './Components/Menu/Menu'

function App() {
  const [guns, setGuns] =useState([]);
  const [cart, setCart] =useState([]);

  const handleAddToCart = (gun) =>{
    const newCart = [...cart, gun]
    setCart(newCart)
  }

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data));
  },[])
  return (
    <div>
      <Menu></Menu>
      <div className="card-container">
      {
        guns.map(gun=><Card key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Card>)
      }
      </div>
    </div>
  );
}

export default App;
