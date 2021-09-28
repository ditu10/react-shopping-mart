import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const {img,name,price,seller,features,stock} = props.product;
    
    return (
        <div className="grid grid-cols-4 gap-3 w-5/6 ml-auto border-b-2 py-5">
            <img  width="" src={img} alt="" />
            <div className="col-span-3 text-left space-y-3">
                <h2 className="text-indigo-500 text-l font-semibold">{name}</h2>
                <div className="grid grid-cols-2 gap-5">
                    <div className=" space-y-3">
                        <p className="pb-3"><small>by: {seller}</small></p>
                        <p className="font-semibold">${price}</p>
                        <p><small>Only {stock} left in stock - order soon</small></p>
                        <button onClick={()=> props.handleAddToCart(props.product)} className="bg-yellow-400 px-8  rounded border-black border"><small><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</small></button>
                    </div>
                    <div className="pt-12">
                        <h1 className="font-bold text-l text-gray-700 mb-3">Features:</h1>
                        <ul className="ml-8">
                            {
                                features.map(feature => <li style={{padding:'0', lineHeight:'.9rem'}} className="ml-4 text-gray-500  list-disc	"><small className=""> {feature.description} : <span className="font-semibold text-gray-600">{feature.value}</span></small></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;