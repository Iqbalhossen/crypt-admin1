import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const ENDPOINT = "https://gffex.xyz";
let socket;
const SingleUser = ({ data, singleChatView }) => {
    const [UserData, setUserData] = useState([])
    const [messages, setMessages] = useState({})

    useEffect(() => {
        if (data) {
            fetch(`https://gffex.xyz/api/admin/user/view/single/${data?.userId}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setUserData(data.data);
                    if (data.data) {

                        const userId = data?.data?._id;
                        console.log(userId)

                    }

                })
        }

    }, [data])

    // socket section

    socket = io(ENDPOINT);

    useEffect(() => {
        if (typeof (data?.userId) === "string") {
            socket.emit('join_room', data?.userId);
            socket = io(ENDPOINT);
        }

    }, []);

    useEffect(() => {
        socket.on("recvice_message", (NewMessage) => {
            setMessages(NewMessage);
            console.log(NewMessage)
        });
    });
    return (
        <>
            {/* <li className="clearfix">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                <div className="about">
                    <div className="name">Vincent Porter</div>
                    <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                </div>
            </li> */}
            {/* <li className="clearfix active">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                <div className="about">
                    <div className="name">Aiden Chavez</div>
                    <div className="status"> <i className="fa fa-circle online"></i> online </div>
                </div>
            </li> */}
            <li className="clearfix" onClick={() => singleChatView(UserData)}>
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                <div className="about">
                    <div className="name">{UserData?.name}</div>
                    <div className="status">
                        <i className="fa fa-circle online">
                        </i> online
                    </div>
                    {messages?.recevierId === null
                      && messages?.senderId === UserData?._id ?
                        <div className="status">
                            {messages?.message}
                        </div>
                        :
                        ''}

                </div>
            </li>

        </>
    );
};

export default SingleUser;