import './App.css';
import Form from './components/Form'
import { Route,Routes } from 'react-router-dom';
import People from './components/People'
import Planet from './components/planet'
function App() {
  return (
    
    <div className="App">
      <Form />
      <Routes> 
        <Route path ="/people/:id" element={<People />} />
        <Route path ="/planet/:id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
