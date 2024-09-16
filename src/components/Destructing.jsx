
const Destructing = ({time, estado, numerodacamisa, campeao}) => {
  return (
    <div>
        <h1>Destructing</h1>
        <hr/>
        <p>Meu time é: <b>{time}</b></p>
        <p>Eu sou do/de: <b>{estado}</b></p>
        <p>Meu número na camisa é: <b>{numerodacamisa}</b></p>
        {campeao && <p><b>Este time é Campeão da Libertadores</b></p>}
    </div>
  )
}

export default Destructing