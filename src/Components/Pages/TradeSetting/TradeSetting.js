import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import SingleItem from './SingleItem';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const TradeSetting = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);

    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/trade/setting/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData, results])


    const handleDelete = id => {
        fetch(`http://localhost:5000/api/admin/trade/setting/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setupdateData(data);
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
            })
            .catch(error => console.log(error));
    }


    // Data Store 

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { ...dataVulue };
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        };
        axios.post(`http://localhost:5000/api/admin/trade/setting/store`, userData, config)
            .then(response => {
                event.target.reset();
                setShow(false)
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


    const handleInputBlur = event => {
        setErrorMessage({})
        setResults({});
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...dataVulue };
        newData[field] = value;
        setDataVulue(newData);
    }


    return (
        <>
            <div className="bodywrapper__inner">

                <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                    <h6 className="page-title">Trade Setting</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        <button onClick={handleShow} className="btn btn-sm btn-outline-primary addBtn">
                            <i className="las la-plus"></i>Add New</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card b-radius--10 ">
                            <div className="card-body p-0">
                                <div className="table-responsive--md  table-responsive">
                                    <table className="table table--light style--two mb-0">
                                        <thead>
                                            <tr>
                                                <th>S.N.</th>
                                                <th>Time</th>
                                                <th>Unit</th>
                                                <th>Profit %</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.length !== 0 ?
                                                data.map((data, index) => {
                                                    console.log(data)
                                                    if (data) {
                                                        return (
                                                            <SingleItem data={data} index={index} key={data._id} ></SingleItem>
                                                        );
                                                    }
                                                }) :
                                                <tr>
                                                    <td className="text-muted text-center" colspan="100%">Data not found</td>
                                                </tr>}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal  */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Trade Setting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmitData}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="Time" className="required">Time</label>
                                    <input type="text" className="form-control" name="Time" onBlur={handleInputBlur} required="" id="Time" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Profit" className="required">Profit %</label>
                                    <input type="text" className="form-control" name="Profit" onBlur={handleInputBlur} required="" id="Profit" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Unit" className="required">Unit</label>
                                    <select className="form-control" onBlur={handleInputBlur} name="Unit" required="" id="Unit">
                                        <option selected="" disabled="">Select One</option>
                                        <option value="seconds">Seconds</option>
                                        <option value="minutes">Minutes</option>
                                        <option value="hours">Hours</option>
                                    </select>
                                </div>

                                <button type="submit" ref={refSubmitDis} className="btn btn-primary w-100 h-45">Submit</button>
                            </div>

                        </form>

                    </Modal.Body>
                </Modal>


            </div>
        </>
    );
};

export default TradeSetting;