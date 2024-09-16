import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Mateus","Marcos","Lucas","João","Paulo"])

    const [players] = useState([{id:1, name:"Cristiano Ronaldo", number:7, country:"Portugal"},{id:2, name:"Neymar", number:11, country:"Brasil"},{id:3, name:"Arrascaeta", number:14, country:"Uruguai"}])

  return (
    <div>
        <h1>Lista Renderizada</h1>
        <ul>
            {list.map( (item, index)=> (<li key={index}> {item} </li>))}
        </ul>
        <ol>
            {players.map( (players)=> (<li key={players.id}> {players.name} - Camisa {players.number} - País: {players.country} </li>))}
        </ol>
    </div>
  )
}

export default ListRender