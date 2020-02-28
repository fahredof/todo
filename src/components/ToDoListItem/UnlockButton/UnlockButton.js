import React from "react";

import IconButton from "@material-ui/core/IconButton";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

const UnlockButton = ({markText, changeButton}) => {
    return (
        <IconButton onClick={() => {
            markText();
            changeButton();
        }}>
            <TurnedInIcon/>
        </IconButton>
    );
};

export default UnlockButton;