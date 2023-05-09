import Button from "./components/button/Button";
import Result from "./components/result/Result";
// import History from './components/history/History';
import "./App.css";
import { useState } from "react";

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [user2Choice, setUser2Choice] = useState();
  const [computerChoice, setComputerChoice] = useState(0);
  const [history, setHistory] = useState([{
        playerOne: "",
        playerTwo: "",
        userChoice: 0,
        computerChoice: 0}
  ]);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [gameMode, setGameMode] = useState();
  const [start, setStart] = useState(false);
  const [winner, setWinner] = useState()
  const [currentPlayer, setCurrentPlayer] = useState(playerOne)



  const makeComputerChoice = () => {
    setComputerChoice(parseInt(Math.floor(Math.random() * 3 + 1)));
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === playerOne ? playerTwo : playerOne)
  }

  // `${playerOne} (${userChoice})`, ` Datorn (${computerChoice})`
  // removed useEffect and passed storeHistory to Button, it now runs and updates on every click
  const storeHistory = () => {
    if (gameMode === "Singleplayer") {
      setHistory([
        {
          playerOne: playerOne,
          playerTwo: "Dator Hans",
          userChoice: userChoice,
          computerChoice: computerChoice,
        },
        ...history.splice(0, 9),
      ]);
    } else {
      setHistory([
        {
          playerOne: playerOne,
          playerTwo: playerTwo,
          userChoice: userChoice,
          computerChoice: computerChoice,
        },
        ...history.splice(0, 9),
      ]);
    }
    
  };

  return (
    //logic for what do dosplay based on player ( single, muliplayer )
    // input for name by player(s)

    <>
      {gameMode == null && start === false ? (
        <>
          <input
            type="radio"
            id="single"
            name="game-mode"
            onClick={() => setGameMode("Singleplayer")}
          />
          <label htmlFor="single">Singleplayer</label>
          <input
            type="radio"
            id="multi"
            name="game-mode"
            onClick={() => setGameMode("Multiplayer")}
          />
          <label htmlFor="multi">Multiplayer</label>
        </>
      ) : gameMode === "Singleplayer" ? (
        <>
          <input
            type="text"
            placeholder="Enter name.."
            name="player1"
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
          ></input>
          <button onClick={() => setStart(true)}>Starta</button>
        </>
      ) : (
        <>
          <input
            required
            type="text"
            placeholder="Enter player 1.."
            name="player1"
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
          ></input>
          <input
            required
            type="text"
            placeholder="Enter player 2.."
            name="player2"
            value={playerTwo}
            onChange={(e) => setPlayerTwo(e.target.value)}
          ></input>
          <button onClick={() => (setStart(true), switchPlayer())}>Starta</button>
        </>
      )}

      {start === true && gameMode === "Singleplayer" ? (
        <>
          <div className="App">
            <h1>Sten-Sax-Påse</h1>
            <span>
              <h3>{playerOne}</h3>
              <h3>{playerTwo}</h3>
              <h3>{currentPlayer}</h3>
            </span>
            <p>Gör ditt val:</p>
            <Button
              name="Sten"
              value={2}
              setUserChoice={setUserChoice}
              computerChoice={makeComputerChoice}
              switchPlayer={switchPlayer}
              storeHistory={storeHistory}
              gameMode={gameMode}
            />
            <Button
              name="Sax"
              value={1}
              setUserChoice={setUserChoice}
              computerChoice={makeComputerChoice}
              switchPlayer={switchPlayer}
              storeHistory={storeHistory}
              gameMode={gameMode}
            />
            <Button
              name="Påse"
              value={3}
              setUserChoice={setUserChoice}
              computerChoice={makeComputerChoice}
              switchPlayer={switchPlayer}
              storeHistory={storeHistory}
              gameMode={gameMode}
            />
            {userChoice !== 0 ? (
              <Result
                userChoice={userChoice}
                computerChoice={computerChoice}
                storeHistory={storeHistory}
                playerOne={playerOne}
                playerTwo={history.playerTwo}
                gameMode={gameMode}
                setWinner={setWinner}
              />
            ) : null}
          </div>
          <div className="App">
            <h2>Historik</h2>
            <ul>
              {history.map((item, index) => (
                <li key={index}>
                  {item.playerOne === winner 
                    ? <>
                        <b>{item.playerOne}</b>: 
                        {item.userChoice}
                        {item.playerTwo}: 
                        {item.computerChoice}
                      </>
                    : item.playerTwo === winner 
                      ? <>
                          {item.playerOne}
                          {item.userChoice}
                          <b>{item.playerTwo}</b>
                          {item.computerChoice}
                        </>
                      :  <>
                          {item.playerOne}
                          {item.userChoice}
                          {item.playerTwo}
                          {item.computerChoice}
                      </>
                  }
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : start === true && gameMode === "Multiplayer" ? 
      <>
          <div className="App">
            <h1>Sten-Sax-Påse</h1>
            <span>
              <h3>{playerOne}</h3>
              <h3>{playerTwo}</h3>
            </span>
            <p>Gör ditt val {currentPlayer}:</p>
            <Button
              name="Sten"
              value={2}
              setUserChoice={setUserChoice}
              computerChoice={computerChoice}
              switchPlayer={switchPlayer}
              storeHistory={storeHistory}
              gameMode={gameMode}
            />
            <Button
              name="Sax"
              value={1}
              setUserChoice={setUserChoice}
              computerChoice={computerChoice}
              switchPlayer={switchPlayer}
              storeHistory={storeHistory}
              gameMode={gameMode}
            />
            <Button
              name="Påse"
              value={3}
              setUserChoice={setUserChoice}
              computerChoice={computerChoice}
              switchPlayer={switchPlayer}
              storeHistory={storeHistory}
              gameMode={gameMode}
            />
            {userChoice !== 0 ? (
              <Result
                userChoice={userChoice}
                computerChoice={computerChoice}
                storeHistory={storeHistory}
                playerOne={playerOne}
                playerTwo={playerTwo}
                gameMode={gameMode}
                setWinner={setWinner}
              />
            ) : null}
          </div>
          <div className="App">
            <h2>Historik</h2>
            <ul>
              {history.map((item, index) => (
                <li key={index}>
                  {item.playerOne === winner 
                    ? <>
                        <b>{item.playerOne}</b>: 
                        {item.userChoice}
                        {item.playerTwo}: 
                        {item.computerChoice}
                      </>
                    : item.playerTwo === winner 
                      ? <>
                          {item.playerOne}
                          {item.userChoice}
                          <b>{item.playerTwo}</b>
                          {item.computerChoice}
                        </>
                      :  <>
                          {item.playerOne}
                          {item.userChoice}
                          {item.playerTwo}
                          {item.computerChoice}
                      </>
                  }
                </li>
              ))}
            </ul>
          </div>
        </>
      : null}
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
