import React, {Component} from "react";
import "./App.css";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import StatusFilter from "../StatusFilter";
import AddItem from "../AddItem";

export default class App extends Component {
    maxId = 100;

    state = {
        toDoData: [
            {label: `Drink Coffee`, important: false, id: 1},
            {label: `Create React App`, important: true, id: 2},
            {label: `Create Awesome App`, important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({toDoData}) => {
            const idx = toDoData.findIndex((element) => element.id === id);
            const newArray = [
                ...toDoData.slice(0, idx),
                ...toDoData.slice(idx + 1),
            ];
            return {
                toDoData: newArray
            }
        })
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({toDoData}) => {
            const newArray = [...toDoData, newItem];
            return {
                toDoData: newArray
            }
        })
    };

    onToggleImportant = (id) => {
        console.log("Important", id)
    };

    onToggleDone = (id) => {
        console.log("Done", id)
    };

    render() {
        return (
            <div className="body">
                <AppHeader/>
                <SearchPanel/>
                <StatusFilter/>
                <ToDoList
                    toDoData={this.state.toDoData}
                    onDeleted={(id) => this.deleteItem(id)}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem onAdded={this.addItem}/>
            </div>
        );
    }
}