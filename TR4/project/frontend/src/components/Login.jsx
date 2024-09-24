import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { login, signup } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const validationSchema = z.object({
        "email" : z.string().min(1,"Email is required"),
        "password" : z.string().min(1,"Password is required"),
        
    })
    const { register , handleSubmit , formState : {errors} } = useForm({
        resolver : zodResolver(validationSchema)
    });

    const { isAuth } = useSelector((state)=>state.auth);


    
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onSubmit = (data)=>{
        dispatch(login(data));
        
    };

    useEffect(()=>{
      if(isAuth){
        navigate("/");
      }
    },[isAuth]);
    
  return (
    <div className='w-4/5 h-4/5 flex justify-center items-center bg-white shadow-2xl rounded'>
        <div className='w-1/2'>
            <img src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" className='w-full'/>
        </div>
        <div className='w-1/2 flex flex-col gap-8'>
        <h1 className='text-3xl text-blue-500 w-[90%] font-semibold text-center'>Welcome Back ! Log-In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    
                    <div>
                        <label className='text-blue-500 font-medium block'>Email</label>
                        <input type="email" className={`p-2 border   w-[90%] my-2 rounded shadow-xl ${errors.email ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500"}`} {...register("email")} />
                        {errors.email && (
                            <p className='text-xs text-red-500'>{errors.email.message}</p>
                        ) }
                    </div>
                    <div>
                        <label className='text-blue-500 font-medium block'>Password</label>
                        <input type="password" className={`p-2 border w-[90%] my-2 rounded shadow-xl ${errors.password ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500"}`} {...register("password")} />
                        {errors.password && (
                            <p className='text-xs text-red-500'>{errors.password.message}</p>
                        ) }
                    </div>
                    
                </div>
                <button className='bg-blue-500 my-5 text-white font-medium p-2 w-[90%] shadow-xl rounded active:bg-blue-600'>Log-In</button>
            </form>
        </div>
    </div>
  )
}

export default Login