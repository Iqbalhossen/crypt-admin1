import React, { useContext, useEffect, useState } from 'react';
import ChatsItem from './ChatsItem';
import { io } from 'socket.io-client';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import axios from 'axios';
const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const SingleChats = ({ singleChatData }) => {
    const { authUser } = useContext(AuthContext);

    const { _id, name, picture } = singleChatData;

    const [data, setData] = useState([]);
    const [messagesInputValue, setMessagesInputValue] = useState([]);


    socket = io(ENDPOINT);


    useEffect(() => {
        socket.on("recvice_message", (NewMessage) => {
            setData(oldMessage => [...oldMessage, NewMessage]);
        });
    });

    useEffect(() => {
        setMessagesInputValue("");
        fetch(`http://localhost:5000/api/chat//messgae/view/${_id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);

            })
    }, [singleChatData])


    const sendMessage = async (event) => {
        event.preventDefault();
        const storeData = { conversationId: data[0]?.conversationId, message: messagesInputValue, recevierId: _id, senderId: authUser?._id };

        try {

            const config = {
                headers: {
                    'content-type': 'application/json',

                }
            };
            axios.post(`http://localhost:5000/api/chat/messgae/send/${_id}`, storeData, config)
                .then(async (res) => {
                    event.target.reset();
                    const NewMessages = res?.data?.data;
                    // console.log(NewMessages)
                    if (NewMessages) {
                        setMessagesInputValue('');
                        await socket.emit("send_message", NewMessages);
                        setData(oldMessage => [...oldMessage, NewMessages]);

                    }


                })
                .catch(error => {

                })


        } catch (error) {

        }
    };


    const typingHandler = (e) => {
        setMessagesInputValue(e.target.value);

        // if (!socketConnected) return;

    };

    const newdata = data.filter((ele, ind) => ind === data.findIndex(
        elem => elem._id !== ele._id
    ))

    console.log(newdata)

    useEffect(() => {
        socket.emit('join_room', _id);
        socket = io(ENDPOINT);
    }, []);


    return (
        <>
            <div className="chat pt-3">
                <div className="chat-header clearfix">
                    <div className="row">
                        <div className="col-lg-6">
                            <button >
                                <img src={`http://localhost:5000/${picture}`} alt="avatar" />
                            </button>
                            <div className="chat-about">
                                <h6 className="m-b-0">{name}</h6>
                                {/* <small>Last seen: 2 hours ago</small> */}
                            </div>
                        </div>
                        <div className="col-lg-6 hidden-sm text-end ">
                            <button href="" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></button>
                            <button href="" className="btn btn-outline-primary"><i className="fa fa-image"></i></button>
                            <button href="" className="btn btn-outline-info"><i className="fa fa-cogs"></i></button>
                            <button href="" className="btn btn-outline-warning"><i className="fa fa-question"></i></button>
                        </div>
                    </div>
                </div>
                <div className="chat-history">
                    <ul className="m-b-0 ">
                        {
                            data.length !== 0 ? 
                            data.reduce((finalArray, current) => {
                                let obj = finalArray.find((item) => item?._id === current?._id);
                                if (obj) {
                                    return finalArray;
                                }
                                return finalArray.concat([current]);
                            }, []).map((data, index) => {
                                if (data) {
                                    return (
                                        <ChatsItem data={data} index={index} key={index} ></ChatsItem>
                                    );
                                }
                            })
                            :
                            <tr>
                                <td className="text-muted text-center" colspan="100%">Data not found</td>
                            </tr>                   
                    
                    }

                    </ul>
                </div>
                <div className="chat-message clearfix">
                    <form onSubmit={sendMessage}>
                        <div className="input-group mb-0">
                            <textarea id="" cols="20" rows="10"
                                placeholder="Enter a message.."
                                onChange={typingHandler}
                                value={messagesInputValue}
                            ></textarea>
                            <div className="input-group-prepend mt-2">
                                <button type='submit' className="btn btn-light">
                                    <span className="input-group-text"><i className="fa-regular fa-paper-plane"></i></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SingleChats;