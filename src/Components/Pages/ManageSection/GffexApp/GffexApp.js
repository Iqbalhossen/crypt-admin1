import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const GffexApp = () => {
    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();

    const [userImage, setUserImage] = useState('');

    const handleImage = (e) => {
        setUserImage(e.target.files[0])
        
    }

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = {  ...dataVulue,  app_img: userImage};
        if (userData.app_img === '') {
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
            axios.post(`http://66.29.142.198:5000/api/admin/home/gffex/app/store`, userData, config)
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
        fetch(`http://66.29.142.198:5000/api/frontend/home/gffex/app/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data?.data))
    }, [results])

    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Choose GFFEX Section</h6>
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
                                                        <div className="profilePicPreview" style={{ height: '120px', }}>
                                                        <img src={`http://66.29.142.198:5000/${data?.image}`} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleImage} className="profilePicUpload" name="app_img" id="profilePicUpload0" accept=".jpg,.jpeg,.png" />
                                                        <label htmlFor="profilePicUpload0" className="bg--primary">Image</label>
                                                        <small class="mt-2  ">Supported files: <b>jpeg, jpg, png.</b> Image will be resized into   (width:972px * height:602px)  </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-8 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">Title</label>
                                                <input type="text" className="form-control" name="title" onBlur={handleInputBlur} defaultValue={data?.title} required="" id="heading" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="sub_heading" className="required"> Title Description</label>
                                                <input type="text" className="form-control" name='dis' onBlur={handleInputBlur} defaultValue={data?.dis} required="" id="sub_heading" />
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="row">
                                    
                                <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="button_one_url" className="required"> Sub Title One</label>
                                                <input type="text" className="form-control" name="sub_title_one" onBlur={handleInputBlur} defaultValue={data?.sub_title_one} required="" id="button_one_url" />
                                            </div>
                                        </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">Sub Title One description</label>
                                            <input type="text" className="form-control" name="sub_title_one_dis" onBlur={handleInputBlur} defaultValue={data?.sub_title_one_dis} required="" id="button_two_url" />
                                        </div>
                                    </div>                           
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Sub Title Two</label>
                                            <input type="text" className="form-control" name="sub_title_two" onBlur={handleInputBlur} defaultValue={data?.sub_title_two} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">  Sub Title Two description</label>
                                            <input type="text" className="form-control" name="sub_title_two_dis" onBlur={handleInputBlur} defaultValue={data?.sub_title_two_dis} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                 
                                  
                                </div>

                                <div className="form-group">
                                    <button ref={refSubmitDis} type="submit" className="btn btn-primary w-100 h-45">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GffexApp;