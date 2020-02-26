import React, {Component} from "react";
import "./ToDoListItem.css";

//TODO: code TurnedInIcon with TurnedInNotIcon

import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";

class ToDoListItem extends Component {

    state = {
        done: false,
        important: false,
        importantButton: false
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    };

    onMarkImportant = () => {
        this.setState(({important, importantButton}) => {
            return {
                important: !important,
                importantButton: !importantButton
            }
        });
    };

    render() {
        const {onDeleted} = this.props;
        const {label} = this.props;
        const {done, important, importantButton} = this.state;
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
                    onClick={this.onLabelClick}
                >
                    {label}
                </span>

                {
                    importantButton ?
                        <IconButton onClick={this.onMarkImportant}>
                            <TurnedInIcon aria-label="delete"/>
                        </IconButton>
                        :
                        <IconButton onClick={this.onMarkImportant}>
                            <TurnedInNotIcon aria-label="delete"/>
                        </IconButton>
                }

                <IconButton onClick={onDeleted}>
                    <DeleteIcon aria-label="delete"/>
                </IconButton>
            </div>
        );

    }
}

export default ToDoListItem;