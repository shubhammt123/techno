import React from 'react';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-100 p-2 py-3 m-5 rounded-lg shadow-lg'>
        <div className='text-2xl text-gray-800 font-semibold'>
            Logo
        </div>
        <div >
            <input type="text" placeholder='Search...' className='p-2 bg-white outline-none border rounded shadow' />
        </div>
        <div className='text-3xl font-semibold'>
        <CgProfile />
        </div>
    </div>
  )
}

export default Navbar