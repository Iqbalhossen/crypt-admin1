import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ChooseGFFEX = () => {

    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});

    const [userImage, setUserImage] = useState('');
    const refSubmitDis = useRef();

    const handleVideo = (e) => {
        setUserImage(e.target.files[0])

    }

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { ...dataVulue, video: userImage };
        if (userData.video === '') {
            toast.error(`please choose your video`, {
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
            axios.post(`http://localhost:5000/api/admin/home/choose/gffex/store`, userData, config)
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
        fetch(`http://localhost:5000/api/frontend/home/choose/gffex/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data.data))
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
                                            <label>Video</label>
                                            <div className="image-upload">
                                                <div className="thumb">
                                                    <div className="avatar-preview">
                                                        <div className="profilePicPreview" style={{ height: '120px', }}>
                                                            <video autoPlay style={{ height: 'auto', width: '100%' }}>
                                                                <source src={`http://localhost:5000/${data?.videos}`} type="video/mp4" />
                                                            </video>
                                                        </div>
                                                    </div>
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleVideo} className="profilePicUpload" name="video" id="profilePicUpload0" accept=".mp4, .MKV, .WebM" />
                                                        <label htmlFor="profilePicUpload0" className="bg--primary">Background Video</label>
                                                        <small className="mt-2  ">Supported files: <b>mp4, MKV, WebM</b>.
                                                            |
                                                        </small>
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
                                                <label htmlFor="sub_heading" className="required">Icon One</label>
                                                <input type="text" className="form-control" name='icon_one' onBlur={handleInputBlur} defaultValue={data?.icon_one} required="" id="sub_heading" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="button_one_url" className="required"> Icon One description</label>
                                                <input type="text" className="form-control" name="icon_one_dis" onBlur={handleInputBlur} defaultValue={data?.icon_one_dis} required="" id="button_one_url" />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Icon Two</label>
                                            <input type="text" className="form-control" name="icon_two" onBlur={handleInputBlur} defaultValue={data?.icon_two} required="" id="button_two_url" />
                                        </div>
                                    </div>                           
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Icon Two description</label>
                                            <input type="text" className="form-control" name="icon_two_dis" onBlur={handleInputBlur} defaultValue={data?.icon_two_dis} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Icon three</label>
                                            <input type="text" className="form-control" name="icon_three" onBlur={handleInputBlur} defaultValue={data?.icon_three} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">Icon three description</label>
                                            <input type="text" className="form-control" name="icon_three_dis" onBlur={handleInputBlur} defaultValue={data?.icon_three_dis} required="" id="button_two_url" />
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

export default ChooseGFFEX;