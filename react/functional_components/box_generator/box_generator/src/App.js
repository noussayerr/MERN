import React from 'react';
import './App.css' ;
import MyNewComponent from './components/new';

function App() {
  
  const App= {
    textAlign : 'center',
  }
  
  return (  
    <div style={App}>
        <MyNewComponent her={ 
        <div>
          <h1>hey</h1> 
          <p>hey you</p>
        </div>
         }
         fin={
          <h1>hey fin</h1>
         }>
            <h1>These are children</h1>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
    </div>
  );
}
    
export default App;
