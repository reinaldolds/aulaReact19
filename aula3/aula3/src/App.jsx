import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      {
        [{nome: "Reinaldo", email: "reinaldo@gmail.com", curso: "sistemas para internet"},
          {nome: "Maria", email: "maria@gmail.com", curso: "sistemas da informação"},
          {nome: "Guga", email: "guga@gmail.com", curso: "Direito"}
        ].map((aluno) =>
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso}/>
        )
      }

    </div>
    
  )
}

export default App