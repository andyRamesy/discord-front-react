import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

const AlertNotification = ({
  showAlertMessage,
  closeAlertMessage,
  alertMessageContent,
}) => {
  return (
    <Snackbar
      open={showAlertMessage}
      onClose={closeAlertMessage}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={6000}
    >
      <Alert>{alertMessageContent}</Alert>
    </Snackbar>
  );
};

const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(AlertNotification);
