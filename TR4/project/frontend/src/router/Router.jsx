import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Singup from '../components/Singup'
import Login from '../components/Login'

const Router = createBrowserRouter([
    {
        path : "/signup",
        element : <Singup />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "*",
        element : <Navigate to="/signup" />
    }
])

export default Router