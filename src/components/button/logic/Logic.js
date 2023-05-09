import React from "react";
import { useState, useEffect } from "react";

const Logic = ({ userChoice, computerChoice, playerOne }) => {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  let result = "";

  const compareChoices = (player1, player2) => {
    if (player2 === player1) {
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
        setUserScore(userScore + 1);
      } else if (result === "Du har förlorat!") {
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
      <p>
        Ställningen är {playerOne}: {userScore} Datorn: {compScore}
      </p>
    </>
  );
};

export default Logic;
