import React, {Component} from "react";
import "./App.css";

import AppLogo from "../AppHeader";
import ItemStatus from "../ItemStatus";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import StatusFilter from "../StatusFilter";
import AddItem from "../AddItem";

export default class App extends Component {
    maxId = 100;

    state = {
        toDoData: [
            {label: `Drink Coffee`, important: false, done: false, importantButton: false, id: 1},
            {label: `Create React App`, important: false, done: false, importantButton: false, id: 2},
            {label: `Create Awesome App`, important: false, done: false, importantButton: false, id: 3}
        ]
    };

    searchIndex = (data, id) => {
        const index = data.findIndex((element) => element.id === id);
        return index;
    };

    deleteItem = (id) => {
        this.setState(({toDoData}) => {
            const idx = this.searchIndex(toDoData, id);

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
            done: false,
            importantButton: false,
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
        this.setState(({toDoData}) => {
            const idx = this.searchIndex(toDoData, id);
            let newArray = toDoData;

            newArray[idx].important = !toDoData[idx].important;
            newArray[idx].importantButton = !toDoData[idx].importantButton;

            return {
                toDoData: newArray
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({toDoData}) => {
            const idx = this.searchIndex(toDoData, id);
            let newArray = toDoData;

            newArray[idx].done = !toDoData[idx].done;

            return {
                toDoData: newArray
            }
        });
    };

    render() {
        return (
            <div className="body">
                <AppLogo/>
                <ItemStatus/>
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