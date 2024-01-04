import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { store } from '../App'
import { Redirect } from 'react-router-dom'


function AllProducts() {
    console.log("calling products");
    const [token, setToken] = useContext(store)
    console.log(token, "fhfh2");
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({
        items: [],
        bill: 0
    });

    console.log(products, "products");

    const [cartmove, setCartmove] = useState(false)
    const [home, setHome] = useState(false);


    // const changeHandler = e => {
    //     setProducts({ ...products, [e.target.name]: e.target.value })
    // }

    useEffect(() => {
        axios.get('http://localhost:4002/api/allproducts', {
            headers: {
                'x-auth-token': token
            }
        }).then(res => { setProducts(res.data.data) }).catch((err) => { return console.log(err), '9hjcfbh' })
    }, [])

    if (!token) {
        return <Redirect to='/login' />
    }

    // if (cart && cart.length) {
    //     useEffect(() => {
    //         axios.post('http://localhost:4002/api/add/cart', body)
    //         .then((res) => alert(res.data.message))
    //         .catch((err) => alert(err.response.data.message))
    //     }, [])
    // }

    if(cartmove){
        return <Redirect to='/cart' />
    }

    if(home){
        return <Redirect to='/myprofile' />
    }

    return (
        <div className="App">
            <button style={{ justifyContent: 'right', display: "flex" }} onClick={() => setCartmove(true)}>Cart</button>
            <button style={{ justifyContent: 'right', display: "flex" }} onClick={() => setHome(true)}>Home</button>
            <h1 className='heading'>T-Shirt Store</h1>
            <div style={{ display: "flex", flexWrap: 'wrap' }} className="product-list">
                {products.map((product) => (
                    <div style={{ margin: "20px" }} key={product._id} className="product">
                        <img src={product.imageUrl} alt={product.productName} style={{ width: "250px", height: "300px" }} />
                        <h2>{product.productName}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button className='addtocart' onClick={() => alert("Added Cart Successfully")}>Add to Cart</button>
                        {/* onClick={() => setCart({ items: [{ productId: product._id, name: product.productName, quantity: product.quantity, price: product.price }], bill: product.bill })} */}
                    </div>
                ))}
            </div>
            {/* <button onClick={() => setToken(null)}>Logout</button> */}
        </div>
    )
}

export default AllProducts