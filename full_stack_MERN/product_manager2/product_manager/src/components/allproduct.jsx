import React from 'react'
import {useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Allproduct(prop) {
    const {productlist, setProductlist} = prop;
    
    useEffect(()=>{
    	axios.get("http://localhost:5000/api/products")
    	.then((res)=>setProductlist(res.data))
    	.catch((err)=>console.log(err))
    });
    
    return (
        <div>
            <h2>All products</h2>
            {
                productlist.map((product, index)=>(
                
                    <div key={index}>
                        
                        <p>
                            <Link to={`/product/${product._id}`} className='link'>{product.title}</Link>
                        </p>
                        
                    </div>
                ))
            }
        </div>
    )
}
export default Allproduct;