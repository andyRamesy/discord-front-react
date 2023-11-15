import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./components/SideBar";
import FriendsSideBar from "./components/FriendsSideBar";
import Messenger from "./components/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "src/utils/auth";
import { connect } from "react-redux";
import { getActions } from "src/store/actions/authActions";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const DashBoard = ({setUserDetails}) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(DashBoard);
