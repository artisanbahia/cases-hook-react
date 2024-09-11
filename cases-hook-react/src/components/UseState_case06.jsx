import React from "react";
import { useState } from "react";
import UseState_case06a from "./UseState_case06a";
import UseState_case06b from "./UseState_case06b";

export default () => {

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

    function incrementa5(){
        setValor1(v => v + 5)
    }

    
    function decrementa5(){
        setValor1(v => v - 5)
    }

    
    function incrementa10(){
        setValor2(v => v + 10)
    }

    
    function decrementa10(){
        setValor2(v => v - 10)
    }

    let valor = valor1 + valor2;

    return (

        <>

            <div id="header">
                <img class="img-min" src="../../public/assets/img/js.png" alt="" srcset="" />
                <h1><span>USESTATE</span> E CÁLCULOS SIMPLES </h1> 
            </div>

            <div>
                <p class="context">Neste caso, um componente pai importa dois componentes filhos que, por sua vez, recebem via props, funções para implementar em seus botões de incremento e decremento. Desta forma, o primeiro componente filho incrementa ou decrementa 5 unidades e o segundo incrementa ou decrementa 10 unidades. No componente pai há uma variável que sofrerá mudança de estado a partir do acionamento de qualquer dos 4 botões.</p>
            </div>

           
            <div className="components">
                <h1>Valor: {valor}</h1>
            </div>

            <div className="components">
                <UseState_case06a incrementa_5={incrementa5} decrementa_5={decrementa5} />
                
                <UseState_case06b incrementa_10={incrementa10} decrementa_10={decrementa10} />
            </div>

        </>
    )
}