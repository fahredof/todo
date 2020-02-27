import React from 'react';
import './ToDoList.css';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ToDoListItem from "../ToDoListItem";

const ToDoList = ({toDoData, onDeleted, onToggleImportant, onToggleDone}) => {
    const elements = toDoData.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <ListItem key={id}>
                <ToDoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
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