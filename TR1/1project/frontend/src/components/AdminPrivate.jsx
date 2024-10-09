import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';


const AdminPrivate = ({allowedRole}) => {

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
    <div><Outlet /></div>
  )
}

export default AdminPrivate