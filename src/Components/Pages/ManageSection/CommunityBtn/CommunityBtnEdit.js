import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const CommunityBtnEdit = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/home/community/button/edit/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [results])

    const [userImage, setUserImage] = useState('');

    const handleImage = (e) => {
        setUserImage(e.target.files[0])
        
    }

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = {  ...dataVulue,  community_btn_img: userImage};
        if (userData.community_btn_img === '') {
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
            axios.put(`http://localhost:5000/api/admin/home/community/button/update/${id}`, userData, config)
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
                <h6 className="page-title">Community Button Update</h6>
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
                                                            <img src={`http://localhost:5000/${data?.btn_image}`} style={{ width: '100%', height: '120px' }} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleImage} className="profilePicUpload" name="ourproducts_img" id="profilePicUpload0" accept=".jpg,.jpeg,.png" />
                                                        <label htmlFor="profilePicUpload0" className="bg--primary">Choose Image</label>
                                                        <small class="mt-2  ">Supported files: <b>jpeg, jpg, png.</b> Image will be resized into   (width:40px * height:40px)  </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                      
                                    </div>
                                    <div className=" col-md-8 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">Url</label>
                                                <input type="text" className="form-control" name="btn_url" defaultValue={data?.btn_url} onBlur={handleInputBlur} placeholder='url' id="heading" />
                                            </div>
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
export default CommunityBtnEdit;