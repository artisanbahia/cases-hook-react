import { useState } from "react";
import "../style/UseState_case01.css";


export default () => {

    const [valorHook1, setValue1] = useState(0);

    function incrementar1(a){
        setValue1(value => value + 1);
    }

    function decrementar1(a){
        setValue1(value => value - 1);
    }


    const [valorHook2, setValue2] = useState(0);

    function incrementar2(a){
        setValue2(value => value + 1);
    }

    function decrementar2(a){
        setValue2(value => value - 1);
    }





    return(
        <>
            <div id="header">
                <img class="img-min" src="../../public/assets/img/js.png" alt="" srcset="" />
                <h1><span>USESTATE</span> E CÁLCULOS SIMPLES </h1> 
            </div>

            <div>
                <p class="context">Neste caso, há dois mecanismos de incremento e decremento e um quadro com o resultado da multiplicação entre os números.</p>
            </div>


            <div id="main">
                <p>{valorHook1}</p>
                <div id="buttons">
                    <button onClick={() => {incrementar1()} }>+</button>
                    <button onClick={() => {decrementar1()}}>-</button>
                </div>

                <p>{valorHook2}</p>
            
                <div id="buttons">
                    <button onClick={() => {incrementar2()} }>+</button>
                    <button onClick={() => {decrementar2()}}>-</button>
                </div>

                <div class="result">
                    <p>RESULTADO: {valorHook1 * valorHook2}</p>
                </div>

            </div>
            
        </>
    )

}
 