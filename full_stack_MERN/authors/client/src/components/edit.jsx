import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
function Edit() {
    const {id}=useParams();
    const nav=useNavigate();
    const [name,setName]=useState("")
    useEffect(()=>{
        axios.get("http://localhost:5000/api/authors/"+id)
        .then((res)=>setName(res.data.name))
    },[id])
  return (
    <div>
        <h1>Edit author</h1>
        <form>
            <div>
                <label htmlFor="name">Name :</label>
                <input onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <input type="submit" className='submit'/>
        </form>
    </div>
  )
}

export default Edit;