import './App.css';
import { Route,Routes} from 'react-router-dom';
import Main from './pages/main';
import Product from './components/product';
import Edit from './components/edit';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/product/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
