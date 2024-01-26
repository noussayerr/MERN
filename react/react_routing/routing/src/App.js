import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Params from './components/Params';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<Params />} />
        <Route  path="/:word/:color" element={<Params />}/>
        <Route  path="/:word/:color/:bgc" element={<Params />}/>
      </Routes>

    </div>
  );
}

export default App;