import React, {useState, useRef, useEffect, } from 'react';
import { toast } from 'react-toastify';

const SocialSupport = () => {
    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://localhost:5000/api/admin/site/setting/social/support/store`, {
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
                    setResults(data.data)
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
        fetch(`http://localhost:5000/api/admin/site/setting/social/support/view`, {
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
                                                <label htmlFor="heading" className="required">WhatsApp Link</label>
                                                <input type="text" className="form-control" name="whatapp_link" onBlur={handleInputBlur} defaultValue={data?.whatapp_link} required="" id="heading" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">Telegram Link</label>
                                                <input type="text" className="form-control" name="tele_link" onBlur={handleInputBlur} defaultValue={data?.tele_link} required="" id="heading" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-6 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">Messenger</label>
                                                <input type="text" className="form-control" name="messenger" onBlur={handleInputBlur} defaultValue={data?.messenger} required="" id="heading" />
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

export default SocialSupport;