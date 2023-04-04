import React, { useState, useEffect } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInput from "./LoginPageInput";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../../utils/formValidator";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";

const LoginPage = ({ login }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
    console.log("isFormValid:", isFormValid);
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };
    console.log("login", mail, password);
    login(userDetails, navigate);
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInput mail={mail} setMail={setMail} setPassword={setPassword} />
      <LoginPageFooter isFormValid={!isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
