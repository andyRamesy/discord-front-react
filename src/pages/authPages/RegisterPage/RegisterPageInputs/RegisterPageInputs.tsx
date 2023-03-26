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
    </div>
  );
};

export default RegisterPageInputs;
