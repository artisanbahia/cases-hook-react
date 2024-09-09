import { useState } from "react";
import "../style/UseState_case01.css";


export default () => {

    const [valorHook, setValue] = useState(0);

    function incrementar(a){
        setValue(value => value + a);
    }

    function decrementar(a){
        setValue(value => value - a);
    }


    function zerar(){
        setValue(value => 0);
    }

    return(
        <>
            <div id="header">
                <img class="img-min" src="../../public/assets/img/js.png" alt="" srcset="" />
                <h1><span>USESTATE</span> E CÁLCULOS SIMPLES </h1>
                
            </div>
            <div>
                
                <p class="context">Neste caso, ao clicar no botão somar ou subtrair, uma arrow function que está no onClick dos buttons possui parâmetro e opera o cálculo adequadamente. Neste exemplo, o valor do parâmetro 'a' é igual a 10.</p>
            </div>
            <div id="main">
            
                <p>{valorHook}</p>
            
                <div id="buttons">
                    <button onClick={() => {incrementar(10)} }>Somar parâmetro</button>
                    <button onClick={() => {decrementar(10)}}>Subtrair parâmetro</button>
                    <button id="zerar" onClick={zerar}>RESET</button>

                </div>
            </div>
            
        </>
    )

}
 