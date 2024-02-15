import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Create = () => {
    const nav=useNavigate()
    const [name,setName]=useState("")
    const [preferred_position,setPosition]=useState("")
    const [errs,setErr]=useState("")
    const subform=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/players",{
          name,preferred_position
        })
        .then(res=>{
            console.log(res)
            nav("/");
        })
    
        .catch(err=> {
            setErr(err.response.data.errors)
        })
        
        
      }
  return (
    <div>
        <Link to={'/'}>List</Link>
        <Link to={'/create'}>Add Player</Link>
        <form onSubmit={subform} >
            {
                errs.name?
                <p>{errs.name.message}</p>
                :
                null
            }
            <label htmlFor="name">Player Name :</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            {
                errs.preferred_position?
                <p>{errs.preferred_position.message}</p>
                :
                null
                
            }
            <br />
            <label htmlFor="preferred">Preferred Position :</label>
            <input type="text" onChange={(e)=>setPosition(e.target.value)} value={preferred_position}/>
            <button type='submit'></button>
        </form>
    </div>
  
    )
}

export default Create