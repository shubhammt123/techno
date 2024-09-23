import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const Unprotected = () => {
    const { isAuth } = useSelector((state)=>state.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuth){
            navigate("/");
        }
    },[isAuth]);

  return (
    <div className='w-full h-full m-0 p-0'><Outlet /></div>
  )
}

export default Unprotected