import { useState } from 'react'

const Clicker =(props)=> {
    const [counter, setCounter] = useState(0)

    const incrementButtonClickHandler = () => {
        setCounter(oldCounter => oldCounter + 1)
    }

    const decrementButtonClickHandler = () => {
        setCounter(oldCounter => oldCounter -1 )
    }

    const clearCounterHandler = () => {
        setCounter(0)
    }
    return (
        <div>
            <h3>Clicker: {counter}</h3>
            <button onClick={incrementButtonClickHandler}>+</button>
            <button onClick={decrementButtonClickHandler}>-</button>
            <button onClick={clearCounterHandler}>0</button>

        </div>
    )
}

export default Clicker