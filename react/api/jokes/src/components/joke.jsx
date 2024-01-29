import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function Joke() {
  const [joke,setJoke]=useState("// Joke goes here")
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const changejoke=(e)=>{
    e.preventDefault()
    axios.get('https:icanhazdadjoke.com', config)
    .then(res=>setJoke(res.data))
  }
  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" className="joke">{joke.joke}</div>
      <button className="btn" onClick={changejoke}>Get Another Joke</button>
    </div>
  )
}
export default Joke;
