import React from 'react';
import Homepage from '../pages/homepage/Homepage';
import { Outlet } from 'react-router';
import Navbar from '../Components/sheared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;