import { useState } from 'react';
import './App.css';
function App() {
  const [pokemon,setPokemon]=useState([]);
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then(res=>res.json())
  .then(data=>(
    setPokemon(data.results)
  )
    )
  .catch((err)=>console.log(err))
  return (
    <div className="App">
      {pokemon.map((pi,i)=>{
        return(
          <div>
            <li key={i}>{pi.name}</li>
          </div>
        )
      })}
    </div>
)
}

export default App;
