import React, {Component} from "react";
import "./App.css";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import StatusFilter from "../StatusFilter";

export default class App extends Component {
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

    render() {
        return (
            <div className="body">
                <AppHeader/>
                <SearchPanel/>
                <StatusFilter/>
                <ToDoList
                    toDoData={this.state.toDoData}
                    onDeleted={(id) => this.deleteItem(id)}
                />
            </div>
        );
    }
}