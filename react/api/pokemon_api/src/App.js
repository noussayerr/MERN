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
  return (
    <div className="App">
      {pokemon.map((pi,i)=>{
        return(
          <div>
            <p key={i}>{pi.name}</p>
          </div>
        )
      })}
    </div>
)
}

export default App;
