import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { isAuth , role } = useSelector((state)=>state.auth);

    return (
        <div className='flex justify-between items-center bg-sky-950 p-2 py-4 w-full'>
            <div className='text-white text-2xl font-medium'>
            Logo
            </div>
            <div>
                <input type="text" placeholder='Search...' className='p-2 py-1 border border-gray-100 bg-transparent text-white outline-none' />
            </div>
            {
                isAuth 
                ? 
                (
                    role === "User" 
                    ? 
                    (
                        <div className='flex gap-5 text-white'>
                <Link to="/cart">Cart</Link>
                <Link to="/myorder">My-Orders</Link>
                <Link to="/profile">Profile</Link>
                </div>
                    ) 
                    : 
                    (
                        <div className='flex gap-5 text-white'>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/adminUser">Users</Link>
                <Link to="/adminProduct">Products</Link>
                <Link to="/adminOrder">Orders</Link>
                <Link to="/profile">Profile</Link>
                </div>
                    )
                ) 
                : 
                (
                <div className='flex gap-5 text-white'>
                <Link to="/cart">Cart</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                </div>
                )
            }
            
            </div>
    )
}

export default Navbar