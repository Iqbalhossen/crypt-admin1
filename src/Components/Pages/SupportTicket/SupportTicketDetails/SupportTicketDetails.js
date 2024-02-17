import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SingleItem from './SingleItem';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import { Link } from 'react-router-dom';

const SupportTicketDetails = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState([]);
    const [messageData, setMessageData] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/admin/support/tickets/view/details/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setMessageData(data.SupportTicketsMessage)
                setData(data.SupportTickets)
            })
    }, [updateData])




    const [userImage, setUserImage] = useState('');
    const refSubmitDis = useRef();

    const handleImage = (e) => {
        setUserImage(e.target.files[0])

    }


    const [dataValue, setDataValue] = useState({});

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...dataValue, };
        newUser[field] = value;
        setDataValue(newUser);
    }
    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        if (!userImage || userImage === '') {
            const storeData = { ...dataValue, admin_id: authUser?._id };
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',

                }
            };
            axios
                .post(`https://gffex.xyz/api/admin/support/tickets/message/${id}`, storeData, config)
                .then(data => {
                    event.target.reset();
                    toast.success(`${data.data.message}`, {
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
                    setUpdateData(data);
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            const storeData = { ...dataValue, image: userImage, admin_id: authUser?._id };
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',

                }
            };
            axios
                .post(`https://gffex.xyz/api/admin/support/tickets/message/${id}`, storeData, config)
                .then(data => {
                    event.target.reset();
                    toast.success(`${data.data.message}`, {
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
                    setUpdateData(data);
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    const handleDelete = id => {
        fetch(`https://gffex.xyz/api/admin/support/tickets/message/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setUpdateData(data);
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
    const handleSupportTicketsClose = () => {
        fetch(`https://gffex.xyz/api/admin/support/tickets/close/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setUpdateData(data);
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

    return (
        <>

            <div className="bodywrapper__inner">

                <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                    <h6 className="page-title">Reply Ticket</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        <Link to="/admin/ticket" className="btn btn-sm btn-outline-primary">
                            <i className="la la-undo"></i> Back</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body ">

                                <h6 className="card-title  mb-4">
                                    <div className="row">
                                        <div className="col-sm-8 col-md-6">
                                            {data?.status === 0 ?
                                                <span className="badge badge--dark text-dark me-2">Open</span>

                                                : ''}
                                            {data?.status === 1 ?
                                                <span className="badge badge--dark text-dark me-2">Answered</span>

                                                : ''}
                                            {data?.status === 2 ?
                                                <span className="badge badge--dark text-dark me-2">Replied</span>

                                                : ''}
                                            {data?.status === 3 ?
                                                <span className="badge badge--dark text-dark me-2">Closed</span>

                                                : ''}
                                            [Ticket#{data?.ticket}] {data?.subject}
                                        </div>

                                        {data?.status === 3 ?
                                            ''

                                            :
                                            <div className="col-sm-4  col-md-6 text-sm-end mt-sm-0 mt-3">
                                                <button className="btn btn-danger btn-sm" type="button" onClick={handleSupportTicketsClose}>
                                                    <i className="fa fa-lg fa-times-circle"></i> Close Ticket
                                                </button>
                                            </div>
                                        }



                                    </div>
                                </h6>



                                <form className="form-horizontal" onSubmit={handleSubmitData}>

                                    <div className="row ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" rows="5" required="" id="inputMessage" onBlur={handleInputBlur}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row form-group">

                                                <div className="col-9">
                                                    <div className="file-upload-wrapper" data-text="Select your file!">
                                                        <input type="file" name="image" id="inputAttachments" className="file-upload-field" onChange={handleImage} />
                                                    </div>
                                                </div>
                                                <div className="col-3">

                                                </div>
                                                <div className="col-12">
                                                    <div id="fileUploadsContainer"></div>
                                                </div>
                                                <div className="col-md-12 ticket-attachments-message text-muted mt-3">
                                                    Allowed File Extensions: .jpg, .jpeg, .png
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 offset-md-3">
                                            <button className="btn btn-primary w-100 mt-4" type="submit" ref={refSubmitDis} ><i className="la la-fw la-lg la-reply"></i> Reply                                </button>
                                        </div>
                                    </div>

                                </form>



                                <div className="row border border--primary border-radius-3 my-3 mx-2">

                                    {data.length !== 0 ?
                                        messageData.map((messagedata, index) => {
                                            if (data) {
                                                return (
                                                    <SingleItem data={messagedata} index={index} key={messagedata._id} ticket={data} handleDelete={handleDelete} ></SingleItem>
                                                );
                                            }
                                        }) :
                                        <tr>
                                            <td className="text-muted text-center" colspan="100%">Data not found</td>
                                        </tr>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default SupportTicketDetails;