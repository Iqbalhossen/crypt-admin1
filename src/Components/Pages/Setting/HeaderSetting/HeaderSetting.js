import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const HeaderSetting = () => {
    const [results, setResults] = useState({});
    const refSubmitDis = useRef();

    const [userImage, setUserImage] = useState('');

    const handleImage = (e) => {
        setUserImage(e.target.files[0])
        
    }
 
    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { logo: userImage};
        if (userData.logo === '') {
            toast.error(`please choose your logo`, {
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
            axios.post(`http://66.29.142.198:5000/api/admin/site/setting/header/store`, userData, config)
            .then((data) => {
                event.target.reset();
                toast.success(`${data?.data.message}`, {
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
                setResults(data)
            }).catch((error) => {
            });

        }

    }

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/frontend/home/header/setting/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [results])
    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Header Setting</h6>
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
                                            <label>Logo</label>
                                            <div className="image-upload">
                                                <div className="thumb">
                                                    <div className="avatar-preview">
                                                        <div className="profilePicPreview" style={{ height: '120px', }}>
                                                        <img src={`http://66.29.142.198:5000/${data?.logo}`} alt='' width='100%'/>
                                                        </div>
                                                    </div>
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleImage} className="profilePicUpload" name="image_url" id="profilePicUpload0" accept=".jpg,.jpeg,.png" />
                                                        <label htmlFor="profilePicUpload0" className="bg--primary">Logo</label>
                                                        <small class="mt-2  ">Supported files: <b>jpeg, jpg, png.</b> Image will be resized into   (height: 55px*width: 160px)  </small>
                                                    </div>
                                                </div>
                                            </div>
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

export default HeaderSetting;