import Button from './components/button/Button';
import Result from './components/button/result/Result';
import './App.css';
import { useState } from 'react';

function App() {

  const [userChoise, setUserChoise] = useState(0)
  const [computerChoise, setComputerChoise] = useState(0);

  const makeComputerChoise = () => {
      setComputerChoise(parseInt(Math.floor((Math.random() * 3) + 1)))
  }
 
  return (
    <div className="App">
      <Button name="Sax" value={1} setUserChoise={setUserChoise} computerChoise={makeComputerChoise} /><Button name="Sten" value={2} setUserChoise={setUserChoise} computerChoise={makeComputerChoise}/><Button name="Papper" setUserChoise={setUserChoise} value={3} computerChoise={makeComputerChoise}/>
      {userChoise !== 0 
      ? <Result userChoise={userChoise} computerChoise={computerChoise} /> 
      : null}
      
    </div>
  );
}

export default App;
