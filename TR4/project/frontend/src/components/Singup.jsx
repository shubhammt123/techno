import React from 'react'

const Singup = () => {
  return (
    <div className='w-4/5 h-4/5 flex justify-center items-center bg-white shadow-2xl rounded'>
        <div className='w-1/2'>
            <img src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" className='w-full'/>
        </div>
        <div className='w-1/2 flex flex-col gap-8'>
        <h1 className='text-3xl text-blue-500 font-semibold text-center'>Welcome ! Sign-In</h1>
            <form>
                <div className='grid grid-cols-2 gap-3'>
                    <div>
                        <label className='text-blue-500 font-medium'>Name</label>
                        <input type="text" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' />
                    </div>
                    <div>
                        <label className='text-blue-500 font-medium'>Email</label>
                        <input type="email" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' />
                    </div>
                    <div>
                        <label className='text-blue-500 font-medium'>Password</label>
                        <input type="password" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' />
                    </div>
                    <div>
                        <label className='text-blue-500 font-medium'>Phone Number</label>
                        <input type="number" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' />
                    </div>
                </div>
                <button className='bg-blue-500 my-5 text-white font-medium p-2 w-[95%] shadow-xl rounded active:bg-blue-600'>Sign-Up</button>
            </form>
        </div>
    </div>
  )
}

export default Singup