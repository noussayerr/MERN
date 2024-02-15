
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import Game from './components/Games';


function App() {
  return (
    <div className="App">
      <Link to={"/"}>Manage players</Link>
      <Link to={"/game/1"}>Manage players status</Link>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/create'  element={<Create />}/>
        <Route path='/game/:gameId'  element={<Game />}/>
      </Routes>
    </div>
  );
}

export default App;
