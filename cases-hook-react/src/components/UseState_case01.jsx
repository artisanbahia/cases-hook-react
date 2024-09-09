import { useState } from "react";
import "../style/UseState_case01.css";


export default () => {

    const [valorHook, setValue] = useState(0);

    function incrementar(){
        setValue(value => value + 1);
    }

    function decrementar(){
        setValue(value => value - 1);
    }

    function multiplicar(){
        setValue(value => value * 2);
    }

    function dividir(){
        setValue(value => value / 2);
    }

    function zerar(){
        setValue(value => 0);
    }

    return(
        <>
            <div id="header">
                <h1><span>USESTATE</span> E CÁLCULOS SIMPLES </h1>
            </div>
            <div id="main">
                <p>{valorHook}</p>
            
                <div id="buttons">
                    <button onClick={incrementar}>Somar 1</button>
                    <button onClick={decrementar}>Subtrair 1</button>
                    <button onClick={multiplicar}>Multiplicar por 2x</button>
                    <button onClick={dividir}>Dividir por 2x</button>
                    <button id="zerar" onClick={zerar}>RESET</button>

                </div>
            </div>
        </>
    )

}
 