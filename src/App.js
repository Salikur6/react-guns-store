import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Menu from './Components/Menu/Menu'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
  const [guns, setGuns] =useState([]);
  const [cart, setCart] =useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  const handleAddToCart = (gun) =>{
    const newCart = [...cart, gun]
    setCart(newCart)
    console.log(newCart)
  }

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data));
  },[])
  return (
    <div>
      <Menu openModal={openModal} cart={cart}></Menu>
      <div className="card-container">
      {
        guns.map(gun=><Card key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Card>)
      }
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <button onClick={closeModal}>X</button>
        {
          cart.map(cartGun => <h3 key={cartGun.id}>{cartGun.name}</h3>)
        }
      </Modal>
    </div>
  );
}

export default App;
