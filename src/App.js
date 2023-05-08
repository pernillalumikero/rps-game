import Button from './components/button/Button';
import Result from './components/button/result/Result';
// import History from './components/history/History';
import './App.css';
import { useState } from 'react';

function App() {

  const [userChoice, setUserChoice] = useState(0)
  const [computerChoice, setComputerChoice] = useState(0);
  const [history, setHistory] = useState([])
  const [players, setPlayers] = useState({
    player1: '',
    player2: ''
  })
  const [gameMode, setGameMode] = useState()
  

  const handleChange = e => {
    const field = e.target.name
    const value = e.target.value

    // LEFT TO FIX! Update of players by setPlayers!

    setPlayers({field:value})
  }

  const handleSubmit = () => {
    // e.preventDefault();
    console.log(players.player1 + " + " + players.player2)
  }


  const makeComputerChoice = () => {
      setComputerChoice(parseInt(Math.floor((Math.random() * 3) + 1)))
  }
  
  // removed useEffect and passed storeHistory to Button, it now runs and updates on every click
  const storeHistory = () => {

    let newHistory = [[`Gunnar (${userChoice})`, ` Datorn (${computerChoice})`], ...history ]

    if(userChoice === 0 || history.length > 9) {
      newHistory.pop()
    }
    
    setHistory(newHistory)
  }
 
  return (
    //logic for what do dosplay based on player ( single, muliplayer )
      // input for name by player(s)

     <>
     {console.log(gameMode)}
      {gameMode == null 
        ? <>
            <input type='radio' id='single' name='game-mode' onClick={() => setGameMode('Singleplayer')} />
            <label htmlFor='single'>Singleplayer</label>
            <input type='radio' id='multi' name='game-mode' onClick={() => setGameMode('Multiplayer')} />
            <label htmlFor='multi'>Multiplayer</label>
          </>
        : gameMode === "Singleplayer" 
          ? <input type='text' placeholder='Enter name..' name='player1' value={players.player1} onChange={handleChange}></input>
          : <>
              <form onSubmit={() => handleSubmit()}>
                <input required type='text' placeholder='Enter player 1..' name='player1' value={players.player1} onChange={handleChange}  ></input>
                <input required type='text' placeholder='Enter player 2..' name='player2' value={players.player2} onChange={handleChange}  ></input>
                <input type='submit' value='Submit' />
              </form>
            </>
          
      }
     
      <div className="App">
        <h1>Sten-Sax-Påse</h1>
        <p>Gör ditt val:</p>
        <Button name="Sten" value={2} setUserChoice={setUserChoice} computerChoice={makeComputerChoice} storeHistory={storeHistory}/>
        <Button name="Sax" value={1} setUserChoice={setUserChoice} computerChoice={makeComputerChoice} storeHistory={storeHistory}/>
        <Button name="Påse" value={3} setUserChoice={setUserChoice} computerChoice={makeComputerChoice} storeHistory={storeHistory}/>
        {userChoice !== 0 
        ? <Result userChoice={userChoice} computerChoice={computerChoice} storeHistory={storeHistory} /> 
        : null}
        
      </div>
      <div className='App'>
        <h2>Historik</h2>
        <ul>{history.map((item, index)=> <li key={index}>{item}</li>
        )}</ul>
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