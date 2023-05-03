

// const compareChoices = ({user, computer}) => {

//     console.log(user)
//     console.log(computer)
//     let result = "";

//     if(computer === user) {
//       result = "Oavgjort!"
//     } else if ((computer === 2 && user === 3) || (computer === 3 && user === 1) || (computer === 3 && user === 2)) {
//       result="Du har vunnit!"
//     } else {
//       result = "Du har förlorat!"
//     }

//     return result;

//   }  

// export default compareChoices

import React from 'react'

const Logic = ({user, computer}) => {
  const user2 = user
  const computer2 = computer

  const compareChoices = (user2, computer2) => {

    console.log(user2)
    console.log(computer2)
    let result = "";

    if(computer2 === user2) {
      result = "Oavgjort!"
    } else if ((computer2 === 2 && user2 === 3) || (computer2 === 3 && user2 === 1) || (computer2 === 3 && user2 === 2)) {
      result="Du har vunnit!"
    } else {
      result = "Du har förlorat!"
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