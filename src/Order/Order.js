import React from 'react';

const Order = () => {
    return (
        <div>
            <h1 className="text-xl font-bold mb-3">Order summary</h1>
            <p className="mb-3">Items Ordered : 0</p>
            <div className="text-left ml-6">
                
                <p><small>Items:</small></p>
                <p><small>Shipping & Handling:</small></p>
                <p><small>Total before tax:</small></p>
                <p><small>Estimated tax:</small></p>
                <p className="text-red-700 font-bold">Order Total:</p>
                
            </div>
        </div>
    );
};

export default Order;