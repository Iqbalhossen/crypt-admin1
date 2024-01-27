import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {

    const { LoginWithEmail } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/admin/dashboard";

    const [user, setUserValue] = useState({});
    const refSubmitDis = useRef();
    const handleRegister = event => {
        refSubmitDis.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch('http://localhost:5000/api/admin/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        }) 
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                    refSubmitDis.current.removeAttribute("disabled");
                } else {
                    const user = data;                    
                    localStorage.setItem("gffex_admin_ID", JSON.stringify(user.data));
                    const expires = new Date(Date.now() + 30*6000*1000).toUTCString();
                    document.cookie = `gffex_admin_token=OiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmJ1c2VyX25hbWMzODM5NX0VzZXJfaWQiOiI2M2InVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM; expires=${expires};`;
                    event.target.reset();
                    toast.success(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                    if (user.data) {
                        LoginWithEmail(user);
                        navigate(userFrom, { replace: true });
                    }
                }
            })
            .catch(error => console.log(error));
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUserValue(newUser);
    }


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
            <div className="login-main" style={{ backgroundImage: "url('https://gffexvip.biz/assets/admin/images/login.jpg')" }}>
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8 col-sm-11">
                            <div className="login-area">
                                <div className="login-wrapper">
                                    <div className="login-wrapper__top">
                                        <h3 className="title text-white">Welcome to <strong>GFFEX VIP</strong></h3>
                                        <p className="text-white">Admin Login to GFFEX VIP
                                            Dashboard</p>
                                    </div>
                                    <div className="login-wrapper__body">
                                        <form onSubmit={handleRegister} className="cmn-form mt-30 verify-gcaptcha login-form">
                                            <div className="form-group">
                                                <label htmlFor="username" className="required">Email</label>
                                                <input type="email" className="form-control"  name="email" onBlur={handleInputBlur} required id="username" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password" className="required">Password</label>
                                                <input type="password" className="form-control" name="password" onBlur={handleInputBlur} required id="password" />
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between">
                                                <div className="form-check me-3">
                                                    <input className="form-check-input" name="remember" type="checkbox" id="remember" />
                                                    <label className="form-check-label" htmlFor="remember">Remember Me</label>
                                                </div>
                                                <Link to="/admin/password/reset" className="forget-text">Forgot Password?</Link>
                                            </div>
                                            <button ref={refSubmitDis} type="submit" className="login-btn cmn-btn w-100">LOGIN</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;