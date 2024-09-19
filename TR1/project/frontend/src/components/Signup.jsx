import React from 'react'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const { register , handleSubmit } = useForm();
    const onSubmit = (data)=>{
        console.log(data);
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
                        <input type="text" className='block p-2 border border-gray-700 outline-none w-4/5 my-2' {...register("name")} />
                    </div>
                    <div>
                    <label className='text-gray-500 font-medium'>Email</label>
                    <input type="email" className='block p-2 border border-gray-700 outline-none w-4/5 my-2' {...register("email")}  />
                    </div>
                    <div>
                    <label className='text-gray-500 font-medium'>Password</label>
                    <input type="password" className='block p-2 border border-gray-700 outline-none w-4/5 my-2' {...register("password")} />
                    </div>
                    <div>
                    <label className='text-gray-500 font-medium'>Phone Number</label>
                    <input type="number" className='block p-2 border border-gray-700 outline-none w-4/5 my-2' {...register("phoneNumber")}  />
                    </div>
                    </div>
                    <button className='p-2 w-[90%] my-4 font-medium text-gray-600 shadow bg-sky-300 active:bg-sky-400'>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup