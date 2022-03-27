import React from 'react';
import './Menu.css'
import {BsFillCartFill} from 'react-icons/bs'

const Menu = ({openModal, cart}) => {
    return (
        <div className='navbar'>
            <h1>Kopa Salik Store</h1>
            
        <div className='cart-counter' onClick={openModal}>
        <span>{cart.length}</span>
     <BsFillCartFill className='icon'></BsFillCartFill>
        </div>
        </div>
    );
};

export default Menu;