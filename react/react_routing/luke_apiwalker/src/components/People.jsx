import { useParams } from 'react-router-dom';
import axios from 'axios';
import React,{ useEffect,useState } from 'react';
const People=()=>{
  const {id}=useParams();
  const [people,setPeople]=useState([]);
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(res=>setPeople([res.data]))
    
  },[id])
  return (
    <div>
      {people.map((p)=>{
        return(
          <div className='result' key={id}>

            <h1>{p.name}</h1>
            <h3>Height : {p.height}</h3>
            <h3>Hair Color : {p.hair_color}</h3>
            <h3>Eye color : {p.eye_color}</h3>
            <h3>Skin COlor : {p.skin_color}</h3>
          </div>
        )
      })}
    </div>
  )
}
export default People;
