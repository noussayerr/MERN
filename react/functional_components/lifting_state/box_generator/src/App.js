import React,{useState}from 'react';
import './App.css' ;
import Newbox from './components/new';
import Display from './components/display'
function App() {
  const [color,setColor]=useState([]);
  const newbox=(newcolor)=>{
    return (setColor([...color,newcolor]))
  }

  return (  
    <div className='App'>
      <Newbox newbox={newbox} />
      <Display color={color}/>
    </div>
    
  );
}
    
export default App;
