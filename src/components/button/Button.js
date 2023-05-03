import React from 'react'

const Button = ({value, name, setUserChoise, computerChoise }) => {

    const handleClick = (e) => {
        let value = parseInt(e.target.value)
        setUserChoise(value);
        computerChoise();
    }

  return (
    <button value={value} onClick={handleClick}>{name}</button>
  )
}

export default Button
