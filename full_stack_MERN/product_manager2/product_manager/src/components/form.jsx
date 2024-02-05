import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function Form(prop) {
    const {productlist, setProductlist} = prop;
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState(0);
    const [description,setDescription]=useState("");

  const subform=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/api/products",{
      title,
      price,
      description
    })
    .then(res=>{
      setProductlist([...productlist,res.data]);
      setTitle("");
      setPrice("");
      setDescription("");
    })

    .catch(err=>console.log(err))
    
  }
  return (
    <div>
      <h1>Product Manager</h1>
      <form onSubmit={subform}>
        <div className='main'>
          <div className='labels'>
            <label htmlFor="title">Title :</label>
            <label htmlFor="price">Price :</label>
            <label htmlFor="description">Description :</label>
          </div>
          <div className='inputs'>
            <input onChange={(e)=>setTitle(e.target.value)} value={title} />
            <input name="price" type="number" onChange={(e)=>setPrice(e.target.value)}value={price}/>
            <input name="description" type="text" onChange={(e)=>setDescription(e.target.value)}value={description}/>
          </div>
        </div>
        <input className='btn' type="submit" value="create" />
        </form>
    </div>
  );
}
export default Form