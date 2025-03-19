import React from 'react'
import { useState } from 'react'

const HookContador = () => {
    const [Count, setCount] = useState(1)
    function incrementaContador(){
        setCount(Count + 1);
    }
    function decrementarContar(){
        setCount(Count - 1);
    }
  return (
    <div>
        <h1>Contador useState</h1>
        <h1>{Count}</h1>
        <button onClick={incrementaContador}>Clique Aqui</button> <br />
        <button onClick={decrementarContar}>Diminuir</button>
    </div>
  )
}

export default HookContador;