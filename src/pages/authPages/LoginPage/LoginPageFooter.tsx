import React from "react";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate("/register")
  };

  return (
    <>
      <div>
        <CustomPrimaryButton
          label="Login"
          additionalStyles={{ marginTop: "30px" }}
          disabled={isFormValid}
          onClick={handleLogin}
        />
      </div>
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
