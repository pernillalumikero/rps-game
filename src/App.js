import Button from './components/button/Button';
import Result from './components/button/result/Result';
// import History from './components/history/History';
import './App.css';
import { startTransition, useState } from 'react';

function App() {

  const [userChoice, setUserChoice] = useState(0)
  const [computerChoice, setComputerChoice] = useState(0);
  const [history, setHistory] = useState([])
  const [playerOne, setPlayerOne] = useState("")
  const [playerTwo, setPlayerTwo] = useState("")
  // const [players, setPlayers] = useState({
  //   player1: '',
  //   player2: ''
  // })
  const [gameMode, setGameMode] = useState()
  const [start, setStart] = useState(false)
  

  // const handleChange = e => {
  //   const field = e.target.name
  //   const value = e.target.value

  //   // LEFT TO FIX! Update of players by setPlayers!

  //   setPlayers({field:value})
  // }

  const handleClick = (e) => {
    e.preventDefault();
   
  }


  const makeComputerChoice = () => {
      setComputerChoice(parseInt(Math.floor((Math.random() * 3) + 1)))
  }
  
  // removed useEffect and passed storeHistory to Button, it now runs and updates on every click
  const storeHistory = () => {


    if(gameMode === "Singleplayer") {

      setHistory([[`${playerOne} (${userChoice})`, ` Datorn (${computerChoice})`], ...history.splice(0,9)])
    } else {
      setHistory([[`${playerOne} (${userChoice})`, ` ${playerTwo} (${computerChoice})`], ...history.splice(0,9)]) 
    }


    // if(userChoice === 0 || history.length > 9) {
    //   newHistory.pop()
    // }
    
    // setHistory()
  }
 
  return (
    //logic for what do dosplay based on player ( single, muliplayer )
      // input for name by player(s)

     <>
     {console.log(gameMode)}
      {gameMode == null && start == false 
        ? <>
            <input type='radio' id='single' name='game-mode' onClick={() => setGameMode('Singleplayer')} />
            <label htmlFor='single'>Singleplayer</label>
            <input type='radio' id='multi' name='game-mode' onClick={() => setGameMode('Multiplayer')} />
            <label htmlFor='multi'>Multiplayer</label>
          </>
        : gameMode === "Singleplayer" 
          ? <input type='text' placeholder='Enter name..' name='player1' value={playerOne} onChange={(e) => setPlayerOne(e.target.value)}></input>
          : <>
              {/* <form onSubmit={() => handleSubmit()}> */}
                <input required type='text' placeholder='Enter player 1..' name='player1' value={playerOne} onChange={(e) => setPlayerOne(e.target.value)}  ></input>
                <input required type='text' placeholder='Enter player 2..' name='player2' value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)}  ></input>
                {/* <input type='submit' value='Submit' /> */}
              {/* </form> */}
              <button onClick={setStart(true)}>Starta</button>
            </>
          
      }
     {start == true
     ? <>
      <div className="App">
        <h1>Sten-Sax-Påse</h1>
        <span>
          <h3>{playerOne}</h3>
          <h3>{playerTwo}</h3>
        </span>
        <p>Gör ditt val:</p>
        <Button name="Sten" value={2} setUserChoice={setUserChoice} computerChoice={makeComputerChoice} storeHistory={storeHistory}/>
        <Button name="Sax" value={1} setUserChoice={setUserChoice} computerChoice={makeComputerChoice} storeHistory={storeHistory}/>
        <Button name="Påse" value={3} setUserChoice={setUserChoice} computerChoice={makeComputerChoice} storeHistory={storeHistory}/>
        {userChoice !== 0 
        ? <Result userChoice={userChoice} computerChoice={computerChoice} storeHistory={storeHistory} playerOne= {playerOne} playerTwo = {playerTwo} gameMode={gameMode}  /> 
        : null}
        
      </div>
      <div className='App'>
        <h2>Historik</h2>
        <ul>{history.map((item, index)=> <li key={index}>{item}</li>
        )}</ul>
      </div>
     </>
     : null

     }
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