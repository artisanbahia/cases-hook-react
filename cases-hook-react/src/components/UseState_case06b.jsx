export default ({incrementa_10, decrementa_10}) => {



    return (

        <>
            <div className="box-buttons">
                <button onClick={incrementa_10}>+</button>
                <button onClick={decrementa_10}>-</button>
                <span>+/- 10</span>
            </div>
        </>

    )
}