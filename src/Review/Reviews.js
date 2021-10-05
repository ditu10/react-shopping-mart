import React, { useEffect, useState } from 'react';
import GetProducts from '../Hooks/GetProducts';
import getProducts from '../Hooks/GetProducts';
import { getDb, removeToDb } from '../localStorage/localstorage';
import Order from '../Order/Order';
import OrderItem from '../OrderItem/OrderItem';


const Reviews = () => {
    const [products] = GetProducts();
    const [orders, setOrders] = useState([]);
    // let orders = localStorage.getItem('shopping-cart');
    // orders = JSON.parse(orders);
    // console.log(orders);
    // let items = [];
    // for (const key in orders) {
    //     console.log(key)
    //     const item = products.find(product => product.key === key);
    //     if (item) {
    //         item.quantity = orders[key];
    //         items.push(item);
    //     }

    // }

    useEffect(() => {
        
        if (products.length) {
            const savedDB = getDb();
            // console.log(savedDB);
            const orderdItems = [];
            for (const id in savedDB) {
                const item = products.find(product => product.key === id)
                const quantity = savedDB[id];
                item.quantity = quantity
                orderdItems.push(item);
            }
            console.log(orderdItems)
            setOrders(orderdItems)
            
        }
    },[products])

    const handleRemoveItem = (key) => {
        // console.log(key);
        
    }

    return (
        <div>
            <h2 className="text-4xl font-semibold text-yellow-400 italic">Order Review</h2>
            <div className="grid grid-cols-5 py-5">
                <div className="col-span-4 border-r-2 pr-5">
                    {
                        orders.map(item => <OrderItem handleRemoveItem={handleRemoveItem} item={item}></OrderItem>)

                    }
                </div>
                <div>
                    <Order isReview={true} orders={orders}></Order>
                </div>
            </div>

        </div>
    );
};

export default Reviews;