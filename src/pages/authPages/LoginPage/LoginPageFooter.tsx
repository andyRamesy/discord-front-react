import React from "react";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValid = () => {
  return "Form not valid";
};

const getFormValidMessage = () => {
  return "Press to log in";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValid() : getFormValidMessage()}>
        <div style={{ display: "flex", justifyContent: "center", width:"fit-content" , margin: "auto"}}>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            disabled={isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        redirectHandler={handlePushToRegisterPage}
        additionalStyles={{ marginTop: "5px" }}
      />
    </>
  );
};

export default LoginPageFooter;
