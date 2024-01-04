import React, { useContext, useState, useEffect } from 'react'
import { store } from '../App'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import '../App.css';
import { Link } from 'react-router-dom'
import AllProducts from './AllProducts'
import Header from './Header';
import Order from './Order';

const Myprofile = () => {
    console.log("calling dashboard");
    const [token, setToken] = useContext(store);
    const [data, setdata] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:4002/api/myprofile', {
            headers: {
                'x-auth-token': token
            }
        }).then(res => setdata(res.data)).catch((err) => console.log(err))
    }, [])

    if (!token) {
        return <Redirect to='/login' />
    }
    console.log("jkdk", data);
    return (
        <div>
            {data &&
                <div>
                    <Header />
                    <nav className='nav1'>
                        <h1 style={{color:'green '}}>Welcome {data.data.firstname} {data.data.lastname}</h1>
                    </nav>
                    <h3>welcome to Shopping App</h3>
                    <img src='https://st2.depositphotos.com/1017986/5966/i/950/depositphotos_59669703-stock-photo-couple-with-smartphone-and-shopping.jpg' style={{ width: "100%", height: "700px" }} />
                </div>
            }
        </div>
    )
}

export default Myprofile


