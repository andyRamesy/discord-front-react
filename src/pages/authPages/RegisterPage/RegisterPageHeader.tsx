import { Typography } from "@mui/material";

const RegisterPageHeader = (): JSX.Element => {
  return (
    <div style={styles.container}>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create account
      </Typography>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
  },
};

export default RegisterPageHeader;
