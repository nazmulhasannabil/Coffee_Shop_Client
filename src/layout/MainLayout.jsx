import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Social from '../components/Social'

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Social />
            <Footer />
        </div>
    );
};

export default MainLayout;