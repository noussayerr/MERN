import './App.css';
import react,{useState} from "react"
function App() {
  const [animal,setanimal]=useState("");
  const [zoo,setzoo]=useState([]);
  const add=(e)=>{
    e.preventDefault()
    if(zoo.length<3){
      setzoo([...zoo,animal])
    }
    console.log("hey")
  }
  return (
   <div className='App'>
    <form onSubmit={add}>
      <p>{JSON.stringify(animal)}</p>
      <input type='text' onChange={(e)=>setanimal(e.target.value)} />
      <p>{zoo.length>=3 ?<p className='msg'>zoo include more then 3 animal</p>:""}</p>
      <p>{JSON.stringify(zoo)}</p>
      <input type='submit' value="submit" />
      
    </form>
   </div>

  )
}

export default App;
