import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { useContext } from 'react';

const SideBarSubMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
    const { authUser } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsOpen(true);
    };

    useEffect(() => {
        if (!isOpen) {
            setIsMenuOpen(false);
        }
    }, [isOpen]);

    const [data, setData] = useState([]);
    useEffect(() => {
        const Menudata = [
            { trade_log: 'Trade log', permission: authUser?.trade_log },
            { practice_trade_log: 'Practice Trade Log', permission: authUser?.practice_trade_log },
            { manage_users: 'Manage Users', permission: authUser?.manage_users },
            { payment_gateways: 'Payment Gateways', permission: authUser?.payment_gateways },
            { deposits: 'Deposits', permission: authUser?.deposits },
            { withdrawals: 'Withdrawals', permission: authUser?.withdrawals },
            { support_ticket: 'Support Ticket', permission: authUser?.support_ticket },
            { report: 'Report', permission: authUser?.report },
            { site_setting: 'Site Setting', permission: authUser?.site_setting },
            { notification_setting: 'Notification Setting', permission: authUser?.notification_setting },
            { manage_section: 'Manage Section', permission: authUser?.manage_section },
    
        ]
        setData(Menudata);
    }, [authUser])
    

    if (route.name === data[0]?.trade_log && authUser?.trade_log === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }
    if (route.name === data[1]?.practice_trade_log && authUser?.practice_trade_log === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => ( 
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }
    if (route.name === data[2]?.manage_users && authUser?.manage_users === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }
    if (route.name === data[3]?.payment_gateways && authUser?.payment_gateways === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }
    if (route.name === data[4]?.deposits && authUser?.deposits === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>


                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }
    if (route.name === data[5]?.withdrawals && authUser?.withdrawals === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (

                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }
    if (route.name === data[6]?.support_ticket && authUser?.support_ticket === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }

    if (route.name === data[7]?.report && authUser?.report === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>


                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }

    if (route.name === data[8]?.site_setting && authUser?.site_setting === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>


                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }

    if (route.name === data[9]?.notification_setting && authUser?.notification_setting === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>


                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }

    if (route.name === data[10]?.manage_section && authUser?.manage_section === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link ">
                                <i className={route.icon}></i>
                                <div className=' d-flex justify-content-between align-items-center'>
                                    <span className="menu-title">{route.name}
                                    </span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sidebar-submenu menuActive">
                        <ul>
                            {route.subRoutes.map((subRoute, i) => (
                                <li className="sidebar-menu-item menuActive">
                                    <li className="sidebar-menu-item menuActive">
                                        <NavLink to={subRoute.path} className="nav-link">
                                            <i className="menu-icon las la-dot-circle"></i>
                                            <span className="menu-title">{subRoute.name}</span>
                                        </NavLink>
                                    </li>


                                </li>
                            ))}
                        </ul>
                    </div>
                )}{" "}
            </>
        );
    }




};

export default SideBarSubMenu;