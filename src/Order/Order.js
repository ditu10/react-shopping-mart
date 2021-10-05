import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

const Order = (props) => {
    const orders = props.orders;
    console.log(orders);
    const total = (prev, next) => prev + next.price;
    const totalShipping = (prev, next) => prev + next.shipping;
    const totalprice = orders.reduce(total, 0);
    const totalShippingCost = orders.reduce(totalShipping, 0);
    const totalBeforeTax = (totalprice + totalShippingCost);
    const estimatedTax = (totalprice * .15);

    const totalOrder = (prev, next) => prev + next.quantity;
    const ordertotal = orders.reduce(totalOrder, 0);

    return (
        <div>
            <h1 className="text-xl font-bold mb-1 py-1 border-2 bg-yellow-400">Order summary</h1>
            <p className="mb-3">Items Ordered : {ordertotal}</p>
            <div className="text-left px-5 mx-auto  font-semibold">
                <div className="flex justify-between">
                    <p><small>Items price : </small></p>
                    <p><small>${totalprice.toFixed(2)}</small></p>
                </div>
                <div className="flex justify-between">
                    <p><small>Shipping & Handling : </small></p>
                    <p><small>${totalShippingCost.toFixed(2)}</small></p>
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

                {
                    props.isReview? 
                    <div className="text-center py-3">
                        <button className="bg-yellow-400 px-8  rounded border-black border"><small><FontAwesomeIcon icon={faClipboardCheck} /> Place Order</small></button>
                        </div>
                        :
                        <div className="text-center py-3">
                        <button className="bg-yellow-400 px-8  rounded border-black border"><small><FontAwesomeIcon icon={faClipboardCheck} /> Review your order</small></button>
                        </div>
                    
                }





            </div>

            <div>

            </div>
        </div>
    );
};

export default Order;