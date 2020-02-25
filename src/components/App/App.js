import React from "react";
import "./App.css";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import StatusFilter from "../StatusFilter";

const App = () => {
    const toDoData = [
        {label: `Drink Coffee`, important: false, id: 1},
        {label: `Create React App`, important: true, id: 2},
        {label: `Create Awesome App`, important: false, id: 3}
    ];

    return (
        <div className="body">
            <AppHeader/>
            <SearchPanel/>
            <StatusFilter/>
            <ToDoList toDoData = {toDoData}/>
        </div>
    );
};

export default App;