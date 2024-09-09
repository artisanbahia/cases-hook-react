import React from "react";
import { useState } from "react";

export default ({valor}) => {

    const [valorHook1, setValue1] = useState(0);

    function incrementar(){
        setValue1(value => value + valor);
    }

    function decrementar(){
        setValue1(value => value - valor);
    }

    function reset(){
        setValue1(value => 0);
    }

    return (

        <>
            <div id="main">     
                <div class="buttons">
                    
                    <button onClick={() => {incrementar()} }>+</button>
                    <div id="result"><p>{valorHook1}</p></div>
                    <button onClick={() => {decrementar()} }>-</button>

                </div>       
            </div>
        </>
    )

}

            