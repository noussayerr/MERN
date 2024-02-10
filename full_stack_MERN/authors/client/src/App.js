import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/create';
import Edit from './components/edit';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main/>} />
        
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
