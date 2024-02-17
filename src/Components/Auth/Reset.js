import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Reset = () => {

    const [user, setUserValue] = useState({});
    const refSubmitDis = useRef();


    const handleSubmit = event => {
        refSubmitDis.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch('https://gffex.xyz/api/admin/passowrd/forget', {
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
                    toast.success(`${data.message}`, {
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
                    event.target.reset();
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
                                        <h3 className="title text-white">Recover Account</h3>
                                    </div>
                                    <div className="login-wrapper__body">
                                        <form className="login-form" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="email" className="required">Email</label>
                                                <input type="email" name="email" className="form-control"  required id="email" onBlur={handleInputBlur} />
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between">
                                                <Link to="/" className="forget-text">Login Here</Link>
                                            </div>
                                            <button ref={refSubmitDis} type="submit" className="login-btn cmn-btn w-100">Submit</button>
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

export default Reset;