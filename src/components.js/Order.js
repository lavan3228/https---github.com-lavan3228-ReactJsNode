import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { store } from '../App'
import { Redirect } from 'react-router-dom'
import Header from './Header'


function Order() {
    console.log("calling order");
    const [token, setToken] = useContext(store)
    console.log(token, "fhfh2");
    const [order, setOrder] = useState([]);
    const [home, setHome] = useState(false);


    // const changeHandler = e => {
    //     setProducts({ ...products, [e.target.name]: e.target.value })
    // }

    useEffect(() => {
        axios.get('http://localhost:4002/api/orders', {
            headers: {
                'x-auth-token': token
            }
        }).then(res => { setOrder(res.data.data) }).catch((err) => { return console.log(err), '9hjcfbh' })
    }, [])

    if (!token) {
        return <Redirect to='/login' />
    }

    if(home){
        return <Redirect to='/myprofile' />
    }

    console.log(order, 'fnfj');

    return (
        <div className="App">
            <button style={{ justifyContent: 'right', display: "flex" }} onClick={() => setHome(true)}>Home</button>
            <Header />
            <h1>Welcome to your orders</h1>
            <h2>{order[0].address}</h2>
            {/* <h2>{order}</h2>
            <h2>{order}</h2> */}

        </div>
    )
}

export default Order