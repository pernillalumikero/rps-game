import React from "react";

const Button = ({
  value,
  name,
  setUserChoice,
  computerChoice,
  switchPlayer,
  storeHistory,
  gameMode
}) => {
  const handleClick = (e) => {
    let value = parseInt(e.target.value);
    setUserChoice(value);
    if(gameMode === "Singleplayer"){
      computerChoice();
    } else {
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
