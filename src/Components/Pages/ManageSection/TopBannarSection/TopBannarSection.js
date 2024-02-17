import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TopBannarSection = () => {

    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})

    const [userImage, setUserImage] = useState('');
    const refSubmitDis = useRef();
    const handleImage = (e) => {
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
            axios.post(`https://gffex.xyz/api/admin/home/video/store`, userData, config)
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
        setErrorMessage({})
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...dataVulue };
        newData[field] = value;
        setDataVulue(newData);
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/frontend/home/videos/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [results])

    return (
        <>

            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Top Bannar Section</h6>
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
                                                                <source src={`https://gffex.xyz/${data?.data?.video_url}`} type="video/mp4" />
                                                            </video>
                                                        </div>
                                                    </div>
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleImage} className="profilePicUpload" name="video" id="profilePicUpload0" accept=".mp4, .MKV, .WebM" />
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
                                                <input type="text" className="form-control" name="title_one" onBlur={handleInputBlur} defaultValue={data?.data?.title_one} required="" id="heading" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="sub_heading" className="required">Title Two</label>
                                                <input type="text" className="form-control" name='title_two' onBlur={handleInputBlur} defaultValue={data?.data?.title_two} required="" id="sub_heading" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="button_one_url" className="required">Description One</label>
                                                <input type="text" className="form-control" name="dis_one" onBlur={handleInputBlur} defaultValue={data?.data?.dis_one} required="" id="button_one_url" />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Description Two</label>
                                            <input type="text" className="form-control" name="dis_two" onBlur={handleInputBlur} defaultValue={data?.data?.dis_two} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Button Name</label>
                                            <input type="text" className="form-control" name="btn_name" onBlur={handleInputBlur} defaultValue={data?.data?.btn_name} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Button Url</label>
                                            <input type="text" className="form-control" name="btn_url" onBlur={handleInputBlur} defaultValue={data?.data?.btn_url} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Icon One</label>
                                            <input type="text" className="form-control" name="icon_one" onBlur={handleInputBlur} defaultValue={data?.data?.icon_one} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">  Icon Two</label>
                                            <input type="text" className="form-control" name="icon_two" onBlur={handleInputBlur} defaultValue={data?.data?.icon_two} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">  Icon Three</label>
                                            <input type="text" className="form-control" name="icon_three" onBlur={handleInputBlur} defaultValue={data?.data?.icon_three} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">  Icon One Url</label>
                                            <input type="text" className="form-control" name="icon_one_url" onBlur={handleInputBlur} defaultValue={data?.data?.icon_one_url} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Icon Two Url</label>
                                            <input type="text" className="form-control" name="icon_two_url" onBlur={handleInputBlur} defaultValue={data?.data?.icon_two_url} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="icon_three_url" className="required"> Icon Three Url</label>
                                            <input type="text" className="form-control" name="icon_three_url" onBlur={handleInputBlur} defaultValue={data?.data?.icon_three_url} required="" id="icon_three_url" />
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

export default TopBannarSection;