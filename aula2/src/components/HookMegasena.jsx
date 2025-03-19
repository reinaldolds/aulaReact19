import React from 'react'
import { useState } from 'react'

const HookMegasena = () => {
    const [sorteado, setSorteado] = useState()
    const [listaSorteado, setlistaSorteado] = useState([])
    function sortearNumero(){
        if(listaSorteado.length < 6){
            let numeroSortado = Math.floor(Math.random() * 60) + 1
            setSorteado(numeroSortado)
            setlistaSorteado([...listaSorteado, numeroSortado])
        }else{
            alert("já temos os 6 números sorteado.")
        }
    }
  return (
    <div>HookMegasena
        <h1>Sorteador da Mega React</h1>
        <button onClick={sortearNumero}>Sortear número</button>
        <h1>Último Número</h1>
        <h1>Último número sorteado: {sorteado}</h1>
        <h1>Sorteados: {listaSorteado.join(" - ")}</h1>
    </div>
  )
}

export default HookMegasena