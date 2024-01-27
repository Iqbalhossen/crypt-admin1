import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SingleItem from './SingleItem';

const SupportTicketDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [messageData, setMessageData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/support/tickets/view/details/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setMessageData(data.SupportTicketsMessage)
                setData(data.SupportTickets)
            })
    }, [])
    
    return (
        <>
            <div className="bodywrapper__inner">

                <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                    <h6 className="page-title">Reply Ticket</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        <a href="https://gffexvip.biz/admin/ticket" className="btn btn-sm btn-outline-primary">
                            <i className="la la-undo"></i> Back</a>
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
                                            <span className="badge badge--dark text-dark">Open</span>  
                                        
                                        :''}
                                        {data?.status === 1 ?  
                                            <span className="badge badge--dark text-dark">Answered</span>  
                                        
                                        :''}
                                        {data?.status === 2 ?  
                                            <span className="badge badge--dark text-dark">Replied</span>  
                                        
                                        :''}
                                        {data?.status === 3 ?  
                                            <span className="badge badge--dark text-dark">Closed</span>  
                                        
                                        :''}
                                            [Ticket#{data?.ticket}] {data?.subject}
                                        </div>
                                        <div className="col-sm-4  col-md-6 text-sm-end mt-sm-0 mt-3">
                                        </div>
                                    </div>
                                </h6>



                                <form className="form-horizontal">
                                    <div className="row ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" rows="5" required="" id="inputMessage"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row form-group">
                                                
                                                <div className="col-9">
                                                    <div className="file-upload-wrapper" data-text="Select your file!">
                                                        <input type="file" name="attachments[]" id="inputAttachments" className="file-upload-field" />
                                                    </div>
                                                </div>                                         
                                                <div className="col-12">
                                                    <div id="fileUploadsContainer"></div>
                                                </div>
                                                <div className="col-md-12 ticket-attachments-message text-muted mt-3">
                                                    Allowed File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 offset-md-3">
                                            <button className="btn btn-primary w-100 mt-4" type="submit" name="replayTicket" value="1"><i className="la la-fw la-lg la-reply"></i> Reply                                </button>
                                        </div>
                                    </div>

                                </form>


                                {data.length !== 0 ?
                                            messageData.map((messagedata, index) => {
                                                if (data) {
                                                    return (
                                                        <SingleItem data={messagedata} index={index} key={messagedata._id} ticket={data} ></SingleItem>
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
        </>
    );
};

export default SupportTicketDetails;