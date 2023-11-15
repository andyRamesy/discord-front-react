import Avatar from "src/shared/components/Avatar";
import { Box, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import InvitationDecisionButtons from "./InvitationDecisionButtons";

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptInvit = () => {},
  rejectInvt = () => {},
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvit = () => {
    // acceptInvit({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvit = () => {
    // rejectInvt({ id });
    setButtonsDisabled(true);
  };
  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
              variant: "subtitle1",
            }}
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptInvit={handleAcceptInvit}
            rejectInvt={handleRejectInvit}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
