import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { isAuth , role } = useSelector((state)=>state.auth);
    console.log(role)
  return (
    <div className='flex justify-between items-center m-4 bg-gray-100 p-4'>
        <div className='text-3xl font-semibold'>
            LOGO
        </div>
        <div>
            <input type="text" placeholder='Search...' className='p-2 border border-gray-700 outline-none'  />
        </div>
        <div>
            {
                isAuth ? (
                    role === "User" ? 
                    <div className='flex gap-5 font-medium'>
        <Link to="/cart">Cart</Link>
            <Link to="/myorder">My Orders</Link>
            <Link to="/profile">Profile</Link>
        </div>
                    : 
                    <div className='flex gap-5 font-medium'>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/adminUser">Users</Link>
            <Link to="/adminProduct">Products</Link>
            <Link to="/adminOrder">Orders</Link>
        </div>
                ) :
                (
                    <div className='flex gap-5 font-medium'>
        <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
                )
            }
        </div>
    </div>
  )
}

export default Navbar