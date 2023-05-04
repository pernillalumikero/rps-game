import React from 'react'

const History = ({history}) => {
  return (
    <>
        <h2>History</h2>
        {history.length < 1 
            ? <div>No history</div>
            : <ul>
                <h1>Some history</h1>
                {console.log(history[0])}
                {history.map(item => {
                {console.log(item.historyItem)}
                    <li>{item}</li>
                })}
            </ul>
        }
    </>
  )
}

export default History