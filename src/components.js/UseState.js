import React, { useState } from 'react'

function UseState() {
    const [name, setName] = useState("Apple");
    const [count, setCount] = useState(0);

    return (
        <div>
            <center>
                <h3>{name}</h3>
                <h2>{count}</h2>
                <button onClick={() => { return setName("One plus"), setCount(count + 1) }}>Change</button>
            </center>
            <h4 style={{ color: 'green' }}>1. The React useState Hook allows us to track state in a function component.<br />
                2. State generally refers to data or properties that need to be tracking in an application.</h4>
            <h5 style={{ color: 'red' }}>useState accepts an initial state and returns two values:<br />
                a. The current state.<br />
                b. A function that updates the state.</h5><br />
        </div>
    )
}

export default UseState