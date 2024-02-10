import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
 function Product() {
    const nav=useNavigate();
    const [product,setProduct]=useState({})
    const {id}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:5000/api/products/"+id )
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[id])
  return (
    
    <div>
        <h1>{product.title}</h1>
        <h2>Price :{product.price}</h2>
        <h2>Description :{product.description}</h2>
        <button className='homebtn' onClick={(e)=>nav('/')} >Home</button>
    </div>
  )
}
export default Product;