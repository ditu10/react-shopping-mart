import React from 'react';
import image from '../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div>
            <h2 className="bg-yellow-400 text-2xl italic py-3 text-blue-700">You have successfully placed your order.</h2>
            <img className="mx-auto w-1/3" src={image} alt="" />
        </div>
    );
};

export default PlaceOrder;