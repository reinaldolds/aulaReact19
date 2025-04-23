import React from 'react'

const EstaComSono = (props) => {
  return (
    <div>
        {props.chamada ? <h1>sim estou</h1> : <h1>não estou</h1>}
    </div>
  )
}

export default EstaComSono