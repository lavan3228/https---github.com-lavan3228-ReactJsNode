import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../App'

const Nav = () => {
    const [token, setToken] = useContext(store)
    return (
        <div> 
            <nav className='navbar d-flex flex-row justify-content-space-between'>
            <div className='d-flex flex-row'>
                <img className='images' src='https://img.freepik.com/premium-vector/tshirt-logo-clothing-logo-apparel-store-icon-fashion-logo-tshirt-icon-design-template_657888-4.jpg' height="40px" width="40px" />
                <h3 className='newHeader'>WELCOME TO T-SHIRTS</h3>
            </div>
            {!token &&
                <ul className='d-flex flex-row'>
                    <Link to='/register'><li className='mr-3 bg'>Register</li></Link>
                    <Link to='/login'><li className='bg'>Login</li></Link>
                </ul>
            }
            </nav>
        </div>
    )
}

export default Nav