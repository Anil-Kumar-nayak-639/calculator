import React from 'react'
import './Calculator.css'


const Calculator = () => {
    const [result, setResult] = React.useState('')
    const click = (e) => {
        setResult(result.concat(e.target.name))
    }
    const clear = () => {
        setResult("")
    }
    const goback = () => {
        setResult(result.slice(0, result.length - 1))
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (error) {
            setResult("ERROR")
        }

    }
    return (
        <div className='x'>
            <h1 style={{ marginTop: "10px" }}>Anil Kumar Nayak</h1>
            <div className="container">
                <form>
                    <input type="text" value={result} />
                </form>
                <div className="keypad">
                    <button className='btn-light' onClick={clear} id='clear'>Clear</button>
                    <button className='btn-light' onClick={goback}>&lArr;</button>
                    <button className='btn-light' name='/' onClick={click}>&divide;</button>
                    <button name='7' onClick={click}>7</button>
                    <button name='8' onClick={click}>8</button>
                    <button name='9' onClick={click}>9</button>
                    <button className='btn-light' name='*' onClick={click}>&times;</button>
                    <button name='4' onClick={click}>4</button>
                    <button name='5' onClick={click}>5</button>
                    <button name='6' onClick={click}>6</button>
                    <button className='btn-light' name='-' onClick={click}>&ndash;</button>
                    <button name='1' onClick={click}>1</button>
                    <button name='2' onClick={click}>2</button>
                    <button name='3' onClick={click}>3</button>
                    <button className='btn-light' name='+' onClick={click}>+</button>
                    <button name='0' onClick={click}>0</button>
                    <button name='.' onClick={click}>.</button>
                    <button onClick={calculate} id='equal'>=</button>
                </div>
            </div>
        </div >
    )
}

export default Calculator