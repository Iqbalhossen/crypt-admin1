import React from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";

function Items({ id, data }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "items",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <>
            <li className="highlight icon-move clearfix" ref={drag}
                style={{ border: isDragging ? "2px solid pink" : "0px" }}>
                <i className=" fa fa-arrows-alt mt-2"></i>
                <span className="d-inline-block text-white me-auto ms-2"> {data.name}</span>
                <div className="float-end d-inline-block manage-content">
                    <Link to='' target="_blank" className="btn btn-outline-light text-center text-white cog-btn" >
                        <i className="fa fa-cog p-0 m-0"></i>
                    </Link>

                </div>

            </li>
        </>
    );
}

export default Items;
