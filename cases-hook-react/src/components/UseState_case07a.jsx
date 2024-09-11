export default ({funcao_incrementa, funcao_decrementa}) => {



    return (

        <>
            <div className="box-buttons">
                <button onClick={funcao_incrementa}>+</button>
                <button onClick={funcao_decrementa}>-</button>
            </div>
        </>

    )
}