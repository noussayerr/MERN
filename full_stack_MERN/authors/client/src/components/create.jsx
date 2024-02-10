import React from 'react'
import { useState } from 'react';
import {useNavigate}from 'react-router-dom'
import axios from 'axios';

function Create() {
  
  
  const nav=useNavigate();
  const [name,setName]=useState("");
  const subform=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/api/authors",{
      name
    })
    .then(res=>{
        setName([...name,res.data]);
        nav("/");
    })

    .catch(err=>console.log(err))
    
  }
  return (
    <div>
        <h1>Add author</h1>
        <form onSubmit={subform}>
            <div>
                <label htmlFor="name">Name :</label>
                <input onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <input type="submit" className='submit'/>
        </form>
    </div>
  )
}

export default Create;