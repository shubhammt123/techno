import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'

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
        path : "/",
        element : <Home />
    },
    {
        path :  "*",
        element : <Navigate to="/signup" />
    },
])

export default Router