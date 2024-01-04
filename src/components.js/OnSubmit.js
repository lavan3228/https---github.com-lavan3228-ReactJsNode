import axios from 'axios';
import React, { useState, useEffect } from 'react'

const OnSubmit = () => {

    const [data, setData] = useState({
        username: '',
        password: '',
        value:'',
    })
    const { username, password, value } = data; // this is value in UI

    const onChange = e => { // this is for set data
        setData({ ...data, [e.target.name]: [e.target.value] })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(data, "dhdj76");
        // const vars = axios.post("", data);   // we will use axios here
    }

    // user provided data , save to backend
    return (
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <input type='text' name='username' value={username}
                        onChange={onChange} placeholder='Username' /><br />

                    <input type='password' name='password' value={password}
                        onChange={onChange} placeholder='Password' /><br />

                    <input type='number' name='value' value={value}
                        onChange={onChange} placeholder='Value' /><br />

                    <input type='submit' name='submit' />
                </form>
            </center>
        </div>
    )
}

export default OnSubmit
