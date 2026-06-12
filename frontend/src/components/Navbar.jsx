import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@mui/material";

import {
  useNavigate
} from "react-router-dom";

import {
  useAuth
} from "../context/AuthContext";

function Navbar() {

  const navigate =
  useNavigate();

  const { logout } =
  useAuth();

  const handleLogout =
  () => {

    logout();

    navigate("/login");
  };

  return (

    <AppBar
      position="static"
    >

      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow:1 }}
        >
          Asset Management System
        </Typography>

        <Button
          color="inherit"
          onClick={
            handleLogout
          }
        >
          Logout
        </Button>

      </Toolbar>

    </AppBar>

  );
}

export default Navbar;