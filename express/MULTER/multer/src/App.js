import './App.css';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [firstName,setName]=useState("");
  const [file, setFile] = useState()
  console.log(file)
  const subform=(e)=>{
    const formData = new FormData()
    for (let i = 0; i < file.length; i++) {
      formData.append('photo', file[i]);
    }
    formData.append("firstName",firstName)
    
    e.preventDefault();
    axios.post("http://localhost:8000/api/multer",formData,{ headers: {'Content-Type': 'multipart/form-data'}})
    .then(res=>{console.log(res)})
    .catch(err=>console.log(err))}
  return (
    <form onSubmit={subform} >
      <label>firstname :</label>
        <input type='text' onChange={(e)=>{setName(e.target.value)}} />
        <input
          onChange={e => setFile(e.target.files)} 
          type="file" 
          accept="image/*"
          multiple
        ></input>
        <input type='submit' />
        <img src='http://localhost:8000/images/21221965c5adbf89af8221180e121843' />
    </form>
  );
}

export default App ;
