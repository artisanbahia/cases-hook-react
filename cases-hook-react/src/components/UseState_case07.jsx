import React from "react";
import { useState } from "react";
import UseState_case07a from "./UseState_case07a";

export default () => {

    const [valor, setValor] = useState([0, 0, 0]);
    

    function atualizar(indice, unidade){
        // Buscar o array
        const tmp = [...valor]
        // Alterar o array
        tmp[indice] = tmp[indice] + unidade
        // Atualizar o valor
        setValor(tmp) 
    }

    function incrementa_i0(){ atualizar(0, +1)}
    function decrementa_i0(){ atualizar(0, -1)}
    function incrementa_i1(){ atualizar(1, +10)}
    function decrementa_i1(){ atualizar(1, -10)}
    function incrementa_i2(){ atualizar(2, +100)}
    function decrementa_i2(){ atualizar(2, -100)}
    
   
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
                <h1>Valor1: {valor[0]}     |</h1>
                <h1>|    Valor2: {valor[1]}     |</h1>
                <h1>|    Valor3: {valor[2]} </h1>

            </div>

            <div className="components">
                <UseState_case07a funcao_incrementa={incrementa_i0} funcao_decrementa={decrementa_i0} />
                <UseState_case07a funcao_incrementa={incrementa_i1} funcao_decrementa={decrementa_i1} />
                <UseState_case07a funcao_incrementa={incrementa_i2} funcao_decrementa={decrementa_i2} />

                
            </div>

        </>
    )
}