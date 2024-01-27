import { useParams } from 'react-router-dom';
import axios from 'axios';
import React,{ useEffect,useState } from 'react';
const Planet=()=> {
  const {id}=useParams();
  const [planet,setPlanet]=useState([]);
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/planets/${id}/`)
    .then(res=>setPlanet([res.data]))
    
  },[id])
  console.log(planet)
  return (
    planet.map((p)=>{
      return(
        <div key={id} className='result'>
          <h1>{p.name}</h1>
          <h3>Climate{p.climate}</h3>
          <h3>Terrain{p.terrain}</h3>
          <h3>Surface Water{p.surface_water}</h3>
          <h3>Population {p.population}</h3>
        </div>
        )
    })
  )
}
export default Planet;