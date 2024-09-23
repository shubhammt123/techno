import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { login } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';


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
    return (
        <div className='flex w-[90%] h-4/5 justify-between items-center bg-white shadow-2xl'>
            <div>
                <img src="https://th.bing.com/th/id/OIP.oiGZChbKgg-vXPPbsrd5QQHaFN?rs=1&pid=ImgDetMain" alt="" />
            </div>
            <div className='w-1/2 h-full flex flex-col justify-start'>
            <h1 className='text-3xl w-4/5 font-semibold text-center h-1/3 flex items-center justify-center'>Welcome Back !</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=''>
                    <div>
                    <label className='text-gray-500 font-medium'>Email</label>
                    <input type="email" className={`block p-2 border outline-none w-4/5 my-2 ${errors.email ? 'border-red-500' : "border-gray-700"}`} {...register("email")}  />
                    {errors.email && (
                            <p className='text-xs text-red-500'>{errors.email.message}</p>
                        ) }
                    </div>
                    <div>
                    <label className='text-gray-500 font-medium'>Password</label>
                    <input type="password" className={`block p-2 border border-gray-700 outline-none w-4/5 my-2 ${errors.password ? 'border-red-500' : "border-gray-700"}`} {...register("password")} />
                    {errors.password && (
                            <p className='text-xs text-red-500'>{errors.password.message}</p>
                        ) }
                    </div>
                    
                    </div>
                    <button className='p-2 w-4/5 my-4 font-medium text-gray-600 shadow bg-sky-300 active:bg-sky-400'>{isLoading ? "Loading" : "Log-In"}</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

