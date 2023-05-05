import Button from './components/button/Button';
import Result from './components/button/result/Result';
// import History from './components/history/History';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [userChoice, setUserChoice] = useState(0)
  const [computerChoice, setComputerChoice] = useState(0);
  const [history, setHistory] = useState([])
  
  const storeHistory = () => {

    let newHistory = [[`Gunnar (${userChoice})`, ` Datorn (${computerChoice})`], ...history ]

    if(history.length < 10) {
    setHistory(newHistory)

    } else {
      newHistory.pop()
      setHistory(newHistory)
    }
  }

  useEffect(() =>{
    storeHistory()
  }, [computerChoice])


  const makeComputerChoice = () => {
      setComputerChoice(parseInt(Math.floor((Math.random() * 3) + 1)))
  }
 
  return (
     <>
      <div className="App">
        <h1>Sten-Sax-Påse</h1>
        <p>Gör ditt val:</p>
        <Button name="Sten" value={2} setUserChoice={setUserChoice} computerChoice={makeComputerChoice}/>
        <Button name="Sax" value={1} setUserChoice={setUserChoice} computerChoice={makeComputerChoice} />
        <Button name="Påse" value={3} setUserChoice={setUserChoice} computerChoice={makeComputerChoice}/>
        {userChoice !== 0 
        ? <Result userChoice={userChoice} computerChoice={computerChoice} storeHistory={storeHistory} /> 
        : null}
        
      </div>
      <div>
        <h2>Historik</h2>
        <ol>{history.map(item => <li key={item.index}>{item}</li>
        )}</ol>
        {/* <History history={history} /> */}
      </div>
    </>
  );
}

export default App;


/*
Historik
Array som sparar:
  tid
  drag
    user
    computer
  resultat

Winning streak
  counter
    if loose, draw
      reset counter
*/