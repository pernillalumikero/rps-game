import Button from './components/button/Button';
import Result from './components/button/result/Result';
import './App.css';
import { useState } from 'react';

function App() {

  const [userChoice, setUserChoice] = useState(0)
  const [computerChoice, setComputerChoice] = useState(0);

  const makeComputerChoice = () => {
      setComputerChoice(parseInt(Math.floor((Math.random() * 3) + 1)))

  }
 
  return (
    <div className="App">
      <h1>ROCK PAPER SCISSOR</h1>
      <Button name="Sax" value={1} setUserChoice={setUserChoice} computerChoice={makeComputerChoice} /><Button name="Sten" value={2} setUserChoice={setUserChoice} computerChoice={makeComputerChoice}/><Button name="Papper" setUserChoice={setUserChoice} value={3} computerChoice={makeComputerChoice}/>
      {userChoice !== 0 
      ? <Result userChoice={userChoice} computerChoice={computerChoice} /> 
      : null}
      
    </div>
  );
}

export default App;
