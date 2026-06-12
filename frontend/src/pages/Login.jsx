import {
  useState
} from "react";

import {
  TextField,
  Button,
  Paper,
  Typography
} from "@mui/material";

import API
from "../api/authApi";

import {
  useNavigate
} from "react-router-dom";

import {
  useAuth
} from "../context/AuthContext";

function Login() {

  const navigate =
  useNavigate();

  const { login } =
  useAuth();

  const [form,setForm] =
  useState({
    email:"",
    password:""
  });

  const handleChange =
  (e) => {

    setForm({
      ...form,
      [e.target.name]:
      e.target.value
    });

  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      const res =
      await API.post(
        "/auth/login",
        form
      );

      login(
        res.data
      );

      if (
        res.data.role ===
        "ADMIN"
      ) {

        navigate(
          "/admin/dashboard"
        );

      } else {

        navigate(
          "/user/assets"
        );

      }

    } catch {

      alert(
        "Login Failed"
      );

    }

  };

  return (

    <Paper
      sx={{
        width:400,
        margin:"100px auto",
        padding:3
      }}
    >

      <Typography
        variant="h5"
      >
        Login
      </Typography>

      <form
        onSubmit={
          handleSubmit
        }
      >

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          onChange={
            handleChange
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          name="password"
          onChange={
            handleChange
          }
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Login
        </Button>

      </form>

    </Paper>

  );
}

export default Login;