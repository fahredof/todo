import React, {Component} from "react";
import "./StatusFilter.css";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class StatusFilter extends Component {
    state = {
        all: true,
        active: false,
        done: false
    };

    clickOnAll = () => {
        this.setState({
            all: true,
            active: false,
            done: false,
        });
        this.props.filterByAll();
    };

    clickOnActive = () => {
        this.setState({
            all: false,
            active: true,
            done: false,
        });
        this.props.filterByActive();
    };

    clickOnDone = () => {
        this.setState({
            all: false,
            active: false,
            done: true
        });
        this.props.filterByDone();
    };

    render() {
        let primaryAll = "";
        let primaryAct = "";
        let primaryDone = "";

        if (this.state.all) primaryAll += "primary";
        if (this.state.active) primaryAct += "primary";
        if (this.state.done) primaryDone += "primary";

        return (
            <div className="filter">
                <ButtonGroup size="small" aria-label="outlined primary button group">
                    <Button
                        variant="contained"
                        onClick={this.clickOnAll}
                        color={primaryAll}
                    >
                        All
                    </Button>
                    <Button
                        variant="contained"
                        onClick={this.clickOnActive}
                        color={primaryAct}
                    >
                        Active
                    </Button>
                    <Button
                        variant="contained"
                        onClick={this.clickOnDone}
                        color={primaryDone}
                    >
                        Done
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default StatusFilter;