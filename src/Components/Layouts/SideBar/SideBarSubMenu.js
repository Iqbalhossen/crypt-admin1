import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { useContext } from 'react';

const SideBarSubMenu = ({ route, showAnimation, isOpen, setIsOpen, setMobileMenu }) => {
    const { authUser, authId } = useContext(AuthContext);
    const [AdminData, setAdminData] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (authId?.data?._id) {
            fetch(`https://gffex.xyz/api/admin/role/view/${authId?.data?._id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setAdminData(data.data);
                })
        }

    }, [authId])

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

    
    useEffect(() => {
        const Menudata = [
            { trade_log: 'Trade log', permission: AdminData?.trade_log },
            { practice_trade_log: 'Practice Trade Log', permission: AdminData?.practice_trade_log },
            { manage_users: 'Manage Users', permission: AdminData?.manage_users },
            { payment_gateways: 'Payment Gateways', permission: AdminData?.payment_gateways },
            { deposits: 'Deposits', permission: AdminData?.deposits },
            { withdrawals: 'Withdrawals', permission: AdminData?.withdrawals },
            { support_ticket: 'Support Ticket', permission: AdminData?.support_ticket },
            { report: 'Report', permission: AdminData?.report },
            { site_setting: 'Site Setting', permission: AdminData?.site_setting },
            { notification_setting: 'Notification Setting', permission: AdminData?.notification_setting },
            { manage_section: 'Manage Section', permission: AdminData?.manage_section },
    
        ]
        setData(Menudata);
    }, [AdminData])
    

    if (route.name === data[0]?.trade_log && AdminData?.trade_log === true) {
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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
    if (route.name === data[1]?.practice_trade_log && AdminData?.practice_trade_log === true) {
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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
    if (route.name === data[2]?.manage_users && AdminData?.manage_users === true) {
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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
    if (route.name === data[3]?.payment_gateways && AdminData?.payment_gateways === true) {
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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
    if (route.name === data[4]?.deposits && AdminData?.deposits === true) {
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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
    if (route.name === data[5]?.withdrawals && AdminData?.withdrawals === true) {
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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
    if (route.name === data[6]?.support_ticket && AdminData?.support_ticket === true) {
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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

    if (route.name === data[7]?.report && AdminData?.report === true) {
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

    if (route.name === data[8]?.site_setting && AdminData?.site_setting === true) {
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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

    if (route.name === data[9]?.notification_setting && AdminData?.notification_setting === true) {
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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

    if (route.name === data[10]?.manage_section && AdminData?.manage_section === true) {
        return (
            <>
                <div className="menu" onClick={toggleMenu}>
                    <div className="menu_item">
                        <li className="sidebar-menu-item {{menuActive('admin.dashboard')}}">
                            <Link className="nav-link " >
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
                                        <NavLink to={subRoute.path} className="nav-link" onClick={()=>setMobileMenu(true)}>
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