import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const OpenROutes = () => {
  return (
    <div className='w-full h-full'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default OpenROutes