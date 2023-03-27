import React from "react";
import InputWithLabel from "../../../../shared/components/InputWithLabel";

const RegisterPageInputs = (props: any) => {
  const { username, setUsername, mail, setMail, password, setPassword } = props;

  return (
    <div>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter your username"
      />
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </div>
  );
};

export default RegisterPageInputs;
