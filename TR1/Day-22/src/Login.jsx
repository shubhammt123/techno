import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [loading , setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        setTimeout(()=>{
            console.log({
                email : email,
                password : password
            });
            setLoading(false);
            alert(`${email} Logged-In`);
            navigate("/");
            
        },5000);
    }
  return (
   <div className='w-4/5 h-4/5 bg-white flex rounded shadow-xl'>
    <div className='w-1/2 flex justify-center items-center'>
        <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" className='h-full' />
    </div>
    <div className='w-1/2 flex flex-col justify-center items-center gap-5'>
        <h1 className='text-2xl font-semibold '>Welcome Back !</h1>
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' className='border border-gray-700 p-2 rounded w-3/5 outline-none my-3' onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='Password' className='border border-gray-700 p-2 rounded w-3/5 outline-none my-3' onChange={(e)=>{setPassword(e.target.value)}} />
        <button type='submit' className='p-2 w-3/5 bg-gray-700 rounded text-white font-medium active:bg-gray-800 shadow'>{loading ? <CircularProgress color='gray' size={24} /> : "Login"}</button>
        </form>
    </div>
   </div>
  )
}

export default Login