import { logout } from "src/utils/auth";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";



const DropDownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
     <IconButton onClick={handleClick} style={{color: "white"}}>
        <MoreVertIcon />
     </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default DropDownMenu;
