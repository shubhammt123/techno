import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { MdLogout } from "react-icons/md";
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
    const { isAuth , role } = useSelector((state)=>state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        dispatch(logout());
    }

    
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
            <button className='text-xl active:text-gray-600' onClick={handleLogout}>
            <MdLogout  />
            </button>
        </div>
                    : 
                    <div className='flex gap-5 font-medium'>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/adminUser">Users</Link>
            <Link to="/adminProduct">Products</Link>
            <Link to="/adminOrder">Orders</Link>
            <button className='text-xl active:text-gray-600' onClick={handleLogout}>
            <MdLogout  />
            </button>
            
            
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