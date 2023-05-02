import React from 'react'

const Button = ({name, setUserChoise}) => {

    const handleClick = (e) => {
        setUserChoise(e.target.value);
    }

  return (
    <button value={name} onClick={handleClick}>{name}</button>
  )
}

export default Button
