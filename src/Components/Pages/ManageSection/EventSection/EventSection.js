import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EventSection = () => {

    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();

    const [userImage, setUserImage] = useState('');

    const handleImage = (e) => {
        setUserImage(e.target.files[0])

    }

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { ...dataVulue, event_img: userImage };
        if (userData.image_url === '') {
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
            axios.post(`http://localhost:5000/api/admin/home/bouns/store`, userData, config)
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
                })
                .then(data => {
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
        fetch(`http://localhost:5000/api/frontend/home/bouns/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data?.data[0]))
    }, [results])
    // {data?.title_one}

    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Event Section</h6>
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
                                                            <img src={`http://localhost:5000/${data?.image_url}`} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleImage} className="profilePicUpload" name="event_img" id="profilePicUpload0" accept=".jpg, .png, .jpeg" />
                                                        <label htmlFor="profilePicUpload0" className="bg--primary">Image</label>
                                                        <small class="mt-2  ">Supported files: <b>jpeg, jpg, png</b>.
                                                            | Will be resized to:
                                                            <b>735x640</b>
                                                            px.
                                                        </small>
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
                                                <label htmlFor="sub_heading" className="required">Sub Title One</label>
                                                <input type="text" className="form-control" name='title_one' onBlur={handleInputBlur} defaultValue={data?.title_one} required="" id="sub_heading" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="button_one_url" className="required">Sub Title One description</label>
                                                <input type="text" className="form-control" name="dis_one" onBlur={handleInputBlur} defaultValue={data?.dis_one} required="" id="button_one_url" />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Sub Title Two</label>
                                            <input type="text" className="form-control" name="title_two" onBlur={handleInputBlur} defaultValue={data?.title_two} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Sub Title Two description</label>
                                            <input type="text" className="form-control" name="dis_two" onBlur={handleInputBlur} defaultValue={data?.dis_two} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">  Sub Title Three</label>
                                            <input type="text" className="form-control" name="title_three" onBlur={handleInputBlur} defaultValue={data?.title_three} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Sub Title Three description</label>
                                            <input type="text" className="form-control" name="dis_three" onBlur={handleInputBlur} defaultValue={data?.dis_three} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">    Button Name</label>
                                            <input type="text" className="form-control" name="dis_one_btn" onBlur={handleInputBlur} defaultValue={data?.dis_one_btn} required="" id="button_two_url" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">Button Url</label>
                                            <input type="text" className="form-control" name="dis_one_btn_url" onBlur={handleInputBlur} defaultValue={data?.dis_one_btn_url} required="" id="button_two_url" />
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

export default EventSection;