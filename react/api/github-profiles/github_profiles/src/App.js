import './App.css';

function App() {
  

  const search=(e)=>{
    e.preventDefault();
    console.log("hey")
  }

  return (
    <>
      <form className="user-form" id="form" onSubmit={search}>
        <input type="text" id="search" placeholder="Search a Github User" />
        <input type="submit"/>
      </form>
      <main id="main"></main>
    </>
  );
}

export default App;
