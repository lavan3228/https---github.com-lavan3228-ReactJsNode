import React, { useState } from 'react';
import '../App.css';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);

    const handler = e => {
        setInput(e.target.value)
    }

    // const getResult = e => {
    //     setResult = 0
    // }


    return (
        <div>
            <center>
                <input type='text' value={input} name='input' onChange={handler} /><br />
                <button style={{ margin: "10px" }} onClick={() => setResult(eval(input))}>Result</button><br />
                <h4 style={{color: 'green'}}>Result is: {result}</h4>
                
                <button onClick={() => setInput(input+ '1')}>1</button>
                <button onClick={() => setInput(input+ '2')}>2</button>
                <button onClick={() => setInput(input+ '3')}>3</button>
                <button onClick={() => setInput(input+ '4')}>4</button>
                <button onClick={() => setInput(input+ '5')}>5</button><br/>

                <button onClick={() => setInput(input+ '6')}>6</button>
                <button onClick={() => setInput(input+ '7')}>7</button>
                <button onClick={() => setInput(input+ '8')}>8</button>
                <button onClick={() => setInput(input+ '9')}>9</button>
                <button onClick={() => setInput(input+ '0')}>0</button><br/>

                <button onClick={() => setInput(input+ '+')}>+</button>
                <button onClick={() => setInput(input+ '-')}>-</button>
                <button onClick={() => setInput(input+ '*')}>*</button>
                <button onClick={() => setInput(input+ '/')}>/</button>
                <button onClick={() => {setInput(""); setResult(0)}}>clr</button>

            </center>
        </div>
    )
}

export default Calculator
