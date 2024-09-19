import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'

const Router = createBrowserRouter([
    
    {
        path : "/signup",
        element : <Signup />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path :  "*",
        element : <Navigate to="/signup" />
    },
])

export default Router