
import './App.css';
import PersonCard from './components/PersonCard.jsx'
function App() {
  return (
    <div className="App">
      
      <PersonCard 
      firstname={"rahal"} 
      lastname={"noussayer"}
      age={21}
      hairColor={"black"}
      />
      <PersonCard 
      firstname={"rahal"} 
      lastname={"hassen"}
      age={60}
      hairColor={"black"}
      />
      <PersonCard 
      firstname={"rahal"} 
      lastname={"mouhamed"}
      age={26}
      hairColor={"black"}
      />
      <PersonCard 
      firstname={"rahal"} 
      lastname={"taqwa"}
      age={16}
      hairColor={"black"}
      />
    </div>
  );
}

export default App;
