import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

const OrderItem = (props) => {
    const { name, quantity, price, seller } = props.item;
    const handleRemove = props.handleRemoveItem;
    return (
        <div>

            <div className="text-left border-b-2 py-4 w-3/4 mx-auto space-y-4">
                <h2 className="text-blue-600 text-l ">{name}</h2>
                <h2 className="text-red-500 font-semibold">$ {price}</h2>
                <small className="">Sold by: {seller}</small>
                <h2 className="">Quantity: {quantity}</h2>

                <button onClick={()=> handleRemove(props.item.key)} className="bg-yellow-400 px-8  rounded border-black border"><FontAwesomeIcon icon={faTrash} /> Remove</button>
            </div>
        </div>

    );
};




export default OrderItem;