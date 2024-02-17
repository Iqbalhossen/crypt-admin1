import React from 'react';

const ChatsItem = ({data}) => {

    if(data?.recevierId !== null){
        return (
            <>
                <li className="clearfix">
                    <div className="message-data text-end">
                        <span className="message-data-time d-block mb-1">10:10 AM, Today</span>
                        {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" /> */}
                        <div className="message other-message "> {data?.message} </div>
                    </div>
                    
                </li>
               
            </>
        );

    }else{

        return (
            <>
               
                <li className="clearfix">
                    <div className="message-data">
                        <span className="message-data-time">10:12 AM, Today</span>
                    </div>
                    <div className="message my-message">{data?.message}</div>
                </li>
              
            </>
        );
    }

    
};

export default ChatsItem;