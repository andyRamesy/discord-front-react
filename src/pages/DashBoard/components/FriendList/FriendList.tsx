import { IFriend } from "src/types/types";
import { styled } from "@mui/system";
import React from "react";
import FriendListItem from "./FirendListItem";

const friendLIst: IFriend[] = [
  {
    id: 1,
    username: "Test",
    isOnline: true,
  },
  {
    id: 2,
    username: "Test2",
    isOnline: true,
  },
  {
    id: 3,
    username: "Test3",
    isOnline: false,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendList = () => {
  return (
    <MainContainer>
      {friendLIst.map((f) => (
        <FriendListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendList;
