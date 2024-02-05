import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
const Edit = () => {
    const {id}=useParams();
    const nav=useNavigate();
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState(0);
    const [description,setDescription]=useState("");
    
    useEffect(()=>{
        axios.get("http://localhost:5000/api/products/"+id )
        .then(res=>{
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err=>console.log(err))
    },[id])
  const subform=(e)=>{
    e.preventDefault();
    axios.patch("http://localhost:5000/api/products/"+id,{
      title,
      price,
      description
    })
    .then(res=>{
      console.log(res)
      nav('/')
    })

    .catch(err=>console.log(err))
    
  }
  return (
    <div>
        <h1>Edit Form</h1>
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
            <input className='btn' type="submit" value="Edit" />
        </form>
    </div>
  )
}

export default Edit;