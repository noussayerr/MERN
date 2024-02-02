import './App.css';
import {useState} from 'react';
import axios from 'axios';
import Main from './components/Main'
function App() {
  const [github,setGithub]=useState("");
  const [data,setData]=useState([])
  const [repo,setRepo]=useState([])
  const search=(e)=>{
    
    e.preventDefault();
    axios.get(`https://api.github.com/users/${github}`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
    axios.get(`https://api.github.com/users/noussayerr/repos?sort=created`)
    .then(res=>setRepo(res.data))
    .catch(err=>console.log(err));
 
    
  }

  return (
    <>
      <form className="user-form" id="form" onSubmit={search}>
        <input type="text" id="search" placeholder="Search a Github User" onChange={(e)=>setGithub(e.target.value)} />
      </form>
      <Main data={data} repo={repo}/>
    </>
  );
}

export default App;
