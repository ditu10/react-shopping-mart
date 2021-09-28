import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product)
    return (
        <div className="grid grid-cols-4 gap-3 w-5/6 ml-auto border-b-2 py-5">
            <img  width="" src={props.product.img} alt="" />
            <div className="col-span-3 text-left space-y-3">
                <h2 className="text-indigo-500 text-l font-semibold">{props.product.name}</h2>
                <p className="pb-3"><small>by: {props.product.seller}</small></p>
                <p className="font-semibold">${props.product.price}</p>
                <p><small>Only {props.product.stock} left in stock - order soon</small></p>
                <button className="bg-yellow-400 px-8 py-1 rounded-2xl border-black border"><small><FontAwesomeIcon icon={faShoppingCart} />Add to cart</small></button>
            </div>
            
        </div>
    );
};

export default Product;