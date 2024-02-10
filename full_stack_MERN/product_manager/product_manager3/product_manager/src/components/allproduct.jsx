import React from 'react'
import {useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Allproduct(prop) {
    const {removeproduct,productlist, setProductlist} = prop;
    
    useEffect(()=>{
    	axios.get("http://localhost:5000/api/products")
    	.then((res)=>setProductlist(res.data))
    	.catch((err)=>console.log(err))
    });
    
    const deleteproduct=(id)=>{
        axios.delete("http://localhost:5000/api/products/"+id)
        .then(removeproduct)
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>All products</h2>
            {
                productlist.map((product, index)=>(
                
                    <div key={index}>
                        
                        <div className='products'>
                            <Link to={`/product/${product._id}`} className='link'>{product.title}</Link>
                            <div className='edit_delete'>
                                <Link to={"/product/edit/" + product._id} className='Edit'>
                                    Edit
                                </Link>
                                <button className='delete' onClick={(e)=>deleteproduct(product._id)}>Delete</button>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}
export default Allproduct;