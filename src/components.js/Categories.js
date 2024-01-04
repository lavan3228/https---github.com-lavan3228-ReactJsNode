import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { store } from '../App'
import { Redirect } from 'react-router-dom'


function Categories() {
    console.log("calling categories");
    const [token, setToken] = useContext(store)
    console.log(token, "fhfh2");
    const [cart, setCart] = useState([]);

    const [home, setHome] = useState(false);


    // const changeHandler = e => {
    //     setProducts({ ...products, [e.target.name]: e.target.value })
    // }

    useEffect(() => {
        axios.get('http://localhost:4002/api/cart/list', {
            headers: {
                'x-auth-token': token
            }
        }).then(res => { setCart(res.data.data) }).catch((err) => { return console.log(err), '9hjcfbh' })
    }, [])

    // console.log(cart, cart.result._id, "dhfdh2");
    // console.log(cart, cart.result[0].bill, "dhfdh3");
    // console.log(cart, cart.result[0].items[0].name, "dhfdh3");x



    // if (!cart.length) {
    //     console.log("dnhh67");
    //     var result = "No Data Found"
    // }

    if (!token) {
        return <Redirect to='/login' />
    }

    if (home) {
        return <Redirect to='/myprofile' />
    }

    return (
        <div className="App">
            <button style={{ justifyContent: 'right', display: "flex" }} onClick={() => setHome(true)}>Home</button>

            {/* <h1>{result}</h1> */}
            {/* <button style={{ justifyContent: 'right', display: "flex" }} onClick={() => setHome(true)}>Home</button> */}

            <h1>categories Store</h1>
            {/* <div className="product-list">
                    <div key={cart._id} className="cart">
                        <p>${cart.bill}</p>
                        <p>{cart}</p>
                    </div>
                <button onClick={() => setToken(null)}>Logout</button>
            </div> */}
        </div>
    )
}

export default Categories
