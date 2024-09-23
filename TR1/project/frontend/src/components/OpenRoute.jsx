import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const OpenRoute = () => {
  return (
    <div className='w-full h-full m-0 p-0'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default OpenRoute