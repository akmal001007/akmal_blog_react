import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <h1>Akmal Blog</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="create">New Blog</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar