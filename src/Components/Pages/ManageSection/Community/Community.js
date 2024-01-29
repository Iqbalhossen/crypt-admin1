import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Community = () => {

    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});

    const [userImage, setUserImage] = useState('');
    const refSubmitDis = useRef();

    const handleImage = (e) => {
        setUserImage(e.target.files[0])

    }

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { ...dataVulue, community_img: userImage };
        if (userData.community_img === '') {
            toast.error(`please choose your image`, {
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
                    'content-type': 'multipart/form-data',
                }
            };
            axios.post(`http://66.29.142.198:5000/api/admin/home/community/store`, userData, config)
                .then(response => {
                    event.target.reset();
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
                    setResults(response)
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

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/frontend/home/community/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [results])

    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Community Section</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmitData}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <div className="image-upload">
                                                <div className="thumb">
                                                    <div className="avatar-preview">
                                                        <div className="profilePicPreview" style={{ height: '120px', width: '100%' }}>
                                                            <img src={`http://66.29.142.198:5000/${data?.image}`} style={{ width: '100%', height: '120px' }} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleImage} className="profilePicUpload" name="community_img" id="profilePicUpload0" accept=".jpg,.jpeg,.png" />
                                                        <label htmlFor="profilePicUpload0" className="bg--primary">Background Image</label>
                                                        <small class="mt-2  ">Supported files: <b>jpeg, jpg, png.</b>  </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-8 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">Title one</label>
                                                <input type="text" className="form-control" name="title" onBlur={handleInputBlur} defaultValue={data?.title} required="" id="heading" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="sub_heading" className="required">Description</label>
                                                <input type="text" className="form-control" name='dis' onBlur={handleInputBlur} defaultValue={data?.dis} required="" id="sub_heading" />
                                            </div>
                                        </div>




                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_one_url" className="required"> Button One Name</label>
                                            <input type="text" className="form-control" name="Btn_one_name" onBlur={handleInputBlur} defaultValue={data?.Btn_one_name} required="" id="button_one_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">Button One Icon</label>
                                            <input type="text" className="form-control" name="Btn_one_icon" onBlur={handleInputBlur} defaultValue={data?.Btn_one_icon} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">Button One Url</label>
                                            <input type="text" className="form-control" name="Btn_one_url" onBlur={handleInputBlur} defaultValue={data?.Btn_one_url} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">Button Two Name</label>
                                            <input type="text" className="form-control" name="Btn_two_name" onBlur={handleInputBlur} defaultValue={data?.Btn_two_name} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Button Two Icon</label>
                                            <input type="text" className="form-control" name="Btn_two_icon" onBlur={handleInputBlur} defaultValue={data?.Btn_two_icon} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">  Button Two url</label>
                                            <input type="text" className="form-control" name="Btn_two_url" onBlur={handleInputBlur} defaultValue={data?.Btn_two_url} required="" id="button_two_url" />
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <button ref={refSubmitDis} type="submit" className="btn btn-primary w-100 h-45">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Community;