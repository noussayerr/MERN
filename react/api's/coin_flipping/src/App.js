import './App.css';

function App() {
  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeadsSync() {
      let  headsCount = 0;
      let attempts = 0;
      while(headsCount < 5) {
          attempts++;
          let result = tossCoin();
          if(result === "heads") {
            headsCount++;
          } else {
              headsCount = 0;
          }
    }
    return attempts;
      
  }
  
  function fiveHeads() {
      return new Promise( (resolve, reject) => {
        let x=fiveHeadsSync();
        console.log(x)
        if (x<=100 ){
          resolve(`It took ${x} tries to flip five heads`)
        }
        else{
          reject("coin has been flipped more than 100 times")
        }
      });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );      
}

export default App;
