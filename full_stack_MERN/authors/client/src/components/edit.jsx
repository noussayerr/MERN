import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
function Edit() {
    const {id}=useParams();
    const nav=useNavigate();
    const [name,setName]=useState("")
    const [errs,setErr]=useState("")
    useEffect(()=>{
        axios.get("http://localhost:5000/api/authors/"+id)
        .then((res)=>setName(res.data.name))
        .catch((err)=>console.log(err))
    },[id])
    const subform=(e)=>{
        e.preventDefault()
        axios.patch("http://localhost:5000/api/authors/"+id,{name})
        .then((res)=>{
            nav("/");
        })
        .catch((err)=>{
            setErr(err.response.data.errors)
            
        })

        }
    
  return (
    <div>
        <h1>Edit author</h1>
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
            <input type="submit" className='submit'/>
            <input type="button" className='submit' onClick={(e)=>{nav('/')}} value="Cancel" />
        </form>
    </div>
  )
}

export default Edit;