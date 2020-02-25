import React, {Component} from "react";
import "./StatusFilter.css";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class StatusFilter extends Component {
    render() {
        return (
            <div className="filter">
                <ButtonGroup size="small" aria-label="outlined primary button group">
                    <Button>All</Button>
                    <Button>Active</Button>
                    <Button>Done</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default StatusFilter;