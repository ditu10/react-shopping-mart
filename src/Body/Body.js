import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import { addToDb,getDb,removeToDb} from '../localStorage/localstorage';

const Body = () => {
    const [products, setProducts] = useState([])
    
    const [carts, setCarts] = useState([]);
    
    

    useEffect(() => {
        // console.log('use effect e aisi')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, [])

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
            setCarts(orderdItems)
            
        }
    },[products])
    
    const handleAddToCart = (product) => {
        product.quantity = 1;
        const newCart = [...carts, product];
        setCarts(newCart);
        addToDb(product.key);
    }

    return (
        <div className="grid grid-cols-5 py-5">

            <div className="col-span-4 border-r-2 pr-5">
                {
                    products.map(product=><Product key={product.key} handleAddToCart={handleAddToCart} product={product}></Product>)
                }
            </div>

            <div>
                <Order isReview={false} orders={carts}></Order>
            </div>
            
            
        </div>
    );
};

export default Body;