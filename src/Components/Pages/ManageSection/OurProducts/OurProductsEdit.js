import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';
import { useParams } from 'react-router-dom';

const OurProductsEdit = () => {
    
    const { id } = useParams();
    const [data, setData] = useState({});
    const [results, setResults] = useState({});
    
    const ShortEditor = useRef(null)
    const [ShortContent, setShortContent] = useState('')

    const LongEditor = useRef(null)
    const [LongContent, setLongtContent] = useState('')

    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();

  


    const [userImage, setUserImage] = useState('');

    const handleImage = (e) => {
        setUserImage(e.target.files[0])
    }

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { ...dataVulue, ourproducts_img: userImage, short_dis:ShortContent, long_dis: LongContent};
        if (userData.ourproducts_img === '') {
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
        }else if(userData.short_dis === ''){
            toast.error(`Short Description field required`, {
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
        }else if(userData.long_dis === ''){
            toast.error(` Long Description field required`, {
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
            axios.put(`http://localhost:5000/api/admin/home/our/products/update/${id}`, userData, config)
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



    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/home/our/products/edit/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [results])



    return (
        <>
              <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Our products add</h6>
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
                                                            <img src={`http://localhost:5000/${data?.image_url}`} style={{ width: '100%', height: '120px' }} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleImage} className="profilePicUpload" name="ourproducts_img" id="profilePicUpload0" accept=".jpg,.jpeg,.png" />
                                                        <label htmlFor="profilePicUpload0" className="bg--primary">Choose Image</label>
                                                        <small class="mt-2  ">Supported files: <b>jpeg, jpg, png.</b> Image will be resized into   (width: 160px * height: 160px)  </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                      
                                    </div>
                                    <div className=" col-md-8 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">Title one</label>
                                                <input type="text" className="form-control" name="title" defaultValue={data?.title} onBlur={handleInputBlur} placeholder='Title' id="heading" />
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="button_one_url" className="required">  Short Description</label>
                                            <JoditEditor
                                                ref={ShortEditor}
                                                value={ShortContent}
                                                height="600"
                                                onChange={(newContent) => setShortContent(newContent)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required"> Long Description</label>
                                            <JoditEditor
                                                ref={LongEditor}
                                                value={LongContent}
                                                height="600"
                                                onChange={(newContent) => setLongtContent(newContent)}
                                            />
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

export default OurProductsEdit;