import React from "react";
import "./ToDoListItem.css";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

import LockButton from "./LockButton";
import UnlockButton from "./UnlockButton";

const ToDoListItem = (props) => {

    const {onDeleted, onToggleImportant, onToggleDone} = props;
    const {label, done, important, importantButton} = props;
    let classNames = "todo-list-item";

    if (done) {
        classNames += " done";
    }

    if (important) {
        classNames += " important";
    }

    return (
        <div>
                <span
                    className={classNames}
                    onClick={onToggleDone}
                >
                    {label}
                </span>

            {
                importantButton ?
                    <UnlockButton mark={onToggleImportant}/>
                    : <LockButton mark={onToggleImportant}/>
            }

            <IconButton onClick={onDeleted}>
                <DeleteIcon aria-label="delete"/>
            </IconButton>
        </div>
    );
};

export default ToDoListItem;