import React from 'react'
import './Calculator.css'


const Calculator = () => {
    const [result, setResult] = React.useState('xyz')
    const click = (e) => {
        setResult(e.target.value)
    }
    return (
        <div className='x'>
            <div className="container">
                <form>
                    <input type="text" value={result} />
                </form>
                <div className="keypad">
                    <button className='x'>Clear</button>
                    <button onClick={click}>C</button>
                    <button onClick={click}>&divide;</button>
                    <button onClick={click}>7</button>
                    <button onClick={click}>8</button>
                    <button onClick={click}>9</button>
                    <button onClick={click}>&times;</button>
                    <button onClick={click}>4</button>
                    <button onClick={click}>5</button>
                    <button onClick={click}>6</button>
                    <button onClick={click}>&ndash;</button>
                    <button onClick={click}>1</button>
                    <button onClick={click}>2</button>
                    <button onClick={click}>3</button>
                    <button onClick={click}>+</button>
                    <button onClick={click}>0</button>
                    <button onClick={click}>.</button>
                    <button onClick={click}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator