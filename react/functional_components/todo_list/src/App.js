import react,{useState} from 'react'
import './App.css';
import Form from './components/form'
import List from './components/list'


function App() {
  
  const [list,setList]=useState([]);
  
  const add=(n) =>{
    setList([...list,n]);
  }
  const Delete=(i)=>{
    const newlist=list.filter((dl,x)=>{return (x!=i)} )
    setList(newlist)
    console.log(list)
  }
  return (
    <div className="App">
      <Form add={add}/>
      <List list={list} Delete={Delete}/>
    </div>
  );
}

export default App;
