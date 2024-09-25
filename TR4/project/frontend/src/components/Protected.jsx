import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Protected = ({allowedRole}) => {
    const { isAuth , role } = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isAuth){
            return navigate("/")
        }
    },[isAuth]);

    useEffect(()=>{
        if(!allowedRole.includes(role)){
            return navigate("/")
        }
    },[role])
  return (
    <div className='w-full h-full'>
        <Navbar />
        <Outlet />
        </div>
  )
}

export default Protected