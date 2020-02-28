import React, {Component} from "react";
import "./AddItem.css";

import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import Input from "@material-ui/core/Input";

export default class AddItem extends Component {
    state = {
        label: ``
    };

    onChangeLabel = (event) => {
        this.setState({
            label: event.target.value
        })
    };

    onSubmit = (event) => {
        const toDo = this.state.label;

        if (toDo) {
            this.props.onAdded(toDo);
            this.setState(({
                label: ``
            }))
        }
        event.preventDefault();
    };

    render() {
        return (
            <form
                className="add-item"
                onSubmit={this.onSubmit}
            >
                <Input
                    value={this.state.label}
                    placeholder="add"
                    onChange={this.onChangeLabel}
                />

                <IconButton type="submit">
                    <AddIcon/>
                </IconButton>

            </form>
        );
    }
}

