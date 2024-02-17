import React, {useState, useRef, useEffect, } from 'react';
import { toast } from 'react-toastify';

const GffexAppBtn = () => {
    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`https://gffex.xyz/api/admin/home/gffex/app/button/store`, {
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
                    setResults(data)
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
                    refSubmitDis.current.removeAttribute("disabled");
                    event.target.reset();
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
        fetch(`https://gffex.xyz/api/frontend/home/gffex/app/btn/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data?.data))
    }, [results])
    return (
        <>
             <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Gffex App Button </h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmitData}>
                                <div className="row">

                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">  Name One</label>
                                                <input type="text" className="form-control" name="btn_one_name" onBlur={handleInputBlur} defaultValue={data?.btn_one_name} required="" id="heading" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required"> Icon One</label>
                                                <input type="text" className="form-control" name="btn_one_icon" onBlur={handleInputBlur} defaultValue={data?.btn_one_icon} required="" id="heading" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required"> Url One</label>
                                                <input type="text" className="form-control" name="btn_one_url" onBlur={handleInputBlur} defaultValue={data?.btn_one_url} required="" id="heading" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">  Name Two</label>
                                                <input type="text" className="form-control" name="btn_two_name" onBlur={handleInputBlur} defaultValue={data?.btn_two_name} required="" id="heading" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required"> Icon two</label>
                                                <input type="text" className="form-control" name="btn_two_icon" onBlur={handleInputBlur} defaultValue={data?.btn_two_icon} required="" id="heading" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required"> Url Two</label>
                                                <input type="text" className="form-control" name="btn_two_url" onBlur={handleInputBlur} defaultValue={data?.btn_two_url} required="" id="heading" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required"> Name Three</label>
                                                <input type="text" className="form-control" name="btn_three_name" onBlur={handleInputBlur} defaultValue={data?.btn_three_name} required="" id="heading" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required"> Icon Three</label>
                                                <input type="text" className="form-control" name="btn_three_icon" onBlur={handleInputBlur} defaultValue={data?.btn_three_icon} required="" id="heading" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">  Url Three</label>
                                                <input type="text" className="form-control" name="btn_three_url" onBlur={handleInputBlur} defaultValue={data?.btn_three_url} required="" id="heading" />
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

export default GffexAppBtn;