import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [authors,setAuthors]=useState([])

  
  useEffect(()=>{
      axios.get("http://localhost:5000/api/authors")
      .then((res)=>setAuthors(res.data))
      .catch((err)=>console.log(err))
    });
    const deleteauthor=(id)=>{
      axios.delete("http://localhost:5000/api/authors/"+ id)
    }
  return (
    <div>

        <h1>Favorite authors</h1>
        <Link to={"/create"}>ADD AUTHOR</Link>
        <table>
            <thead>
            <tr>
                <th>Author</th>
                <th>Action available</th> 
            </tr>
            </thead>
        {
            authors.map((author,indes)=>(
                <tbody>
                    <td>{author.name}</td>
                    <td className='action'>
                        <Link to={"/edit/"+ author._id} className='edit_delete' >Edit</Link>
                        <button className='edit_delete btn' onClick={(e)=>deleteauthor( author._id)}>Delete</button>
                    </td>
                </tbody>
            ))
        }
        </table>
    </div>
  )
}

export default Main