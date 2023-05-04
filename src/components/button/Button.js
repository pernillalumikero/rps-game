import React from 'react'

const Button = ({value, name, setUserChoice, computerChoice, setHistory, history }) => {

    const handleClick = (e) => {
        let value = parseInt(e.target.value)
        setUserChoice(value);
        computerChoice();
        setHistory(...history, {historyItem: "blää"})
    }

  return (
    <button value={value} onClick={handleClick}>{name}</button>
  )
}

export default Button
