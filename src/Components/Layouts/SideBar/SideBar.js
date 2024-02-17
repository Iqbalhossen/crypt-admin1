import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SideBarSubMenu from './SideBarSubMenu';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SideBarMenu from './SideBarMenu';
const routes = [
    {
        path: "/admin/dashboard",
        name: "Dashboard",
        icon: "menu-icon las la-home",
    },
    {
        path: "/admin/crypto/currency/list",
        name: "Crypto Currency",
        icon: "menu-icon las la-coins",
    },
    {
        path: "/admin/trade/setting",
        name: "Trade Setting",
        icon: "menu-icon las la-cog",
    },
    {
        path: "/admin/staff",
        name: "Manage Staff",
        icon: "menu-icon la-user-astronaut",
    },
    {
        path: "",
        name: "Trade log",
        icon: "menu-icon las la-dice",
        subRoutes: [
            {
                path: "/admin/trade/log",
                name: "All",
            },
            {
                path: "/admin/trade/log/wining",
                name: "Wining",
            },
            {
                path: "/admin/trade/log/losing",
                name: "Losing",
            },
            {
                path: "/admin/trade/log/draw",
                name: "Draw",
            },
        ],
    },
    {
        path: "",
        name: "Practice Trade Log",
        icon: "menu-icon las la-folder-plus",
        subRoutes: [
            {
                path: "/admin/practice/trade/log",
                name: "All",
            },
            {
                path: "/admin/practice/trade/log/wining",
                name: "Wining",
            },
            {
                path: "/admin/practice/trade/log/losing",
                name: "Losing",
            },
            {
                path: "/admin/practice/trade/log/draw",
                name: "Draw",
            },
        ],
    },
    {
        auth: "manage_users",
        path: "/settings",
        name: "Manage Users",
        icon: "menu-icon las la-users",
        subRoutes: [
            {
                path: "/admin/users/active",
                name: "Active Users",
            },
            {
                path: "/admin/users/banned",
                name: "Banned Users",
            },
            {
                path: "/admin/users/email-unverified",
                name: "Email Unverified",
            },
            {
                path: "/admin/users/mobile-unverified",
                name: "Mobile Unverified",
            },
            {
                path: "/admin/users/kyc-unverified",
                name: "KYC Unverified",
            },
            {
                path: "/admin/users/kyc-pending",
                name: "KYC Pending",
            },
            {
                path: "/admin/users/with-balance",
                name: "With Balance",
            },
            {
                path: "/admin/users/all",
                name: "All Users",
            },
        ],
    },
    {
        path: "",
        name: "Payment Gateways",
        icon: "menu-icon las la-credit-card",
        subRoutes: [
            {
                path: "/admin/gateway/automatic",
                name: "Automatic Gateways",
            },
            {
                path: "/admin/gateway/manual",
                name: "Manual Gateways",
            },
        ],
    },
    {
        path: "",
        name: "Deposits",
        icon: "menu-icon las la-file-invoice-dollar",
        subRoutes: [
            {
                path: "/admin/deposit/pending",
                name: "Pending Deposits",
            },
            {
                path: "/admin/deposit/approved",
                name: "Approved Deposits",
            },
            {
                path: "/admin/deposit/successful",
                name: "Successful Deposits",
            },
            {
                path: "/admin/deposit/rejected",
                name: "Rejected Deposits",
            },
            {
                path: "/admin/deposit",
                name: "All Deposits",
            },
        ],
    },
    {
        Auth: "withdrawals",
        name: "Withdrawals",
        icon: "menu-icon la la-bank",
        subRoutes: [
            {
                path: "/admin/withdraw/method",
                name: "Withdrawal Methods",
            },
            {
                path: "/admin/withdraw/pending",
                name: "Pending Withdrawal",
            },
            {
                path: "/admin/withdraw/approved",
                name: "Approved Withdrawal",
            },
            {
                path: "/admin/withdraw/rejected",
                name: "Rejected Withdrawal",
            },
            {
                path: "/admin/withdraw/log",
                name: "All Withdrawal",
            },
        ],
    },
    {
        path: "/settings",
        name: "Support Ticket",
        icon: "menu-icon la la-ticket",
        subRoutes: [
            {
                path: "/admin/ticket/pending",
                name: "Pending Ticket",
            },
            {
                path: "/admin/ticket/closed",
                name: "Closed Ticket",
            },
            {
                path: "/admin/ticket/answered",
                name: "Answered Ticket",
            },
            {
                path: "/admin/ticket",
                name: "All Ticket",
            },

        ],
    },
    {
        path: "/settings",
        name: "Report",
        icon: "menu-icon la la-list",
        subRoutes: [
            {
                path: "/admin/users/transaction/logs",
                name: "Transaction Log",
            },
            // {
            //     path: "/admin/users/active",
            //     name: "Notification History",
            // },         

        ],
    },
    {
        path: "/admin/subscriber",
        name: "Subscribers",
        icon: "menu-icon la-thumbs-up",
    },
    {
        title: 'Settings',
    },
    {
        Auth: true,
        name: "Site Setting",
        icon: "menu-icon la la-cog",
        subRoutes: [
            {
                path: "/admin/header/setting",
                name: "Header Setting",
            },
            {
                path: "/admin/footer/setting",
                name: "Footer Setting",
            },
            {
                path: "/admin/newsletter/setting",
                name: "Newsletter Setting",
            },

        ],
    },
    // {
    //     path: "",
    //     name: "KYC Setting",
    //     icon: "menu-icon la la-user-check",
    // },
    // {
    //     path: "",
    //     name: "Notification Setting",
    //     icon: "menu-icon la la-list",
    //     subRoutes: [
    //         {
    //             path: "/admin/users/active",
    //             name: "Global Template",
    //         },
    //         {
    //             path: "/admin/users/active",
    //             name: "Email Setting",
    //         },

    //     ],
    // },
    {
        title: 'FRONTEND MANAGER',
    },
    {
        path: "",
        name: "Manage Template",
        icon: "menu-icon la la-html5",
    },
    {
        path: "/admin/frontend/manage-pages",
        name: "Manage Page",
        icon: "menu-icon la la-list",
    },
    {
        path: "",
        name: "Manage Section",
        icon: "menu-icon la la-puzzle-piece",
        subRoutes: [
            {
                path: "/admin/frontend/frontend-sections/top/bannar/section",
                name: "Top Bannar Section",
            },
            {
                path: "/admin/frontend/frontend-sections/event",
                name: "Event Section",
            },
            {
                path: "/admin/frontend/frontend-sections/slider",
                name: "Slider Section",
            },
            {
                path: "/admin/frontend/frontend-sections/notices",
                name: "Notices Section",
            },
            {
                path: "/admin/frontend/frontend-sections/cryptocurrencies",
                name: "Cryptocurrencies Section",
            },
            {
                path: "/admin/frontend/frontend-sections/new/listing",
                name: "New Listing  Section",
            },
            {
                path: "/admin/frontend/frontend-sections/choose/gffex",
                name: "Choose GFFEX Section",
            },
            {
                path: "/admin/frontend/frontend-sections/our/products",
                name: "Our Products Section",
            },
            {
                path: "/admin/frontend/frontend-sections/community",
                name: "Community Section",
            },
            {
                path: "/admin/frontend/frontend-sections/gffex/app",
                name: "App Section",
            },
            {
                path: "/admin/frontend/frontend-sections/start/trade/btn",
                name: "Start Trade Button",
            },
            {
                path: "/admin/frontend/frontend-sections/signup/to/trade/btn",
                name: "SignUp To Trade",
            },
            {
                path: "/admin/frontend/frontend-sections/community/btn",
                name: "Community Button",
            },
            {
                path: "/admin/frontend/frontend-sections/gffex/app/btn",
                name: "Gffex App Button",
            }
        ],
    },
    {
        path: "",
        name: "Live Chats",
        icon: "menu-icon la la-puzzle-piece",
        subRoutes: [
            {
                path: "/admin/frontend/frontend-sections/top/bannar/section",
                name: "Pending Chats",
            },
            {
                path: "/admin/chats/live",
                name: "Live Chats",
            },

        ],
    },


];

