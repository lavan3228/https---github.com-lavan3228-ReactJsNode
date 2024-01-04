import React, { useState, useContext } from 'react'
import axios from 'axios'
import { store } from '../App'
import { Redirect } from 'react-router-dom'

const Login = () => {
    console.log("calling login");
    const [token, setToken] = useContext(store)


    const [data, setData] = useState({
        email: '',
        password: '',
    })

    // const [isSuccesLogin, setIsSuccesLogin] = useState(false)


    const { email, password } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const body = {
        attributes: {
            ...data
        }
    }

    //     try {
    //         const body = {
    //             attributes: {

    //                 email,
    //                 password,

    //             }
    //         }
    //         const response = await axios.post('http://localhost:4002/api/signin', body);
    //         console.log(response, "dndhdj");

    //         //   console.log(data, "userRegister");
    //         if (response.status === 200) {
    //             alert("Login Successful");

    //         } else {
    //             alert("Something went wrong");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }

    const submiHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:4002/api/login', body).then(
            res => setToken(res.data.data.accessToken)
        ).catch((err) => alert(err.response.data.message))
    }

    //setToken(res.data.token)
    if (token) {
        return <Redirect to='/myprofile' />
    }

    return (
        <center className='margin'>
            <div className='Regin d-flex flex-row justify-content-center'>
                <center>
                    <form onSubmit={submiHandler} autoComplete='off'>
                        <h3>Sign In</h3>
                        <label>Email address: </label>
                        <input type="text" onChange={changeHandler} name="email" placeholder='Enter email' value={email} /><br />
                        <label>Password: </label>
                        <input type="password" onChange={changeHandler} name="password" placeholder='Enter password' value={password} /><br />
                        <input style={{ backgroundColor: "green", color: 'white' }} type='submit' name="Submit" /><br />
                    </form>
                </center>
            </div>
        </center>
    )
}

export default Login


{/* <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div> */}

                //     <div className="mb-3">
                //     <label>Email address</label>
                //     <input
                //         type="email"
                //         className="form-control"
                //         placeholder="Enter email"
                //         onChange={(e) => setEmail(e.target.value)}
                //     />
                // </div>


                // if (response.status === 200) {
                //     setIsSuccesLogin(!isSuccesLogin)
                //     // return <Navigate to = '/Home' replace = {true}/>
                // } else {
                //     alert("Something went wrong");
                // }

            //     <p className="forgot-password text-right">
            //     <a href="/sign-up">Sign Up</a>
            // </p>