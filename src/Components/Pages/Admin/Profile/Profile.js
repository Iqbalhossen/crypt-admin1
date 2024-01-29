import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import { useState } from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { authUser } = useContext(AuthContext);
    const [data, setData] = useState([])

    const [results, setResults] = useState({});
  
    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();

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
      
    }, [authUser, results])


    const [userImage, setUserImage] = useState('');

    const handleImage = (e) => {
        setUserImage(e.target.files[0])
    }

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
        } else if(userImage !== '') {
            const userData = { ...dataVulue, image: userImage};
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            };
            axios.put(`http://66.29.142.198:5000/api/admin/profile/update/${data?._id}`, userData, config)
                .then(response => {
                    event.target.reset();
                    setResults(response.data)
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
                    refSubmitDis.current.removeAttribute("disabled");
                }).catch((error) => {
                    refSubmitDis.current.removeAttribute("disabled");
                });

        }else{
            const userData = { ...dataVulue, };
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            };
            axios.put(`http://66.29.142.198:5000/api/admin/profile/update/${data?._id}`, userData, config)
                .then(response => {
                    event.target.reset();
                    setResults(response.data)
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

            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Profile</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <Link to="/admin/password" className="btn btn-sm btn-outline-primary"><i className="las la-key"></i>Password Setting</Link>
                </div>
            </div>


            <div className="row mb-none-30">
                <div className="col-xl-4 col-lg-4 mb-30">

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

                <div className="col-xl-8 col-lg-8 mb-30">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4 border-bottom pb-2">Profile Information</h5>
                            <form onSubmit={handleSubmitData}>
                                <div className="row">

                                    <div className="col-xl-6 col-lg-12 col-md-6">

                                        <div className="form-group">
                                            <div className="image-upload">
                                                <div className="thumb">
                                                    <div className="avatar-preview">
                                                        <div className="profilePicPreview" style={{ backgroundImage:
                                                            data?.picture ?
                                                                `url(http://66.29.142.198:5000/${data?.picture})`
                                                                :
                                                                "url('https://gffexvip.biz/assets/admin/images/profile/6415c7db489ed1679149019.png')"  
                                                              }}>
                                                            <button type="button" className="remove-image"><i className="fa fa-times"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleImage} className="profilePicUpload" name="image" id="profilePicUpload1" accept=".png, .jpg, .jpeg" />
                                                        <label for="profilePicUpload1" className="bg-success">Upload Image</label>
                                                        <small className="mt-2  ">Supported files: <b>jpeg, jpg, png.</b> Image will be resized into 400x400px </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-6">
                                        <div className="form-group ">
                                            <label htmlFor="name" className="required">Name</label>
                                            <input onBlur={handleInputBlur} className="form-control" type="text" name="name" defaultValue={data?.name} required="" id="name" />
                                        </div>
                                        <div className="form-group ">
                                            <label htmlFor="phone" className="required">Phone</label>
                                            <input onBlur={handleInputBlur} className="form-control" type="tel" name="phone" defaultValue={data?.phone} required="" id="phone" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="required">Email</label>
                                            <input onBlur={handleInputBlur} className="form-control" type="email" name="email" defaultValue={data?.email} required="" id="email" />
                                        </div>
                                    </div>
                                </div>
                                <button ref={refSubmitDis} type="submit" className="btn btn-primary h-45 w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Profile;