const SideBar = ({ menuSHow, setMenuShow }) => {
    const { authUser, authId } = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    const menuRef = useRef();

    const [mobileMenu, setMobileMenu] = useState();

    useEffect(() => {
        if (menuSHow === true) {
            menuRef.current.style.left = "0px";
        }
        if (mobileMenu === true) {
            menuRef.current.style.left = "-285px";
            setMenuShow(false);
            setMobileMenu(false)
        }

    }, [menuSHow, mobileMenu]);

    return (
        <>
            <div className=" default-version">
                {/* <div className="page-wrapper default-version"> */}
                <div className="sidebar bg--dark" ref={menuRef}>
                    <button className="res-sidebar-close-btn" onClick={() => setMobileMenu(true)}><i className="las la-times"></i></button>
                    <div className="sidebar__inner">
                        <div className="sidebar__logo">
                            <Link href="/admin/dashboard" className="sidebar__main-logo"><img src="https://gffexvip.biz/assets/images/logoIcon/logo.png" alt="" /></Link>
                        </div>

                        <div className="sidebar__menu-wrapper" id="sidebar__menuWrapper">
                            <ul className="sidebar__menu">

                                {routes.map((route, index) => {
                                    if (route.subRoutes) {
                                        return (
                                            <SideBarSubMenu
                                                setIsOpen={setIsOpen}
                                                route={route}
                                                showAnimation={showAnimation}
                                                isOpen={isOpen}
                                                key={index}
                                                setMobileMenu={setMobileMenu}
                                            />
                                        );
                                    } else if (route.title) {
                                        return (
                                            <li className="sidebar__menu-header" key={index}>{route.title}</li>
                                        );

                                    } else {
                                        return (
                                            <SideBarMenu route={route} index={index} key={index} setMobileMenu={setMobileMenu}></SideBarMenu>
                                        )
                                    }
                                })}

                            </ul>

                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default SideBar;