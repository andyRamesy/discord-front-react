import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const InvitationDecisionButtons = ({disabled, acceptInvit, rejectInvt}) => {
  return <Box sx={{display:"flex"}}>
    <IconButton style={{color: "white"}} disabled={disabled} onClick={acceptInvit}>
        <CheckIcon />
    </IconButton>
    <IconButton style={{color: "white"}} disabled={disabled} onClick={rejectInvt}>
        <ClearIcon />
    </IconButton>
  </Box>;
};

export default InvitationDecisionButtons;
