
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import Game from './components/Game';


function App() {
  return (
    <div className="App">
      <Link to={"/"}>Manage players</Link>
      <Link to={"/game"}>Manage players status</Link>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/create'  element={<Create />}/>
        <Route path='/game'  element={<Game />}/>
      </Routes>
    </div>
  );
}

export default App;
