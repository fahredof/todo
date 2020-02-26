import React from 'react';
import './ToDoList.css';

import ToDoListItem from "../ToDoListItem";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const ToDoList = ({toDoData, onDeleted}) => {
    const elements = toDoData.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <ListItem key={id}>
                <ToDoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                />
            </ListItem>
        );
    });

    return (
        <div className="todo-list">
            <List>
                {elements}
            </List>
        </div>
    );
};

export default ToDoList;