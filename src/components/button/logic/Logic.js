


import React, { useState } from 'react'

const Logic = ({user, computer, storeHistory}) => {

  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);


  const compareChoices = (user2, computer2) => {

    console.log(user2)
    console.log(computer2)
    let result = "";

    if(computer2 === user2) {
      result = "Oavgjort!"
    } else if ((computer2 === 2 && user2 === 3) || (computer2 === 3 && user2 === 1) || (computer2 === 1 && user2 === 2)) {
      result="Du har vunnit!"
      setUserScore(userScore + 1);
    } else {
      result = "Du har förlorat!"
      setCompScore(compScore + 1)
    }
    
    return result;
  }  
  
  return (
    <h3>
      {compareChoices(user, computer)}
    </h3>
    
  )
}

export default Logic