import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-300 flex justify-between p-4 m-3'>
        <div className='text-2xl'>Logo</div>
        <div className='flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Singup</Link>
            <Link to="/productPage/50">Product Page</Link>
            {/* <p>Home</p>
            <p>Login</p>
            <p>Signup</p> */}
        </div>
    </div>
  )
}

export default Navbar