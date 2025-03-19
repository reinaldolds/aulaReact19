import React from "react";

const RenderizandoComfuncoes = () => {
    function escolhaDeRenderizacap (oQueRenderizar){
        if(oQueRenderizar === "h1"){
            return<h1>Texto em h1</h1>
        }else{
            return<h1>Texto em h2</h1>
        }
    }

    return(<div>
            {escolhaDeRenderizacap("h2")}
            {escolhaDeRenderizacap("h1")}
        </div>
    )
}
    
export default RenderizandoComfuncoes;