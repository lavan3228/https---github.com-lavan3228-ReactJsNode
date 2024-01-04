import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => setCalculation(() => count * 2), console.log(count), [count]); // after return statement useeffect call only once
    // it will call every time when dependancy call everytime. check in console

    return (
        <div>
            <center>
                <h2>Hi useEffect, you clicked count: {count} of times</h2>
                <button onClick={() => setCount(count + 1)}>Change</button>
                <p>Calculation: {calculation}</p>
            </center>
            <h3 style={{ color: "green" }}>1. The useEffect Hook allows you to perform side effects in your components.<br />
                2. some examples of side effects are: Fetching data, Directly updating the DOM, and Timers.</h3>
        </div>
    )
}

export default UseEffect
