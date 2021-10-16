import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import GetProducts from '../Hooks/GetProducts';
import getProducts from '../Hooks/GetProducts';
import { deleteDB as cleartheCart, getDb, removeToDb } from '../localStorage/localstorage';
import Order from '../Order/Order';
import OrderItem from '../OrderItem/OrderItem';
import { useHistory } from 'react-router';


const Reviews = () => {
    const [products] = GetProducts();
    const [orders, setOrders] = useState([]);
    const history = useHistory()

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
    }, [products])

    const handleRemoveItem = (key) => {
        // console.log(key);
        const newOrders = orders.filter(product => product.key !== key);
        setOrders(newOrders);
        removeToDb(key);

    }

    const btn_placeOrder = () => {
        // cleartheCart();
        history.push('/shipping');
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
                    <Order orders={orders}>
                        
                        <button onClick={btn_placeOrder} className="bg-yellow-400 px-8 my-3 rounded border-black border"><small><FontAwesomeIcon icon={faClipboardCheck} /> Proceed to ship</small></button>
                        
                    </Order>
                </div>
            </div>

        </div>
    );
};

export default Reviews;