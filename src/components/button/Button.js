import React from "react";

const Button = ({
  value,
  name,
  playerOne,
  currentPlayer,
  setUserChoice,
  setUser2Choice,
  computerChoice,
  switchPlayer,
  storeHistory,
  gameMode
}) => {
  const handleClick = (e) => {
    let value = parseInt(e.target.value);
    
    if(gameMode === "Singleplayer"){
      computerChoice();
      setUserChoice(value);
    } else {
      if(currentPlayer === playerOne) {
        setUserChoice(value);
      } else {
        setUser2Choice(value)
      }
      switchPlayer()

    }
    storeHistory();
  };

  return (
    <button value={value} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
