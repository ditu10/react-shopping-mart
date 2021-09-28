import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';

const Body = () => {
    const [products,setProducts]=useState([])

    useEffect(() => {
        console.log('use effect e aisi')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    },[])

    return (
        <div className="grid grid-cols-5 py-5">

            <div className="col-span-4 border-r-2 pr-5">
                {
                    products.map(product=><Product product={product}></Product>)
                }
            </div>

            <div>
                <Order></Order>
            </div>
            
            
        </div>
    );
};

export default Body;