import react,{useState} from 'react'
import './App.css';
import Alltabs from './components/alltabs'
import Content from './components/content'
function App() {
  const x=[
      {label:"Tab 1",content:"tab 1 content is showing here"},
      {label:"Tab 2",content:"tab 2 content is showing here"},
      {label:"Tab 3",content:"tab 3 content is showing here"},
      {label:"Tab 4",content:"tab 4 content is showing here"},
      {label:"Tab 5",content:"tab 5 content is showing here"}
    ]
    const [tabs,setTabs]=useState(x);
  const [index,setIndex]=useState(0);
  
  const change =(i)=>{
      setIndex(i)
  }
  return (
    <div className="App">
      
      <Alltabs tabs={tabs} change={change}/>
      <Content tabs={tabs} index={index} />
    </div>
  );
}

export default App;
