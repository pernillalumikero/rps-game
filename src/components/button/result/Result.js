import React from "react";
import Logic from "../logic/Logic";

const Result = ({
  computerChoice,
  userChoice,
  playerOne,
  playerTwo,
  gameMode,
}) => {
  let userImgs = [
    "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1614032686158-b880f7e82c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  ];
  let userIndex = userChoice - 1;

  let computerImgs = [
    "https://cdn.pixabay.com/photo/2012/04/24/17/17/hand-40512_960_720.png",
    "https://cdn.pixabay.com/photo/2012/04/11/16/11/sign-language-28717_960_720.png",
    "https://cdn.pixabay.com/photo/2014/04/02/10/18/palm-303412_960_720.png",
  ];
  let compIndex = computerChoice - 1;

  const generateAlt = (choice) => {
    let alt = "";
    if (choice === 0) {
      alt = "sax";
    } else if (choice === 1) {
      alt = "sten";
    } else {
      alt = "påse";
    }
    return alt;
  };

  return (
    <div>
      <div className="wrapper">
        {gameMode === "Singleplayer" ? (
          <>
            <div>
              <h2>Datorn valde: </h2>
              <div className="img-container">
                <img
                  src={computerImgs[compIndex]}
                  alt={generateAlt(compIndex)}
                />
              </div>
            </div>
            <div>
              <h2>{playerOne} valde: </h2>
              <div className="img-container">
                <img src={userImgs[userIndex]} alt={generateAlt(userIndex)} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2>{playerOne} valde: </h2>
              <div className="img-container">
                <img
                  src={computerImgs[compIndex]}
                  alt={generateAlt(compIndex)}
                />
              </div>
            </div>
            <div>
              <h2>{playerTwo} valde: </h2>
              <div className="img-container">
                <img src={userImgs[userIndex]} alt={generateAlt(userIndex)} />
              </div>
            </div>
          </>
        )}
      </div>
      <div name="result-text">
        <Logic
          userChoice={userChoice}
          computerChoice={computerChoice}
          playerOne={playerOne}
        />
      </div>
    </div>
  );
};

export default Result;
