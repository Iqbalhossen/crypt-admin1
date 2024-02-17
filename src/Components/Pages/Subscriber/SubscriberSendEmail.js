import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';
const SubscriberSendEmail = () => {

    const editor = useRef(null)
    const [content, setContent] = useState('')

    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const storeData = { ...dataVulue, body: content }
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        };
        axios.post(`https://gffex.xyz/api/admin/subscriber/manager/email/send`, storeData, config)
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

    const handleInputBlur = event => {
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
                    <h6 className="page-title">Email to Subscribers</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        <Link to="/admin/subscriber" className="btn btn-sm btn-outline-primary">
                            <i className="la la-undo"></i> Back</Link>
                    </div>
                </div>

                <div className="row">

                    <div className="col-xl-12">
                        <div className="card">
                            <form onSubmit={handleSubmitData}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label for="subject" className="required">Subject</label>
                                            <input type="text" onBlur={handleInputBlur} className="form-control" name="subject" required  id="subject" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="body">Body</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                height="600"
                                                onChange={(newContent) => setContent(newContent)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" ref={refSubmitDis} className="btn btn-primary w-100 h-45">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default SubscriberSendEmail;