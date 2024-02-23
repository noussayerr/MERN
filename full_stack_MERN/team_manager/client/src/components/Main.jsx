import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const[players,setPlayers]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/players")
    .then((res)=>setPlayers(res.data))
    .catch((err)=>console.log(err))
  });
  const deletePlayer=(id)=>{
    axios.delete("http://localhost:5000/api/players/"+ id)
  }
  return (
    <div className='main'>
      <div className='nav'>
        <Link to={'/'}>List</Link>
        <Link to={'/create'}>Add Player</Link>
      </div>
        <table>
            <thead>
            <tr>
                <th>Player Name</th>
                <th>Peferred Position</th>
                <th>Actions</th> 
            </tr>
            </thead>
        
          <tbody>
            {
            players.map((player)=>(
              <tr key={player._id}>
                <td>{player.name}</td>
                <td>{player.preferred_position}</td>
                <td className='action'>
                <button className='btn' onClick={(e)=>deletePlayer( player._id)}>Delete</button>
                </td>
              </tr>
            ))}
          
          </tbody>
        
        </table>
    </div>
  )
}

export default Main