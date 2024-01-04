import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { store } from '../App'
import { Redirect, Link } from 'react-router-dom'
import Header from './Header'
import Myprofile from './Myprofile'
import { Row } from 'react-bootstrap'

function Cart() {
    console.log("calling cart");
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
        }).then(res => {
            console.log(res.data.data, 'manid');
            setCart(res.data.data.result)
        }).catch((err) => { return console.log(err), '9hjcfbh' })
    }, [])

    // console.log(cart, cart.result._id, "dhfdh2");
    // console.log(cart, cart.result[0].bill, "dhfdh3");
    // console.log(cart, cart.result[0].items[0].name, "dhfdh3");x

    console.log(cart, "jfjf923"); //  cart.result[0].items[0].name, cart.result[0].items[0].imageUrl
    // console.log(cart.result, "jfjf923");


    // if (!cart.result) {
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
            <h1>Hi</h1>
            <h1>cart Store </h1>
            {cart.map(cart => (
                <div style={{ margin: "5px" }} className="cart-list">

                    {cart.items.map(item => {
                        return (<div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center", margin: "15px" }}>
                            <img src={item.imageUrl} alt={item.itemName} style={{ width: "250px", height: "300px" }} /><br />
                            <h2>{item.name}</h2>
                        </div>)
                    })}<br />
                    
                    <h3>{cart.bill}</h3>
                    <button className='addtocart' onClick={() => alert("Added to Wichlist")}>Move To Wishlist</button>
                    <button className='addtocart' onClick={() => alert("Removed Cart Successfully")}>Remove From Cart</button>
                </div>
            ))}
            <button onClick={() => alert("Your Order is Created Successfully")}>Create Order</button>
        </div>
    )
}

export default Cart

