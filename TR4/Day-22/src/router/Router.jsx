import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Dashboard';
import Login from '../Login';
import Signup from '../Signup';
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import Services from '../Services';
import Parent from '../Parent';

const Router = createBrowserRouter([
    {
        element : <Parent />,
        children : [
            {
                path : "/",
                element : <Dashboard />
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/signup",
                element : <Signup />
            },
            {
                path : "/about-us",
                element :  <AboutUs />
            },
            {
                path : "/contact-us",
                element : <ContactUs />
            },
            {
                path : "/services",
                element : <Services />
            }
        ]
    }
]);

export default Router