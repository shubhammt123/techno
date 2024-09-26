import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        if(token){
            const decodeToken = jwtDecode(token);
            const user =  {
                token,
                user : decodeToken,
                role : decodeToken.role
            }
            dispatch(loginWithGoogle(user));
            navigate("/");
        }else{
            navigate("/login");
        }
    },[dispatch , navigate]);
  return (
    <div>GoogleAuth</div>
  )
}

export default GoogleAuth