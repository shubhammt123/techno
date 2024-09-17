import React from 'react';
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 bg-slate-200'>
        <div className='text-2xl font-semibold'>
            Logo
        </div>
        <div>
            <input type="text" placeholder='Search...' className='p-2 rounded shadow outline-none'/>
        </div>
        <div className='text-3xl'>
            <CgProfile />
        </div>
    </div>
  )
}

export default Navbar