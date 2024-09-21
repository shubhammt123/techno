import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { setError, setLoading, setSuccess, signupUser } from '../redux/slices/authSlice';

const Signup = () => {
    const validationSchema = z.object({
        name : z.string().min(1,"Name is required").max(40,"Name cannot exceed 40 charater"),
        email : z.string().min(1,"Email is required").email("Invalid Email"),
        password : z.string().min(8, "Password must be of 8 charaters")
        .regex(/[a-z]/,"Password must contain atleast 1 lower case letter")
        .regex(/[A-Z]/,"Password must contain atleat 1 upper case letter")
        .regex(/[0-9]/,"Password must contain atleast 1 number")
        .regex(/[\w_]/,"Password must contain  atleast 1 special charater"),
        phoneNumber : z.string().min(10,"Phone number is required")
    });

    const dispatch = useDispatch();


    const { register , handleSubmit , formState : {errors} } = useForm({
        resolver : zodResolver(validationSchema)
    });
    const onSubmit = async (data)=>{
        dispatch(signupUser(data));
    }
    return (
        <div className='flex w-[90%] h-4/5 justify-between items-center bg-white shadow-2xl'>
            <div>
                <img src="https://th.bing.com/th/id/OIP.oiGZChbKgg-vXPPbsrd5QQHaFN?rs=1&pid=ImgDetMain" alt="" />
            </div>
            <div className='w-1/2 h-full flex flex-col justify-start'>
            <h1 className='text-3xl font-semibold text-center h-1/3 flex items-center justify-center'>Welcome !</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <label className='text-gray-500 font-medium'>Name</label>
                        <input type="text" className={`block p-2 border outline-none w-4/5 my-2 ${errors.name ? ' border-red-500' : 'border-gray-700'}`} {...register("name")} />
                        {errors.name && (
                            <p className='text-xs text-red-500'>{errors.name.message}</p>
                        ) }
                    </div>
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
                    <div>
                    <label className='text-gray-500 font-medium'>Phone Number</label>
                    <input type="number" className={`block p-2 border border-gray-700 outline-none w-4/5 my-2 ${errors.phoneNumber ? 'border-red-500' : "border-gray-700"}`} {...register("phoneNumber")}  />
                    {errors.phoneNumber && (
                            <p className='text-xs text-red-500'>{errors.phoneNumber.message}</p>
                        ) }
                    </div>
                    </div>
                    <button className='p-2 w-[90%] my-4 font-medium text-gray-600 shadow bg-sky-300 active:bg-sky-400'>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup


