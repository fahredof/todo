import React from "react";
import "./SearchPanel.css";

import Input from "@material-ui/core/Input";

const SearchPanel = (props) => {
    const {onTermChange} = props;

    const onChangeSearch = (event) => {
        onTermChange(event);
    };

    return (
        <form className="search-panel">
            <Input
                placeholder="search"
                onChange={onChangeSearch}
            />
        </form>
    );
};

export default SearchPanel;