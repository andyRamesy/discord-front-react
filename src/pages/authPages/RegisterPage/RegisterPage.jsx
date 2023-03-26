import React, { useState } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageHeader from "./RegisterPageHeader/RegisterPageHeader";
import RegisterPageInputs from "./RegisterPageInputs/RegisterPageInputs";

const RegisterPage = () => {
  const [username, setUsername] = useState("")

  // const setUsernameHandler = (value) => {
  //   console.log(value , "set user name");
  // }
  return (
    <AuthBox>
      <RegisterPageHeader />
      <RegisterPageInputs username={username} setUsername={setUsernameHandler}/>
    </AuthBox>
  );
};

export default RegisterPage;
