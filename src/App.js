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
      <h1>Sten-Sax-Påse</h1>
      <p>Gör ditt val:</p>
      <Button name="Sten" value={2} setUserChoice={setUserChoice} computerChoice={makeComputerChoice}/>
      <Button name="Sax" value={1} setUserChoice={setUserChoice} computerChoice={makeComputerChoice} />
      <Button name="Påse" value={3} setUserChoice={setUserChoice} computerChoice={makeComputerChoice}/>
      {userChoice !== 0 
      ? <Result userChoice={userChoice} computerChoice={computerChoice} /> 
      : null}
      
    </div>
  );
}

export default App;
