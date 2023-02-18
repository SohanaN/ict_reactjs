import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About/About';
import Activities from '../../Pages/Activities/Activities';
import Communities from '../../Pages/Communities/Communities';
import Events from '../../Pages/Events/Events';
import Gallery from '../../Pages/Gallery/Gallery';
import Home from '../../Pages/Home/Home';
import Membership from '../../Pages/Membership/Membership';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/activities',
                element: <Activities/>
            },
            {
                path: '/communities',
                element: <Communities/>
            },
            {
                path: '/events',
                element: <Events/>
            },
            {
                path: '/gallery',
                element: <Gallery/>
            },
            {
                path: '/membership',
                element: <Membership/>
            }
            
        ]
    }
]);

export default router;