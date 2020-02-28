import React from "react";
import "./SearchPanel.css";

import Input from "@material-ui/core/Input";

const SearchPanel = (props) => {
    const {searchItem} = props;

    const onChangeSearch = (event) => {
        searchItem(event);
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