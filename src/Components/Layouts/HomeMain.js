import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import { ToastContainer } from 'react-toastify';
const HomeMain = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div class="page-wrapper default-version">
                <SideBar />
                <Header />

                <div class="body-wrapper">
                    <div class="bodywrapper__inner">

                        {/* @include('admin.partials.breadcrumb') */}

                        <Outlet></Outlet>


                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeMain;