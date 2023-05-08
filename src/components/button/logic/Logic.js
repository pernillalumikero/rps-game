import React from "react";
import { useState, useEffect} from "react";

const Logic = ({ user, computer, playerOne }) => {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  let result = '';

  useEffect(() => {
    const compareChoices = (user2, computer2) => {

      if (computer2 === user2) {
        result = 'Oavgjort!';
      } else if ((computer2 === 2 && user2 === 3) || (computer2 === 3 && user2 === 1) || (computer2 === 1 && user2 === 2)) {
        setUserScore(userScore + 1);
        result = 'Du har vunnit!';
      } else {
        setCompScore(compScore + 1);
        result = 'Du har förlorat!';
      }

      return result;
    };

    compareChoices(user, computer);
  }, [user, computer]);

//need to put score and result in different functions for easier displaying and testing 

  return (
    <>
      <h3>{result}</h3>
      <p>Ställningen är {playerOne}: {userScore} Datorn: {compScore}</p>
    </>
  );
};

export default Logic;