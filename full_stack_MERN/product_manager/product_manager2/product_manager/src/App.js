import './App.css';
import { Route,Routes} from 'react-router-dom';
import Main from './pages/main';
import Product from './components/product';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
