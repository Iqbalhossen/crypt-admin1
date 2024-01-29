import React, { useState, useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Password = () => {
    const { authUser } = useContext(AuthContext);
    const [data, setData] = useState([])
    const [results, setResults] = useState({});

    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();

    useEffect(() => {
        if (authUser?._id) {
            fetch(`http://66.29.142.198:5000/api/admin/role/view/${authUser?._id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setData(data.data);
                })
        }

    }, [authUser])


    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        if (!(data?._id)) {
            toast.error(`something is wrong please try again`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            refSubmitDis.current.removeAttribute("disabled");
        } else {
            const config = {
                headers: {
                    'content-type': 'application/json',
                }
            };
            axios.put(`http://66.29.142.198:5000/api/admin/password/update/${data?._id}`, dataVulue, config)
                .then(response => {
                    if(response?.data.success === false){
                        toast.error(`${response?.data.message}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }else{
                        toast.success(`${response?.data.message}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    setResults(response.data);
                    event.target.reset();
                    }             
                    refSubmitDis.current.removeAttribute("disabled");
                }).catch((error) => {
                    refSubmitDis.current.removeAttribute("disabled");
                });
        }

    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...dataVulue };
        newData[field] = value;
        setDataVulue(newData);
    }


    return (
        <>
            <div className="bodywrapper__inner">

                <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                    <h6 className="page-title">Password Setting</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        <Link to="/admin/profile" className="btn btn-sm btn-outline-primary"><i className="las la-user"></i>Profile Setting</Link>
                    </div>
                </div>


                <div className="row mb-none-30">
                    <div className="col-lg-4 col-md-3 mb-30">

                        <div className="card b-radius--5 overflow-hidden">
                            <div className="card-body p-0">
                                <div className="d-flex p-3 bg--primary align-items-center">
                                    <div className="avatar avatar--lg">
                                        <img src={authUser?.picture ?
                                            `http://66.29.142.198:5000/${data?.picture}`
                                            :
                                            'https://gffexvip.biz/assets/admin/images/profile/6415c7db489ed1679149019.png'

                                        } alt="" />
                                    </div>
                                    <div className="ps-3">
                                        <h4 className="text--white">
                                            {data?.role === 'super_admin' ? 'Super Admin' : ''}
                                            {data?.role === 'admin' ? 'Admin' : ''}
                                            {data?.role === 'staff' ? 'Staff' : ''}
                                        </h4>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Name
                                        <span className="fw-bold">
                                            {data?.name}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Phone
                                        <span className="fw-bold">
                                            {data?.phone}
                                        </span>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Editor or Viewer
                                        <span className="fw-bold">
                                            {data?.EditororViewer === 'editor' ? 'Editor' : ''}
                                            {data?.EditororViewer === 'viewer' ? 'Viewer' : ''}
                                        </span>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Email
                                        <span className="fw-bold">{data?.email}</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-9 mb-30">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4 border-bottom pb-2">Change Password</h5>
                                <form onSubmit={handleSubmitData}>
                                    <div className="form-group">
                                        <label for="old_password" className="required">Password</label>
                                        <input onBlur={handleInputBlur} className="form-control" type="password" name="old_password" required id="old_password" />
                                    </div>

                                    <div className="form-group">
                                        <label for="password" className="required">New Password</label>
                                        <input onBlur={handleInputBlur} className="form-control" type="password" name="password" required id="password" />
                                    </div>

                                    <div className="form-group">
                                        <label for="password_confirmation" className="required">Confirm Password</label>
                                        <input onBlur={handleInputBlur} className="form-control" type="password" name="cpassword" required id="password_confirmation" />
                                    </div>
                                    <button ref={refSubmitDis} type="submit" className="btn btn-primary w-100 btn-lg h-45">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    );
};

export default Password;