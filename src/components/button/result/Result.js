import React from 'react'
import Logic from '../logic/Logic'


const Result = ({ computerChoice, userChoice}) => {

  let userImgs = ['../../../assets/img/scissors.jpg', '../../../assets/img/rock.jpg', '../../../assets/img/paper.jpg']
  let userIndex = userChoice - 1;

  let computerImgs =['assets/img/scissors2.jpg', 'assets/img/rock2.jpg', 'assets/img/paper2.jpg']
  let compIndex = computerChoice - 1;

  const generateAlt = (choice) => {
    let alt =""
    if(choice === 0) {
      alt = "sax";
    } else if(choice === 1){
      alt = "sten";
    } else{
      alt = "påse"
    }
    return alt
  } 

  return (
    <div>
    <h2>Datorn valde: <img src={computerImgs[compIndex]} alt={generateAlt(compIndex)}/> Du valde: <img src={userImgs[userIndex]} alt={generateAlt(userIndex)}/> </h2>
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
