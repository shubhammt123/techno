import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {

    const navigate  = useNavigate();

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        if(token){
            localStorage.setItem("token",token);

            const decodedToken = jwtDecode(token);
            const user = {
                token , 
                user :  decodedToken,
                role : decodedToken.role
            }
            navigate("/");
        }else{
            navigate("/login");
        }
    },[navigate]);
  return (
    <div>GoogleAuth</div>
  )
}

export default GoogleAuth