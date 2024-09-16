import "./App.css";
import Destructing from "./components/Destructing.jsx";
import Events from "./components/Events.jsx";
import ListRender from "./components/ListRender.jsx";
import NewStates from "./components/NewStates.jsx";
import PropsTest from "./components/PropsTest.jsx";

const CodigoAntigo = () => {
    const nome = "Astrolapiteco Neneu"

  return (
    <div className="App">
      {/* Trabalhando com Events*/}
      <Events/>
      {/* Uso dos useStates*/}
      <NewStates/>
      {/* Mostrando listas na tela*/}
      <ListRender/>
      {/*Trabalhando com Props*/}
      <PropsTest name={nome}/>
      {/* Destructing */}
      <Destructing time="Flamengo" estado="Rio de Janeiro" numerodacamisa={10} campeao={true}/>
      {/* Reaproveitando Components */}
      <Destructing time="Real Madrid" estado="Madri" numerodacamisa={9} campeao={false}/>
      <Destructing time="Manchester City" estado="Manchester" numerodacamisa={7} campeao={false}/>
    </div>
  )
}

export default CodigoAntigo