import React from "react";
import CustomPrimaryButton from "../../../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import "./RegisterPageFooter.css";

const RegisterPageFooter = (props) => {
  const { handleRegister, isFormValid } = props;
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/login");
  };

  const getFormNotValidMessage = () => {
    return "The form is not valid";
  };
  const getFormValidMessage = () => {
    return "Press to register";
  };

  return (
    <div className="container">
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div className="btnContainer">
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{}}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <div className="redirectRegister">
        <RedirectInfo
          text="Already have an account? "
          redirectText="Go to login page"
          redirectHandler={handlePushToRegisterPage}
          additionalStyles={{ marginTop: "5px" }}
        />
      </div>
    </div>
  );
};

export default RegisterPageFooter;
