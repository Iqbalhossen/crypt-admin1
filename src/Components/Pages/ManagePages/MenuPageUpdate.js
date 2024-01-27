import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MenuDragAndDrop from './MenuDragAndDrop/MenuDragAndDrop';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { toast } from 'react-toastify';
const MenuPageUpdate = () => {

    const { id } = useParams();
    const [data, setData] = useState({});
    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/home/menu/edit/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [results])

    const handleSubmitData = event => {
        refSubmitDis.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch(`http://localhost:5000/api/admin/home/menu/update/${id}`, {
            method: 'PUT',
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
                    setResults(data)
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


    const [menuPageData, setMenuPageData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/menu/page/view/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setMenuPageData(data.data)
            })
    }, [])

    return (
        <>

            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Manage Section of {data?.name}</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <Link to="/admin/frontend/manage-pages" className="btn btn-sm btn-outline-primary">
                        <i className="la la-undo"></i> Back</Link>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmitData}>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label for="name" className="required">Page Name</label>
                                            <input type="text" className="form-control" onBlur={handleInputBlur} name="name" defaultValue={data?.name} required="" id="name" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label for="slug" className="required">Page Slug</label>
                                            <input type="text" className="form-control" onBlur={handleInputBlur} defaultValue={data?.slug} name="slug" required="" id="slug" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>&nbsp;</label>
                                            <button type="submit" ref={refSubmitDis} className="btn btn-primary w-100 h-45">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <DndProvider backend={HTML5Backend}>
                <MenuDragAndDrop data={data} menuPageData={menuPageData} key={data._id}></MenuDragAndDrop>
            </DndProvider>
        </>
    );
};

export default MenuPageUpdate;