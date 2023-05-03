import React from 'react'
import Logic from '../logic/Logic'

const Result = ({ computerChoise, userChoise}) => {

  // let result = "";

  // const compareChoices = (user, computer) => {
  //   if(computer == user) {
  //     result = "Oavgjort!"
  //   } else if ((computer === 2 && user === 3) || (computer === 3 && user === 1) || (computer === 3 && user === 2)) {
  //     result="Du har vunnit!"
  //   } else {
  //     result = "Du har förlorat!"
  //   }
  //   return result;

  // }  
  
  return (
    <div>
    <h2>Datorn valde: {computerChoise} Du valde: {userChoise}</h2>
    <h3><Logic user={userChoise} computer={computerChoise}/></h3>
      {/* {computerChoise === userChoise 
      ? <h3>{result}</h3>
      : (computerChoise === 2 && userChoise === 3)
      || (computerChoise === 3 && userChoise === 1) 
      || (computerChoise === 3 && userChoise === 2)
      ? <h3>Du har vunnit!</h3>
      : <h3>Du har förlorat</h3>} */}
    </div>
  )
}

export default Result
