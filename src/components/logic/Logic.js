import React from "react";
import { useState, useEffect } from "react";

const Logic = ({ gameMode, userChoice, computerChoice, playerOne, playerTwo, setWinner }) => {
  const [userScore, setUserScore] = useState(0);
  const [user2Score, setUser2Score] = useState(0);
  const [compScore, setCompScore] = useState(0);
  let result = "";

  const compareChoices = (player1, player2) => {
    if (player2 === player1) {
      setWinner('')
      result = "Oavgjort!";
    } else if (
      (player2 === 2 && player1 === 3) ||
      (player2 === 3 && player1 === 1) ||
      (player2 === 1 && player1 === 2)
    ) {
      result = "Du har vunnit!";
    } else {
      
      result = "Du har förlorat!";
    }

    return result;
  };

  useEffect(() => {
    const scoreKeeper = () => {
      if (result === "Du har vunnit!") {
        setWinner(playerOne)
        setUserScore(userScore + 1);
      } else if (result === "Du har förlorat!") {
        setWinner("Datorn")
        setCompScore(compScore + 1);
      }
    };
    scoreKeeper();
  }, [userChoice, computerChoice]);

  compareChoices(userChoice, computerChoice);

  //need to put score and result in different functions for easier displaying and testing

  return (
    <>
      <h3>{compareChoices(userChoice, computerChoice)}</h3>
      {gameMode === "Singleplayer" 
      ? <p>
        Ställningen är {playerOne}: {userScore} {playerTwo}: {compScore}
      </p>
      : <p>Ställningen är {playerOne}: {userScore} {playerTwo}: {}</p>
      }
      
    </>
  );
};

export default Logic;
