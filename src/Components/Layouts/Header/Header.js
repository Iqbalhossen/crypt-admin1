import React, {useContext, useEffect, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const Header = () => {
    const {LoginWithEmail,  authUser, authId } = useContext(AuthContext);
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const location = useLocation();
    const from = "/";
    const navigate = useNavigate();
    const [remove, setremove] = useState(false);
   
  
    const SignOut = () => {
      document.cookie = `gffex_admin_token=; expires=${new Date(0).toUTCString()};`;
      localStorage.removeItem("gffex_admin_ID");
      const data = null;
      LoginWithEmail(data);
      if (authUser === null) {
        navigate(from, { replace: true });
      }
      setremove(true)
    }
    const logout = localStorage.getItem("gffex_admin_ID");;
    useEffect(() => {
        if (!logout && remove === true) {
          navigate(from, { replace: true });
        }
      }, [remove])

      const [data, setData] = useState([])

      useEffect(() => {
        if(authUser?._id){
            fetch(`http://66.29.142.198:5000/api/admin/role/view/${authUser?._id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setData(data.data);
                })
        }
      
    }, [authUser])
    
    return (
        <>
            <nav className="navbar-wrapper bg--dark">
                <div className="navbar__left">
                    <button type="button" className="res-sidebar-open-btn me-3"><i className="las la-bars"></i></button>
                    <form className="navbar-search">
                        <input type="search" name="#0" className="navbar-search-field" id="searchInput" autoComplete="off"
                            placeholder="Search here..." />
                        <i className="las la-search"></i>
                        <ul className="search-list"></ul>
                    </form>
                </div>
                <div className="navbar__right">
                    <ul className="navbar__action-list">

                        <li className="dropdown">
                            <button type="button" className="primary--layer" data-bs-toggle="dropdown" data-display="static"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="las la-bell text--primary @if($adminNotificationCount > 0) icon-left-right @endif"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu--md p-0 border-0 box--shadow1 dropdown-menu-right">
                                <div className="dropdown-menu__header">
                                    <span className="caption">Notification</span>
                                    {/* @if($adminNotificationCount > 0)
                            <p>@lang('You have') {{ $adminNotificationCount }} @lang('unread notification')</p>
                        @else
                            <p>@lang('No unread notification found')</p>
                        @endif */}
                                </div>
                                <div className="dropdown-menu__body">
                                    <a href="{{ route('admin.notification.read',$notification->id) }}"
                                        className="dropdown-menu__item">
                                        <div className="navbar-notifi">
                                            <div className="navbar-notifi__right">
                                                <h6 className="notifi__title">notification</h6>
                                                <span className="time"><i className="far fa-clock"></i>
                                                    notification time</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-menu__footer">
                                    <a href="{{ route('admin.notifications') }}"
                                        className="view-all-message">View all notification</a>
                                </div>
                            </div>
                        </li>
                        {/*  */}

                        <li className="dropdown">
                            <button onClick={ToggleSidebar} className="" data-bs-toggle="dropdown" data-display="static" aria-haspopup="true"
                                aria-expanded="false">
                                <span className="navbar-user">
                                    <span className="navbar-user__thumb"><img
                                        src={data?.picture ?
                                            `http://66.29.142.198:5000/${data?.picture}`
                                            :
                                            'https://gffexvip.biz/assets/admin/images/profile/6415c7db489ed1679149019.png'
                                            
                                        }
                                        alt="" /></span>
                                    <span className="navbar-user__info">
                                        <span
                                            className="navbar-user__name">{data?.name}</span>
                                    </span>
                                    <span className="icon"><i className="las la-chevron-circle-down"></i></span>
                                </span>
                            </button>
                            <div className={`dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right ${isOpen === true ? 'admin-profile-dropdown-menu' : ''} `}>
                                <Link to="/admin/profile" onClick={ToggleSidebar}
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <i className="dropdown-menu__icon las la-user-circle"></i>
                                    <span className="dropdown-menu__caption">Profile</span>
                                </Link>

                                <Link to="/admin/password" onClick={ToggleSidebar}
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <i className="dropdown-menu__icon las la-key"></i>
                                    <span className="dropdown-menu__caption">Password</span>
                                </Link>

                                <button  onClick={SignOut}
                                    className="dropdown-menu__item d-flex align-items-center px-3 py-2">
                                    <i className="dropdown-menu__icon las la-sign-out-alt text-dark"></i>
                                    <span className="dropdown-menu__caption">Logout</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;