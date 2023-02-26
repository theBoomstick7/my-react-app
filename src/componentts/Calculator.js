import { useState } from "react"

const Calculator = (props) => {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState('')
    const [action, setAction] = useState('')
    const [result, setResult] = useState(0)    


    const addValueHandler = e => {
        e.preventDefault()
        if(!value1){
           setValue1(oldValue1 => Number(e.target.innerHTML))
        }
        if(value1 && action){
            setValue2(oldValue2 => Number(e.target.innerHTML))
        }
    }

    const actionHandler = (event) => {
        setAction(oldAction => event.target.innerHTML)
    }

    const actionFinish = () => {
       
        if(action === '+'){
           setResult(oldResult => value1 + value2)
        } 
        else if (action === "-")
        {
            setResult(oldResult => value1 - value2)
        }
        else if (action === "*")
        {
            setResult(oldResult => value1 * value2)
        }
        else if (action === ":")
        {
            setResult(oldResult => value1 / value2)
        }
    }

    const clearButtonHandler = () => {
        setResult(0)
        setAction(0)
        setValue1(0)
        setValue2(null)
    }
    return (
        <div className="App">
            <h2>Calculator</h2>
            <span>Values : {value1} {action} {value2 || value1 === "0" ?value2:''}</span>
            <h2>Result : {result}</h2>
            <section>
            <button onClick={addValueHandler}>1</button>
            <button onClick={addValueHandler}>2</button>
            <button onClick={addValueHandler}>3</button>
            <button onClick={addValueHandler}>4</button>
            <button onClick={addValueHandler}>5</button>
            <button onClick={addValueHandler}>6</button>
            <button onClick={addValueHandler}>7</button>
            <button onClick={addValueHandler}>8</button>
            <button onClick={addValueHandler}>9</button>
            </section>
           <section>
            <button onClick={actionHandler}>+</button>
            <button onClick={actionHandler}>-</button>
            <button onClick={actionHandler}>*</button>
            <button onClick={actionHandler}>:</button>

            <button onClick={actionFinish}>=</button>
            <button onClick={clearButtonHandler}>C</button>

           </section>

        </div>
    )
}

export default Calculator