import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Register = () => {
    const [data, setdata] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        mobileNumber: ''
    })

    const { firstname, lastname, email, password, mobileNumber } = data;

    const changeHandler = e => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const body = {
        attributes: {
            ...data
        }
    }

    const submiHandler = e => {
        e.preventDefault();
        if (password.length <= 5) {
            return alert("password length must be more than 5 char")
        }
        if (mobileNumber.length !== 10) {
            return alert("mobileNumber length must be 10")
        }

        // https://teluguskillhub-d4982-default-rtdb.firebaseio.com // register.json for file
        // http://localhost:4002/api/register

        axios.post('http://localhost:4002/api/register', body)
            .then((res) => alert(res.data.message))
            .catch((err) => alert(err.response.data.message))
    }

    return (
        <center className='margin d-flex flex-row justify-content-end'>
            <div className='Regi d-flex flex-row justify-content-center'>
                <form onSubmit={submiHandler} autoComplete='off'>
                    <h3>Sign Up</h3>
                    <label>First Name: </label>
                    <input type="text" onChange={changeHandler} name="firstname" value={firstname} placeholder='first name' /><br />

                    <label>Last name: </label>
                    <input type="text" onChange={changeHandler} name="lastname" value={lastname} placeholder='last name' /><br />

                    <label>E-mail: </label>
                    <input type="email" onChange={changeHandler} name="email" value={email} placeholder='email' /><br />

                    <label>Password: </label>
                    <input type="password" onChange={changeHandler} name="password" value={password} placeholder='password' /><br />

                    <label>Mobile number: </label>
                    <input type="number" onChange={changeHandler} name="mobileNumber" value={mobileNumber} placeholder='mobile number' /><br />

                    <button style={{ backgroundColor: "green", color: 'white' }} type='submit'>Register</button>
                </form>
            </div>
        </center>
    )
}

export default Register

{/* <div className="mb-3">
                        <label>First name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </div> */}

                //     <div className="d-grid">
                //     <button type="submit" className="btn btn-primary">
                //         Sign Up
                //     </button>
                // </div>
                // <p className="forgot-password text-right">
                //     Already registered <a href="/sign-in">sign in?</a>
                // </p>


            //     <div className="auth-wrapper">
            // <div className="auth-inner"></div>