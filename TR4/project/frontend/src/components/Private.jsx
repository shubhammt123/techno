import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const Private = ({allowedRole}) => {

    const { isAuth , role } = useSelector((state)=>state.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isAuth){
            return navigate("/login")
        }
    
        if(!allowedRole.includes(role)){  
            return navigate("/")
        }
    },[isAuth , role]);
  return (
    <div className='w-full h-full'>
        <Navbar />
        <Outlet />
        </div>
  )
}

export default Private