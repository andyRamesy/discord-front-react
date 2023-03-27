import React, { useEffect, useState } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import RegisterPageHeader from "./RegisterPageHeader/RegisterPageHeader";
import RegisterPageInputs from "./RegisterPageInputs/RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter/RegisterPageFooter";
import { validateLoginForm } from "../../../utils/formValidator";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ username,mail, password }));
  }, [username, mail, password, setIsFormValid]);

  const handleRegister = () => {
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

export default RegisterPage;
