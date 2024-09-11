export default ({incrementa_5, decrementa_5}) => {



    return (

        <>
            <div className="box-buttons">
            <span>+/- 5</span>
                <button onClick={incrementa_5}>+</button>
                <button onClick={decrementa_5}>-</button>
                
            </div>
        </>

    )
}