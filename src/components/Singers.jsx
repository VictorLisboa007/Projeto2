
const Singers = ({id,name,gender,winner,position}) => {
  return (
    <div>
        <h1>Singers</h1>
        <hr/>
        <p>O artista é: <b>{name}</b></p>
        <p>Canta o estilo músical: <b>{gender}</b></p>
        <p>No top da Billboard, está na posição: <b>{position}</b></p>
        {winner && <p><b>É o melhor do seu gênero</b></p>}
    </div>
  )
}

export default Singers