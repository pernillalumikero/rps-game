import React from 'react'

const Result = ({ computerChoise, userChoise}) => {

  return (
    <div>
    <h2>Datorn valde: {computerChoise} Du valde: {userChoise}</h2>
      {computerChoise === userChoise 
      ? <h3>Oavgjort</h3>
      : (computerChoise === 2 && userChoise === 3) || (computerChoise === 3 && userChoise === 1) || (computerChoise === 3 && userChoise === 2)
      ? <h3>Du har vunnit!</h3>
      : <h3>Du har förlorat</h3>}
    </div>
  )
}

export default Result
