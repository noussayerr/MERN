import React from 'react'
import { useState } from 'react';
import {useNavigate}from 'react-router-dom'
import axios from 'axios';

function Create() {
  
  const [errs,setErr]=useState("")
  const nav=useNavigate();
  const [name,setName]=useState("");
  const subform=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/api/authors",{
      name
    })
    .then(res=>{
        
        nav("/");
    })

    .catch(err=> setErr(err.response.data.errors))
    
    
  }
  return (
    <div>
        <h1>Add author</h1>
        <form onSubmit={subform}>
        {
                  errs.name?
                  <p>{errs.name.message}</p> 
                  :null 
                }
            <div>
                <label htmlFor="name">Name :</label>
                <input onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <input type="submit" className='submit' />
            <input type="button" className='submit' onClick={(e)=>{nav('/')}} value="Cancel" />
        </form>
    </div>
  )
}

export default Create;