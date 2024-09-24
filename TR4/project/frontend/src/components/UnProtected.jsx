import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const UnProtected = () => {
    const { isAuth } = useSelector((state)=>state.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuth){
           return navigate("/")
        }
    },[isAuth]);
  return (
    <div><Outlet /></div>
  )
}

export default UnProtected