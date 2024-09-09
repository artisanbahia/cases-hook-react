import { useState } from "react";
import "../style/UseState_case01.css";
import UseState_case04a from "./UseState_case04a";




export default () => {

    

    return(
        <>
            <div id="header">
                <img class="img-min" src="../../public/assets/img/js.png" alt="" srcset="" />
                <h1><span>USESTATE</span> E CÁLCULOS SIMPLES </h1> 
            </div>

            <div>
                <p class="context">Neste caso, usei três vezes o mesmo componente dentro de outro componente e, com artifício de props, foi possível configurar o valor de incremento e decremento para cada uma reutilização.</p>
            </div>

            <div className="components">
            <UseState_case04a valor={1}/>
            <UseState_case04a valor={5}/>
            <UseState_case04a valor={10}/>
            </div>
            
        </>
    )

}
 