import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';

const Body = () => {
    const [products,setProducts]=useState([])
    const [carts,setCarts]=useState([])

    useEffect(() => {
        // console.log('use effect e aisi')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, [])
    
    const handleAddToCart = (product) => {
        
        const newCart = [...carts, product];
        setCarts(newCart);
        
    }

    return (
        <div className="grid grid-cols-5 py-5">

            <div className="col-span-4 border-r-2 pr-5">
                {
                    products.map(product=><Product handleAddToCart={handleAddToCart} product={product}></Product>)
                }
            </div>

            <div>
                <Order orders={carts}></Order>
            </div>
            
            
        </div>
    );
};

export default Body;