import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useFormik } from 'formik';

const Register = () => {
    // const [data, setdata] = useState({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     password: '',
    //     mobileNumber: ''
    // })

    // const changeHandler = e => {
    //     setdata({ ...data, [e.target.name]: e.target.value })
    // }
    // const body = {
    //     attributes: {
    //         ...data
    //     }
    // }

    // const { firstname, lastname, email, password, mobileNumber } = data;

    // const submiHandler = e => {
    //     e.preventDefault();
    //     if (firstname.length <= 5) {
    //         alert("firstname must be at least 5 characters");
    //     } else if (password.length <= 8) {
    //         alert("password must be at least 8 characters");
    //     }
    //     axios.post('http://localhost:4002/api/register', body).then(
    //         (res) => {
    //             console.log(res, "sdfasa")
    //             return alert(res.data.message)
    //         }).catch((err) => alert(err.response.data.message))
    // }

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            mobileNumber: ''
        },
        onSubmit: (values) => {
            console.log('form submit', values);
            axios.post('http://localhost:4002/api/register', initialValues).then(
                (res) => {
                    console.log(res, "sdfasa")
                    return alert(res.data.message)
                }).catch((err) => alert(err.response.data.message))
        },
        validate: (values) => {
            let errors = {};
            if (!values.firstname) {
                errors.name = 'First Name Required'
            }
            if (!values.lastname) {
                errors.name = 'Last Name Required'
            }
            if (!values.email) {
                errors.name = 'Email Required'
            }
            if (!values.password) {
                errors.name = 'Password Required'
            }
            if (!values.mobileNumber) {
                errors.name = 'Mobile Number Required'
            }
        }
    })

    return (
        <div>
            <center>
                <form onSubmit={formik.handleSubmit} autoComplete='off'>
                    <h3>Register</h3>
                    <label>First Name: </label>
                    <input type="text" onChange={formik.handleChange} name="firstname" id='firstname' placeholder='first name' value={formik.values.firstname} /><br />
                    {formik.errors.firstname ? <div className='errors'>{formik.errors.firstname}</div> : null}

                    <label>Last name: </label>
                    <input type="text" onChange={formik.handleChange} name="lastname" id='lastname' placeholder='last name' value={formik.values.lastname} /><br />
                    {formik.errors.lastname ? <div className='errors'>{formik.errors.lastname}</div> : null}

                    <label>E-mail: </label>
                    <input type="email" onChange={formik.handleChange} name="email" id='email' placeholder='email' value={formik.values.email} /><br />
                    {formik.errors.lastname ? <div className='errors'>{formik.errors.email}</div> : null}

                    <label>Password: </label>
                    <input type="password" onChange={formik.handleChange} name="password" id='password' placeholder='password' value={formik.values.password} /><br />
                    {formik.errors.lastname ? <div className='errors'>{formik.errors.password}</div> : null}

                    <label>Mobile number: </label>
                    <input type="text" onChange={formik.handleChange} name="mobileNumber" id='mobileNumber' placeholder='mobile number' value={formik.values.mobileNumber} /><br />
                    {formik.errors.lastname ? <div className='errors'>{formik.errors.mobileNumber}</div> : null}

                    <button type='submit'>Register</button>
                </form>
            </center>
        </div>
    )
}

export default Register