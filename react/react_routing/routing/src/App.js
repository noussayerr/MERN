import './App.css';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<ParamsComponent />} />
        <Route  path="/:word/:color/:bgCol" element={<ParamsComponent />}/>
      </Routes>

    </div>
  );
}

export default App;