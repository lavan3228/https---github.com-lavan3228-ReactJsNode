import { Link } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import { store } from '../App'
import { Redirect } from 'react-router-dom'

function Header() {
    const [token, setToken] = useContext(store)

    if (!token) {
        return <Redirect to='/login' />
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='w-100' class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* <Link to='/home'> */}
                    <a className="nav-item nav-link active pd-3" href="#">Home<span class="sr-only">(current)</span></a>
                    {/* </Link> */}
                    <Link to='/allproducts'>
                        <a className="nav-item nav-link active pd-3" href="#">Products <span class="sr-only">(current)</span></a>
                    </Link>
                    <Link to='/order'>
                        <a className="nav-item nav-link active pd-3" href="#">Orders</a>
                    </Link>
                    <Link to='/categories'>
                        <a className="nav-item nav-link active pd-3" href="#">Categories</a>
                    </Link>
                    <Link to='/cart'>
                        <a className="nav-item nav-link active pd-3" href="#">Cart</a>
                    </Link>
                    <button style={{ backgroundColor: 'red', color: 'white' }} className='ml-5' onClick={() => setToken(null)}>Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default Header