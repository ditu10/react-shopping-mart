import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../images/logo.png'
import './Header.css'

//  <a className="hover:bg-gray-200 py-2 px-5 inline-block hover:text-black" href="/Shop">Shop</a> 
const Header = () => {
    return (
        <div>
            <img width='22%' className="mx-auto my-2" src={img} alt="" />
            <nav className="bg-gray-900 text-white text-left px-12 text-l">
               <NavLink className="hover:bg-gray-200 py-2 px-5 inline-block hover:text-black" to="/Shop">Shop</NavLink>
               <NavLink className="hover:bg-gray-200 py-2 px-5 inline-block hover:text-black" to="/Orders">Order review</NavLink>
                <NavLink className="hover:bg-gray-200 py-2 px-5 inline-block hover:text-black" to="/Inventory">Manage Inventory</NavLink>
                
                
            </nav>
            <div className="py-5 bg-gray-800">
                <input className="w-3/4 py-1 px-2" type="text" placeholder="Type here to search"/>
            </div>
        </div>
        
    );
};

export default Header;