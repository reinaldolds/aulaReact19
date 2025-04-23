import React, { useEffect, useState } from 'react'

const ListaDeAlunos = () => {
    const [alunos, setAlunos] = useState([])
    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost:3000/alunos")
            const data = resposta.json()
            setAlunos(data)
        }
        fetchData()
        

    }, []) //indica tempo que vai ser executada(quando a página for aberta)

  return (
    <div>
        <table border="1px">
            <thead>
                <th>Matricula</th>
                <th>Nome</th>
                <th>E-mail</th>
            </thead>
            <tbody>
                {
                    alunos.map((aluno) => {
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListaDeAlunos