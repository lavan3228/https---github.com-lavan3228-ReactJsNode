import React from 'react'

function UseReducer() {
    return (
        <div>
            <center>
                <h1>Hello useReducer - use to store state values to local const variable</h1>
                <h2>It has work flow as Redux()</h2>
                <h3 style={{ color: 'pink' }}>The useReducer Hook is used to store and update states, just like the useState Hook.
                    <br /> It accepts a reducer function as its first parameter and the initial state as the second.<br />
                    useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.</h3>
                <a href="https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/#when-use-usereducer-hook">When to use the useReducer Hook</a>
            </center>
        </div >
    )
}

export default UseReducer
