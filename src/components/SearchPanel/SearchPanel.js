import React from "react";
import "./SearchPanel.css";

import TextField from '@material-ui/core/TextField';

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <TextField id="standard-basic" label="search"/>
        </div>
    );
};

export default SearchPanel;