import Button from './components/button/Button';
import Result from './components/button/result/Result';
import './App.css';
import { useState } from 'react';

function App() {

  const [userChoise, setUserChoise] = useState("")

  return (
    <div className="App">
      <Button name="Sax" setUserChoise={setUserChoise} /><Button name="Sten" setUserChoise={setUserChoise}/><Button name="Papper" setUserChoise={setUserChoise}/>
      <Result userChoise={userChoise} />
    </div>
  );
}

export default App;
