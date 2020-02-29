import React from "react";
import "./StatusFilter.css";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const StatusFilter = (props) => {
    const {filter, onFilterChange} = props;

    const button = [
        {name: "all", label: "All"},
        {name: "active", label: "Active"},
        {name: "done", label: "Done"}
    ];

    const elements = button.map(({name, label}) => {
        const isActive = name === filter;
        const color = isActive ? "primary" : "";

        return (
            <Button
                key={name}
                color={color}
                variant="contained"
                onClick={() => onFilterChange(name)}
            >
                {label}
            </Button>
        )
    });

    return (
        <div className="filter">
            <ButtonGroup size="small" aria-label="outlined primary button group">
                {elements}
            </ButtonGroup>
        </div>
    );
};

export default StatusFilter;