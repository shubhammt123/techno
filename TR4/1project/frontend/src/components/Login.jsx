import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { login } from '../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const validationSchema = z.object({
        email : z.string().min(1,"Email is required").email("Invalid Email"),
        password : z.string().min(1, "Password is required")
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading , error , isAuth } = useSelector((state)=>state.auth);


    const { register , handleSubmit , formState : {errors} } = useForm({
        resolver : zodResolver(validationSchema)
    });
    const onSubmit = async (data)=>{
        dispatch(login(data));
    }

    useEffect(()=>{
        if(error){
            alert(error.message)
        }
    },[error]);

    useEffect(()=>{
      if(isAuth){
        navigate("/")
      }
    },[isAuth]);

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';  
      };
    return (
        <div className='h-screen w-screen flex justify-center items-center bg-[#e4e4e4]'>
        <div className='flex w-1/3 h-[90%] justify-between items-center bg-white shadow-2xl'>
            
            <div className='w-full h-full flex flex-col justify-start items-center'>
            <h1 className='text-3xl w-full font-semibold text-center h-1/4 flex items-center justify-center'>Welcome Back !</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col items-center'>
                    <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-full flex flex-col items-center'>
                    <label className='text-gray-500 font-medium'>Email</label>
                    <input type="email" className={`block p-2 border outline-none w-4/5 my-2 ${errors.email ? 'border-red-500' : "border-gray-700"}`} {...register("email")}  />
                    {errors.email && (
                            <p className='text-xs text-red-500'>{errors.email.message}</p>
                        ) }
                    </div>
                    <div className='w-full flex flex-col items-center'>
                    <label className='text-gray-500 font-medium '>Password</label>
                    <input type="password" className={`block p-2 border border-gray-700 outline-none w-4/5 my-2 ${errors.password ? 'border-red-500' : "border-gray-700"}`} {...register("password")} />
                    {errors.password && (
                            <p className='text-xs text-red-500'>{errors.password.message}</p>
                        ) }
                    </div>
                    
                    </div>
                    <button className='p-2 w-4/5 my-4 font-medium text-gray-100 shadow bg-black active:bg-gray-800'>{isLoading ? "Loading..." : "Log-In"}</button>
                </form>
                <button className='p-2 w-4/5 my-2 font-medium text-gray-100 shadow bg-red-700 active:bg-red-800' onClick={handleGoogleLogin}>Log-In With Google</button>
                <div className='mt-2 text-sm'>
                    <p>Don't have an account? <Link to="/signup"><span className='text-blue-600 cursor-pointer hover:underline'>Create Now!</span></Link></p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;

