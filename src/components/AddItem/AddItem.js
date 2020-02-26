import React, {Component} from "react";
import "./AddItem.css";

import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";

export default class AddItem extends Component {
    render() {
        const {onAdded} = this.props;

        return (
            <div className="add-item">
                <TextField id="standard-basic" label="add"/>
                <IconButton onClick={() => onAdded("Hello world")}>
                    <AddIcon/>
                </IconButton>
            </div>
        );
    }
}

