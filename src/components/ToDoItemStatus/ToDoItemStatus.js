import React from "react";
import "./ToDoItemStatus.css";

const ToDoItemStatus = ({toDo, done}) => {
    return (
        <div className="status">
            <p>{toDo} more to do, {done} done</p>
        </div>
    );
};

export default ToDoItemStatus;