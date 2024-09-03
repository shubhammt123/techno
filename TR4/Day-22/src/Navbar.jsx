import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-300 flex justify-between p-5'>
        <div>Logo</div>
        <div className='flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/about-us">About Us</Link>
        </div>
    </div>
  )
}

export default Navbar