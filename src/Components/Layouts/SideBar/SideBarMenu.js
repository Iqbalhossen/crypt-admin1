import React, {useEffect, useState} from 'react';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const SideBarMenu = ({route}) => {
    const { authUser } = useContext(AuthContext);
    // console.log(authUser)
    const [data, setData] = useState([]);
    useEffect(() => {
        const Menudata = [
            {dashboard : 'Dashboard' , permission: authUser?.dashboard},
            {crypto_currency : 'Crypto Currency' , permission: authUser?.crypto_currency},
            {trade_setting : 'Trade Setting' , permission: authUser?.trade_setting},
            {manage_staff : 'Manage Staff' , permission: authUser?.manage_staff},
            {subscribers : 'Subscribers' , permission: authUser?.subscribers},
            {manage_template : 'Manage Template' , permission: authUser?.manage_template},
            {manage_page : 'Manage Page' , permission: authUser?.manage_page},
            
        ]
        setData(Menudata);
    }, [authUser])

    if (route.name === data[0]?.dashboard && authUser?.dashboard === true) {
        return (
            <li  className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
            <NavLink to={route.path} className="nav-link ">
                <i className={route.icon}></i>
                <span className="menu-title">{route.name}</span>
            </NavLink>
        </li>
        );

    }
    if (route.name === data[1]?.crypto_currency && authUser?.crypto_currency === true) {
        return (
            <li  className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
            <NavLink to={route.path} className="nav-link ">
                <i className={route.icon}></i>
                <span className="menu-title">{route.name}</span>
            </NavLink>
        </li>
        );

    }
    if (route.name === data[2]?.trade_setting && authUser?.trade_setting === true) {
        return (
            <li  className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
            <NavLink to={route.path} className="nav-link ">
                <i className={route.icon}></i>
                <span className="menu-title">{route.name}</span>
            </NavLink>
        </li>
        );

    }
    if (route.name === data[3]?.manage_staff && authUser?.manage_staff === true) {
        return (
            <li  className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
            <NavLink to={route.path} className="nav-link ">
                <i className={route.icon}></i>
                <span className="menu-title">{route.name}</span>
            </NavLink>
        </li>
        );

    }
    if (route.name === data[4]?.subscribers && authUser?.subscribers === true) {
        return (
            <li  className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
            <NavLink to={route.path} className="nav-link ">
                <i className={route.icon}></i>
                <span className="menu-title">{route.name}</span>
            </NavLink>
        </li>
        );

    }
    if (route.name === data[5]?.manage_template && authUser?.manage_template === true) {
        return (
            <li  className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
            <NavLink to={route.path} className="nav-link ">
                <i className={route.icon}></i>
                <span className="menu-title">{route.name}</span>
            </NavLink>
        </li>
        );

    }
    if (route.name === data[6]?.manage_page && authUser?.manage_page === true) {
        return (
            <li  className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
            <NavLink to={route.path} className="nav-link ">
                <i className={route.icon}></i>
                <span className="menu-title">{route.name}</span>
            </NavLink>
        </li>
        );

    }
   
    
};

export default SideBarMenu;