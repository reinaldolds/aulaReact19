import React from "react";
import RenderizandoComfuncoes from "./components/RenderizandoComoFuncoes";
import HookContador from "./components/HookContador";
import HookMegasena from "./components/HookMegasena";


const App = () => {
  return <div>
    <h1>hello world</h1>

    <HookContador/>
    <br />
    <HookMegasena/>
  </div>
}

export default App;