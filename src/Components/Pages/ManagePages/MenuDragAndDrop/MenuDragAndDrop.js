import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDrop } from "react-dnd";
import Items from "./Items";
import DragAndDropItems from './DragAndDropItems';
import { toast } from 'react-toastify';
const PictureList = [
    {
        id: 1,
        name:
            "Top Bannar Section",
    },
    {
        id: 2,
        name:
            "Event Section",
    },
    {
        id: 3,
        name:
            "Slider Section",
    },
    {
        id: 4,
        name:
            "Notices Section",
    },
    {
        id: 5,
        name:
            "Cryptocurrencies Section",
    },
    {
        id: 6,
        name:
            "New Listing Section",
    },
    {
        id: 7,
        name:
            "Choose GFFEX Section",
    },
    {
        id: 8,
        name:
            "Our Products Section",
    },
    {
        id: 9,
        name:
            "Community Section",
    },
    {
        id: 10,
        name:
            "Gffex App Section",
    },
    {
        id: 11,
        name:
            "Start Trade Button",
    },
    {
        id: 12,
        name:
            "SignUp To Trade Button",
    },
];
const MenuDragAndDrop = ({ data, menuPageData }) => {


    const refSubmitDis = useRef();
    const [board, setBoard] = useState(menuPageData);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "items",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    let i = 0;
    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, { id: pictureList[0].id, filterId: i, name: pictureList[0].name }]);
        i = i + 1;
    };

    const handleData = () => {
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://66.29.142.198:5000/api/admin/menu/page/create/${data._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(board)
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
                    refSubmitDis.current.removeAttribute("disabled")
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
                    refSubmitDis.current.removeAttribute("disabled")
                }
            })
            .catch(error => console.log(error));

    }


    const removeItems = (id) => {
        const pictureList = board.filter((picture) => picture.filterId !== id);
        if ((pictureList).length === 0) {
            setBoard([]);
        } else {
            setBoard(pictureList);
        }
    };
    return (

        <>

            <div className="row">
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">{data?.name} Page</h3>
                        </div>

                        <div className="card-body">
                            
                                <ol className="simple_with_drop vertical sec-item Board" style={{ height: '800px' }} ref={drop}>
                                    {board?.map((data) => {
                                        return <DragAndDropItems data={data} id={data.id} removeItems={removeItems} />;
                                    })}
                                </ol>

                                <button type="submit" ref={refSubmitDis} onClick={handleData} className="btn btn-primary w-100 h-45">Update Now</button>
                         
                        </div>
                    </div>



                </div>
                <div className="col-md-5 mt-md-0 mt-3">

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Sections</h3>
                            <small className="text--primary">Drag the section to the left side you want to show on the page.</small>
                        </div>



                        <div className="card-body">
                            <ol className="simple_with_no_drop vertical">
                                {PictureList.map((data) => {
                                    return <Items data={data} id={data.id} />;
                                })}
                            </ol>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default MenuDragAndDrop;