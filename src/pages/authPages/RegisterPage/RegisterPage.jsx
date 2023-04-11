import React, { useEffect, useState } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import RegisterPageHeader from "./RegisterPageHeader/RegisterPageHeader";
import RegisterPageInputs from "./RegisterPageInputs/RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter/RegisterPageFooter";
import { validateLoginForm } from "../../../utils/formValidator";
import { useNavigate } from "react-router-dom";
import { getActions } from "../../../store/actions/authActions";
import { connect } from "react-redux";

const RegisterPage = ({ register }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ username, mail, password }));
  }, [username, mail, password, setIsFormValid]);

  const handleRegister = () => {
    const userDetails = {
      username,
      mail,
      password,
    };
    register(userDetails, navigate);
    console.log("register");
  };

  return (
    <AuthBox>
      <RegisterPageHeader />
      <RegisterPageInputs
        username={username}
        setUsername={setUsername}
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
