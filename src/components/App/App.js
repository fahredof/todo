import React, {Component} from "react";
import "./App.css";

import AppLogo from "../AppHeader";
import ToDoItemStatus from "../ToDoItemStatus";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import StatusFilter from "../StatusFilter";
import AddItem from "../AddItem";

export default class App extends Component {
    maxId = 100;

    state = {
        toDoData: [
            this.createToDoItem(`Drink Coffee`),
            this.createToDoItem(`Create React App`),
            this.createToDoItem(`Create Awesome App`)
        ],
        term: ``,
        filter: `all`,
    };

    createToDoItem(label) {
        return {
            label,
            important: false,
            done: false,
            importantButton: false,
            id: this.maxId++
        };
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
        const newItem = this.createToDoItem(text);

        this.setState(({toDoData}) => {
            const newArray = [...toDoData, newItem];

            return {
                toDoData: newArray
            }
        })
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((element) => element.id === id);
        let newArray = arr;

        newArray[idx][propName] = !arr[idx][propName];

        return newArray;
    };

    onToggleImportant = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, `important`)
            }
        });
    };

    onToggleImportantButton = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, `importantButton`)
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, `done`)
            }
        })
    };

    searchItems = (items, term) => {
        if (term.length === 0) return items;
        else {
            return items.filter((element) => {
                return element.label.toLowerCase().indexOf(term.toLowerCase()) > -1
            });
        }
    };

    filterStatus = (items, filter) => {
        switch (filter) {
            case "add":
                return items;
            case "active":
                return items.filter((element) => {
                    return !element.done
                });
            case "done":
                return items.filter((element) => {
                    return element.done
                });
            default:
                return items;
        }
    };

    onTermChange = (event) => {
        const term = event.target.value;
        this.setState({term});
    };

    onFilterChange = (filter) => {
        this.setState({filter})
    };

    render() {
        const {toDoData, term, filter} = this.state;

        const doneCount = toDoData
            .filter((element) => element.done).length;

        const toDoCount = toDoData.length - doneCount;

        const visibleItems = this.filterStatus(
            this.searchItems(toDoData, term), filter);

        return (
            <div className="body">
                <AppLogo/>
                <ToDoItemStatus toDo={toDoCount} done={doneCount}/>
                <SearchPanel
                    onTermChange={(event) => this.onTermChange(event)}
                />
                <StatusFilter
                    filter={filter}
                    onFilterChange={(filter) => this.onFilterChange(filter)}
                />
                <ToDoList
                    toDoData={visibleItems}
                    onDeleted={(id) => this.deleteItem(id)}
                    onToggleImportant={this.onToggleImportant}
                    onToggleImportantButton={this.onToggleImportantButton}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem onAdded={this.addItem}/>
            </div>
        );
    }
}