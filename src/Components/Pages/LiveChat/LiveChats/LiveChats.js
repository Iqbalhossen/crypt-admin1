import React, { useEffect, useRef, useState } from 'react';
import SingleUser from './SingleUser';
import SingleChats from './SingleChats';
import { io } from 'socket.io-client';
const ENDPOINT = "https://gffex.xyz";
var socket;

const LiveChats = () => {

    const [data, setData] = useState([]);
    const [singleChatData, setSingleChatData] = useState([]);
    const showRef = useRef(null);

    useEffect(() => {
        fetch(`https://gffex.xyz/api/chat/conversation/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [])


    useEffect(() => {    
        socket = io(ENDPOINT);
      }, []);
      

    const singleChatView = Userdata => {
        socket.emit('join_room', Userdata?._id )
        setSingleChatData(Userdata);
        showRef.current.style.display = "block";
    }

    // console.log(singleChatData)
    return (
        <>
            <div className="container py-5 ">
                <h1>Live Chats</h1>
                <div className="shadow-lg">
                    <div className="row clearfix ">
                        <div className="col-lg-12">
                            <div className="chat-card chat-app">
                                <div id="plist" className="people-list">

                                    <ul className="list-unstyled chat-list mt-2 mb-0">

                                        {data.length !== 0 ?
                                            data.map((data, index) => {
                                                if (data) {
                                                    return (
                                                        <SingleUser data={data} index={index} key={data._id} singleChatView={singleChatView}></SingleUser>
                                                    );
                                                }
                                            }) :
                                            <tr>
                                                <td className="text-muted text-center" colspan="100%">Data not found</td>
                                            </tr>}



                                    </ul>
                                </div>

                                <div style={{ display: "none" }} ref={showRef}>
                                    <SingleChats singleChatData={singleChatData}></SingleChats>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default LiveChats;