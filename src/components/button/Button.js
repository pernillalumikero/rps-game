import React from 'react'

const Button = ({value, name, setUserChoice, computerChoice }) => {

    const handleClick = (e) => {
        let value = parseInt(e.target.value)
        setUserChoice(value);
        computerChoice();
    }

  return (
    <button value={value} onClick={handleClick}>{name}</button>
  )
}

export default Button
