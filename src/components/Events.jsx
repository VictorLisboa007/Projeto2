const Events = () => {
    const teste = (e) => {
        //console.log(e)
        console.log("Funcionou de Novo")
    }
  return (
    <div>
        <button onClick={() => console.log("Funcionou")}>Clica Aqui</button>
        <br/>
        <button onClick={teste}>Clica Aqui de Novo</button>
    </div>
  )
}

export default Events