import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Signup from '../Signup'
import Parent from '../Parent'

const Router = createBrowserRouter([
    {
        element : <Parent />,
        children : [
            {
                path : "/",
                element : <Home />,
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/signup",
                element : <Signup />
            }
        ]
    }
])

export default Router