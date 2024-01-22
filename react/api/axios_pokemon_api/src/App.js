import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons,setpokemons]=useState([])
  const axiospokemon=()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(data=> setpokemons(data.data.results))
    .catch(err=>console.log(err))
  }
  return (
    <div className="App">
      <button className='btn' onClick={axiospokemon}>Fetch Pokemon</button>
      {pokemons.map((pok)=>{
        return  (<li>{pok.name}</li>)
      })}
    </div>
  );
}

export default App;
