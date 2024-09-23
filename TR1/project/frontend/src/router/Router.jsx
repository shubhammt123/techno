import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Cart from '../components/Cart'
import Unprotected from '../components/Unprotected'
import AdminPrivate from '../components/AdminPrivate'
import Dashbaord from '../components/Dashbaord'
import AdminProduct from '../components/AdminProduct'
import AdminUser from '../components/AdminUser'
import AdminOrder from '../components/AdminOrder'
import UserPrivate from '../components/UserPrivate'
import MyOrder from '../components/MyOrder'
import Order from '../components/Order'
import UserAdminPrivate from '../components/UserAdminPrivate'
import Private from '../components/Private'
import OpenRoute from '../components/OpenRoute'

const Router = createBrowserRouter([
    {
        element : <OpenRoute />,
        children : [
            {
            path : "/",
            element : <Home />
        },
        {
            path : "/cart",
            element : <Cart />
        },
    ]
    },
    {
        element : <Unprotected />,
        children : [
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/signup",
                element : <Signup />
            }
        ]
    },
    {
        element : <Private allowedRole = {["Admin"]} />,
        children : [
            {
                path : "/dashboard",
                element : <Dashbaord />
            },
            {
                path : "/adminProduct",
                element : <AdminProduct />
            },
            {
                path : "/adminUser",
                element : <AdminUser />
            },
            {
                path : "/adminOrder",
                element : <AdminOrder />
            },
        ]
    },
    {
        element : <Private allowedRole={["User"]} />,
        children : [
            {
                path : "/myorder",
                element : <MyOrder />
            },
            {
                path : "/order",
                element : <Order />
            }
        ]
    },
    {
        element : <Private allowedRole={["Admin" , "User"]}  />,
        children : [
            {
                path  : "/profile",
                element : <Profile />
            }
        ]
    }
])


// /login , /signup --- can access without login , but if logged in then not accessible
// /profile  --- can accessible by user and admin
// /dashboard , /adminProduct , /adminUser , /adminOrder --- admin
// /myOrders , /order  --- user
// / , /cart   ---- anyone

export default Router