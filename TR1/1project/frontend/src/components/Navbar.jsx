import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { MdLogout } from "react-icons/md";
import { logout } from '../redux/slices/authSlice';
import { FaShoppingCart } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
import { PiShoppingBagFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Badge from '@mui/material/Badge';

const Navbar = () => {
    const { isAuth, role } = useSelector((state) => state.auth);
    const { cartItem } = useSelector((state)=>state.cart)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(logout());
    }


    return (
        <div className='flex justify-between items-center m-4  p-4  bg-white
        '>
            <div className='text-3xl font-semibold'>
                LOGO
            </div>
            <div className='w-1/3'>
                <input type="text" placeholder='Search...' className='p-2 border border-gray-700 outline-none w-full' />
            </div>
            <div>
                {
                    isAuth ? (
                        role === "User" ?
                            <div className='flex gap-5 text-lg font-normal'>
                                <Link to="/cart"><div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <Badge badgeContent={cartItem.length} color="error">
                                    <div  className='flex flex-col items-center'>
                                    <FaShoppingCart />
                                    <p className='text-xs'>Cart</p>
                                    </div>
                                    
                                    </Badge>
                                </div></Link>
                                <Link to="/myorder"><div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <PiShoppingBagFill />
                                    <p className='text-xs'>My Orders</p>
                                </div></Link>
                                <Link to="/profile"><div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <CgProfile />
                                    <p className='text-xs'>Profile</p>
                                </div></Link>
                                <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <button className=' active:text-gray-600' onClick={handleLogout}>
                                    <MdLogout />
                                    
                                </button>
                                <p className='text-xs'>Logout</p>
                                </div>
                                
                            </div>
                            :
                            <div className='flex gap-5 font-medium'>
                                <Link to="/dashboard"><div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <MdOutlineDashboardCustomize />
                                    <p className='text-xs'>Dashboard</p>
                                </div></Link>
                                <Link to="/adminUser"><div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <FaUsers />
                                    <p className='text-xs'>Users</p>
                                </div></Link>
                                <Link to="/adminProduct"><div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <FaUsers />
                                    <p className='text-xs'>Products</p>
                                </div></Link>
                                <Link to="/adminOrder"><div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <FaUsers />
                                    <p className='text-xs'>Orders</p>
                                </div></Link>
                                <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <button className=' active:text-gray-600' onClick={handleLogout}>
                                    <MdLogout />
                                    
                                </button>
                                <p className='text-xs'>Logout</p>
                                </div>


                            </div>
                    ) :
                        (
                            <div className='flex gap-5 text-lg font-normal'>
                                <Link to="/cart"><div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <Badge badgeContent={cartItem.length} color="error">
                                    <div  className='flex flex-col items-center'>
                                    <FaShoppingCart />
                                    <p className='text-xs'>Cart</p>
                                    </div>
                                    
                                    </Badge>
                                </div></Link>
                                <Link to="/login"><div className='flex flex-col items-center hover:transform hover:scale-105'><RiLoginBoxFill />
                                    <p className='text-xs'>
                                        Login</p></div></Link>
                                <Link to="/signup"><div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <FaUserPlus />
                                    <p className='text-xs'>Signup</p>
                                </div></Link>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Navbar