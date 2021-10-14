import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

const getTotal = (orders) => {
    let totalPrice = 0;
    let shippingCost = 0;
    let totalBeforeTax = 0;
    let estimatedTax = 0;
    let orderTotal = 0;
    let totalQuantity = 0;

    for (const product of orders) {
        totalPrice += product.price*product.quantity;
        shippingCost += product.shipping*product.quantity;
        totalQuantity += product.quantity;
    }

    totalBeforeTax = totalPrice + shippingCost;
    estimatedTax = totalBeforeTax * .15;
    orderTotal = totalBeforeTax + estimatedTax;

    return [totalPrice, shippingCost, totalBeforeTax, estimatedTax, orderTotal,totalQuantity];
}

const Order = (props) => {
    const orders = props.orders;
    console.log(orders);
    
    const [totalPrice, shippingCost, totalBeforeTax, estimatedTax, orderTotal, totalQuantity]=getTotal(orders);

    return (
        <div>
            <h1 className="text-xl font-bold mb-1 py-1 border-2 bg-yellow-400">Order summary</h1>
            <p className="mb-3">Items Ordered : {totalQuantity}</p>
            <div className="text-left px-5 mx-auto  font-semibold">
                <div className="flex justify-between">
                    <p><small>Items price total: </small></p>
                    <p><small>${totalPrice.toFixed(2)}</small></p>
                </div>
                <div className="flex justify-between">
                    <p><small>Shipping & Handling : </small></p>
                    <p><small>${shippingCost.toFixed(2)}</small></p>
                </div>
                <div className="flex justify-between">
                    <p><small>Total before tax : </small></p>
                    <p><small>${totalBeforeTax.toFixed(2)}</small></p>
                </div>
                <div className="flex justify-between border-b-2 pb-1">
                    <p><small>Estimated tax : </small></p>
                    <p><small>${estimatedTax.toFixed(2)}</small></p>
                </div>
                <div className="flex justify-between pt-1">
                    <p className="text-red-700 font-bold">Order Total : </p>
                    <p className="text-red-700 font-bold">${(totalBeforeTax + estimatedTax).toFixed(2)}</p>

                </div>

                {props.children}


            </div>

            
        </div>
    );
};

export default Order;