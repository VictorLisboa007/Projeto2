import { useState } from "react";
import "./App.css";
import Singers from "./components/Singers.jsx";


function App() {
  const [cantores] = useState([
    {id:1, name:"Michael Jackson", gender:"Pop", winner:true, position:1},
    {id:2, name:"Linkin Park", gender:"Rock", winner:true, position:2},
    {id:3, name:"ExaltaSamba", gender:"Pagode", winner:false, position:3},
    {id:4, name:"Zeca Pagodinho", gender:"Samba", winner:false, position:4}
  ])
  

  return (
    <div className="App">
      {
        cantores.map((cantor) => (<Singers key={cantor.id} name={cantor.name} gender={cantor.gender} winner={cantor.winner} position={cantor.position} />))
      }
    </div>
  );
}

export default App;
