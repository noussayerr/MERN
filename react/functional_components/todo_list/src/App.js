import {useState} from 'react'
import './App.css';
import Form from './components/form'
import List from './components/list'


function App() {
  
  const [list,setList]=useState([]);
  const add=(n) =>{
    const x={
      cont:n,
      statu:false
    }
    setList([...list,x]);
    
  }
  const Delete=(i)=>{
    const newlist=list.filter((dl,x)=>{return (x!==i)} )
    setList(newlist)
    
  }
  const change=(a)=>{
    const update=list.map((l)=>
    {
      if(l===a){
        const newlist={...l};
        newlist.statu= !newlist.statu;
        return newlist;
      }
      else{
        return l
      }
    })
    setList(update) 
  }
  return (
    <div className="App">
      <Form add={add}/>
      <List list={list} Delete={Delete} change={change}/>
    </div>
  );
}

export default App;
