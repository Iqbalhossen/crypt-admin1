import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const NewsletterSetting = () => {
     
    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();


    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`https://gffex.xyz/api/admin/site/setting/newsletter/store`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(dataVulue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    toast.error(`${data.message}`, {
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
                    setResults(data)
                    event.target.reset();
                    refSubmitDis.current.removeAttribute("disabled");
                }
            })
            .catch(error => console.log(error));
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
        fetch(`https://gffex.xyz/api/frontend/home/newsletter/setting/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [results])
    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Newsletter Setting</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmitData}>
                            
                                <div className="row">                           
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="button_two_url" className="required">Description</label>
                                            <input type="text" className="form-control" name="dis" onBlur={handleInputBlur} defaultValue={data?.dis} required="" id="button_two_url" />
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


export default NewsletterSetting;