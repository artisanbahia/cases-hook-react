import React from "react";
import { useState } from "react";
import UseState_case05a from "./UseState_case05a";
import "../style/UseState_case01.css";


export default () => {

    const [valor, setValor] = useState(0);

    function atualizarvalor(){
        setValor(1000);
    }

    return (

        <>

            <div id="header">
                <img class="img-min" src="../../public/assets/img/js.png" alt="" srcset="" />
                <h1><span>USESTATE</span> E CÁLCULOS SIMPLES </h1> 
            </div>

            <div>
                <p class="context">Neste caso, há a importação de um componente dentro de outro componente. O componente que importa, ao mesmo tempo consome o bloco do componente filho e também lhe envia o retorno de uma função como valor de uma prop, que é indispensável para o funcionamento adequado do mecanismo de atualizar um valor quando clicamos em um botão.</p>
            </div>

           
            <div className="components">
                <h1>Valor: {valor}</h1>
            </div>

            <div className="components">
                <UseState_case05a novoValor={atualizarvalor} />
            </div>

        </>
    )
}