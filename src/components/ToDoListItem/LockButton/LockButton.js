import React from "react";

import IconButton from "@material-ui/core/IconButton";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

const LockButton = ({mark}) => {
    return (
        <IconButton onClick={mark}>
            <TurnedInNotIcon/>
        </IconButton>
    );
};

export default LockButton;