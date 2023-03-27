interface IMail {
  mail: string;
  password: string;
  username: string;
}

export const validateLoginForm = ({
  username,
  mail,
  password,
}: IMail): boolean => {
  const isUsernameValid = validateUserName(username);
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid && isUsernameValid;
};

const validatePassword = (password: string): boolean => {
  return password.length > 6 && password.length < 12;
};

const validateMail = (mail: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const validateUserName = (username: string): boolean => {
  return username.length > 2 && username.length < 8;
};
