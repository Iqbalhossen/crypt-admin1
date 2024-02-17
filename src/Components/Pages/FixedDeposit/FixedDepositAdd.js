import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';

const FixedDepositAdd = () => {
    const ShortEditor = useRef(null)
    const [ShortContent, setShortContent] = useState('')

    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();


    const [Image, setImage] = useState('');

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { ...dataVulue, image: Image, dis: ShortContent, };
        if (userData.image === '') {
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
        } else if (userData.short_dis === '') {
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
        } else {

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            };
            axios.post(`https://gffex.xyz/api/admin/fixed/deposit/store`, userData, config)
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
                <h6 className="page-title">Fixed Deposit add</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmitData}>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="heading" className="required">Promotion Name</label>
                                            <input type="text" className="form-control" name="promotion_name" onBlur={handleInputBlur} placeholder='promotion name' required id="heading" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="heading" className="required">Name</label>
                                            <input type="text" className="form-control" name="name" onBlur={handleInputBlur} placeholder='name' required id="heading" />
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="heading" className="required">Period (day)</label>
                                            <input type="number" className="form-control" name="period" onBlur={handleInputBlur} placeholder='period day' required id="heading" min='1' />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="heading" className="required">Profit%</label>
                                            <input type="text" className="form-control" name="profit" onBlur={handleInputBlur} placeholder='profit' required id="heading" />
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="heading" className="required">Minimum Amount</label>
                                            <input type="number" className="form-control" name="min_amount" onBlur={handleInputBlur} placeholder='min amount' required id="heading" min={0} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="heading" className="required">maximum Amount</label>
                                            <input type="text" className="form-control" name="max_amount" onBlur={handleInputBlur} placeholder='max amount' required id="heading" />
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <label htmlFor="heading" className="required">Expired Time</label>
                                            <input type="date" className="form-control" name="expired_time" onBlur={handleInputBlur} placeholder='expired_time' required id="heading" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <div className="image-upload">
                                                <div className="thumb">
                                                    <div className="avatar-edit">
                                                        <input type="file" onChange={handleImage} className="profilePicUpload" name="ourproducts_img" id="profilePicUpload0" accept=".jpg,.jpeg,.png" />
                                                        <label htmlFor="profilePicUpload0" className="bg--primary">Choose Image</label>
                                                        <small class="mt-2  ">Supported files: <b>jpeg, jpg, png.</b> Image will be resized into   (width: 160px * height: 160px)  </small>
                                                    </div>
                                                </div>
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

export default FixedDepositAdd;