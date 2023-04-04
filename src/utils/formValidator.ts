interface IMail {
  mail: string;
  password: string;
  username: string;
}

export const validateLoginForm = ({
  // username,
  mail,
  password,
}: IMail): boolean => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  // const isUsernameValid = username ? validateUserName(username) : true;

  return isMailValid && isPasswordValid;
};

const validatePassword = (password: string): boolean => {
  return password.length > 3;
};

const validateMail = (mail: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const validateUserName = (username: string): boolean => {
  return username.length > 2 && username.length < 8;
};
