import React from "react";
import { styled } from "@mui/system";
import { IInvit } from "@/types/types";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const invitations: IInvit[] = [
  {
    id: "1",
    senderId: {
      username: "Mark",
      mail: "mark@mark.com",
    },
  },
  {
    id: "2",
    senderId: {
      username: "ovalgie",
      mail: "ovalgie@ovalgie.com",
    },
  },
  {
    id: "3",
    senderId: {
      username: "toma",
      mail: "toma@toma.com",
    },
  },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {invitations.map((invits) => (
        <PendingInvitationsListItem
          key={invits.id}
          id={invits.id}
          username={invits.senderId.username}
          mail={invits.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
