import React from "react";

import IconButton from "@material-ui/core/IconButton";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

const LockButton = ({markText, changeButton}) => {
    return (
        <IconButton onClick={() => {
            markText();
            changeButton();
        }}>
            <TurnedInNotIcon/>
        </IconButton>
    );
};

export default LockButton;