import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const SideBarMenu = ({ route }) => {
    const { authUser, authId } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [AdminData, setAdminData] = useState([]);
   
    useEffect(() => {
        if (authId?.data?._id) {
            fetch(`http://localhost:5000/api/admin/role/view/${authId?.data?._id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setAdminData(data.data);
                })
        }

    }, [authId])

    useEffect(() => {
        const Menudata = [
            { dashboard: 'Dashboard', permission: AdminData?.dashboard },
            { crypto_currency: 'Crypto Currency', permission: AdminData?.crypto_currency },
            { trade_setting: 'Trade Setting', permission: AdminData?.trade_setting },
            { manage_staff: 'Manage Staff', permission: AdminData?.manage_staff },
            { subscribers: 'Subscribers', permission: AdminData?.subscribers },
            { manage_template: 'Manage Template', permission: AdminData?.manage_template },
            { manage_page: 'Manage Page', permission: AdminData?.manage_page },

        ]
        setData(Menudata);
    }, [AdminData])

    if (route.name === data[0]?.dashboard && AdminData?.dashboard === true) {
        return (
            <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                <NavLink to={route.path} className="nav-link ">
                    <i className={route.icon}></i>
                    <span className="menu-title">{route.name}</span>
                </NavLink>
            </li>
        );

    }
    if (route.name === data[1]?.crypto_currency && AdminData?.crypto_currency === true) {
        return (
            <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                <NavLink to={route.path} className="nav-link ">
                    <i className={route.icon}></i>
                    <span className="menu-title">{route.name}</span>
                </NavLink>
            </li>
        );

    }
    if (route.name === data[2]?.trade_setting && AdminData?.trade_setting === true) {
        return (
            <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                <NavLink to={route.path} className="nav-link ">
                    <i className={route.icon}></i>
                    <span className="menu-title">{route.name}</span>
                </NavLink>
            </li>
        );

    }
    if (route.name === data[3]?.manage_staff && AdminData?.manage_staff === true) {
        return (
            <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                <NavLink to={route.path} className="nav-link ">
                    <i className={route.icon}></i>
                    <span className="menu-title">{route.name}</span>
                </NavLink>
            </li>
        );

    }
    if (route.name === data[4]?.subscribers && AdminData?.subscribers === true) {
        return (
            <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                <NavLink to={route.path} className="nav-link ">
                    <i className={route.icon}></i>
                    <span className="menu-title">{route.name}</span>
                </NavLink>
            </li>
        );

    }
    if (route.name === data[5]?.manage_template && AdminData?.manage_template === true) {
        return (
            <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                <NavLink to={route.path} className="nav-link ">
                    <i className={route.icon}></i>
                    <span className="menu-title">{route.name}</span>
                </NavLink>
            </li>
        );

    }
    if (route.name === data[6]?.manage_page && AdminData?.manage_page === true) {
        return (
            <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                <NavLink to={route.path} className="nav-link ">
                    <i className={route.icon}></i>
                    <span className="menu-title">{route.name}</span>
                </NavLink>
            </li>
        );

    }


};

export default SideBarMenu;