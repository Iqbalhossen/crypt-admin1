import React, { useState, useRef, useEffect, } from 'react';
import { toast } from 'react-toastify';

const Cryptocurrencies = () => {


    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`https://gffex.xyz/api/admin/home/cryptocurrencies/store`, {
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
            .catch(error => refSubmitDis.current.removeAttribute("disabled"));
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
        fetch(`https://gffex.xyz/api/frontend/home/cryptocurrencies/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [results])

    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Cryptocurrencies Section</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmitData}>
                                <div className="row">

                                    <div className=" col-md-12 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">Cryptocurrencies Title</label>
                                                <input type="text" className="form-control" name="name" onBlur={handleInputBlur} defaultValue={data?.name} required="" id="heading" />
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

export default Cryptocurrencies;