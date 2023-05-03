import React from 'react'
import Logic from '../logic/Logic'

const Result = ({ computerChoice, userChoice}) => {

  
  return (
    <div>
    <h2>Datorn valde: {computerChoice} Du valde: {userChoice}</h2>
    <div name="result-text"><Logic user={userChoice} computer={computerChoice}/></div>
      {/* {computerChoice === userChoice 
      ? <h3>{result}</h3>
      : (computerChoice === 2 && userChoice === 3)
      || (computerChoice === 3 && userChoice === 1) 
      || (computerChoice === 3 && userChoice === 2)
      ? <h3>Du har vunnit!</h3>
      : <h3>Du har förlorat</h3>} */}
    </div>
  )
}

export default Result
