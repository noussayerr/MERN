import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Form() {
    const [wor,setWor]=useState("");
    const [id,setId]=useState(0);
    const nav=useNavigate();
  const subform=(e)=>{
    e.preventDefault();
    nav(`/${wor}/${id}`)
  }
  return (
    <div> 
        <form onSubmit={subform}>
            <label htmlFor="searchfor">Searchfor :</label>
            <select onChange={(e)=>setWor(e.target.value)}>
                <option value=""  >*******</option>
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>
            <label htmlFor="id">ID :</label>
            <input name="id" type="text" onChange={(e)=>setId(e.target.value)}/>
            <input type="submit" value="Search..." />
        </form>
    </div>
  )
}
export default Form;