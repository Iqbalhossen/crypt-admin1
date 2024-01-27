import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";

const DragAndDropItems = ({ id, data, removeItems }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "items",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <>
            <li className="highlight icon-move item" ref={drag} style={{ border: isDragging ? "2px solid pink" : "0px" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <i className=" fa fa-arrows-alt"></i>
                        <span className="d-inline-block text-white me-auto ms-2"> {data.name}</span>
                    </div>
                    <div className="d-flex text-right close-icon">
                        <button onClick={() => removeItems(data.filterId)} >
                            <FontAwesomeIcon icon="fa-solid fa-xmark " />
                        </button>
                    </div>
                </div>

            </li>
        </>
    );
}
export default DragAndDropItems;