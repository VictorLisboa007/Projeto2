import {useState} from 'react'

const NewStates = () => {
    let valor = 10
    console.log(valor)

    const [number, setNumber] = useState(0)
    console.log(number)
  return (
    <div>
        {/*Variaveis padrão*/}
        <h1>useState</h1>
        <p>Valor: {valor}</p>
        <button onClick={()=>(valor = 20)}>Mudar Valor</button>

        {/*Variaveis com useState*/}
        <p>Valor com useState: {number}</p>
        <button onClick={()=>(setNumber(number + 15))}>Aumentar Valor</button>
    </div>
  )
}

export default NewStates