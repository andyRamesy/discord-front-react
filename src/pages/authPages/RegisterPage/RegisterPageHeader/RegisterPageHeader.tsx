import { Typography } from "@mui/material";
import "./RegisterPageHeader.css"

const RegisterPageHeader = (): JSX.Element => {
  return (
    <div className="container">
      <Typography variant="h5" sx={{ color: "white" }}>
        Create account
      </Typography>
    </div>
  );
};


export default RegisterPageHeader;
