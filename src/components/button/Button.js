import React from 'react'

const Button = ({ value, name, setUserChoice, computerChoice, storeHistory }) => {

    const handleClick = (e) => {
        let value = parseInt(e.target.value)
        setUserChoice(value);
        computerChoice();
        storeHistory();
    }

  return (
    <button value={value} onClick={handleClick}>{name}</button>
  )
}

export default Button
