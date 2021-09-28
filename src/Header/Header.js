import React from 'react';
import img from '../images/logo.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            <img width='22%' className="mx-auto mb-3" src={img} alt="" />
            <nav className="bg-gray-900 text-white text-left px-12 text-l">
                <a className="hover:bg-gray-200 py-2 px-5 inline-block hover:text-black" href="/Shop">Shop</a> 
                <a className="hover:bg-gray-200 py-2 px-5 inline-block hover:text-black" href="/Order">Order Review</a> 
                <a className="hover:bg-gray-200 py-2 px-5 inline-block hover:text-black" href="/ManageInventory">Manage Inventory Here</a> 
            </nav>
            <div className="py-5 bg-gray-800">
                <input className="w-3/4 py-1 px-2" type="text" placeholder="Type here to search"/>
            </div>
        </div>
        
    );
};

export default Header;