import {
  useState
} from "react";

import {
  TextField,
  Button,
  MenuItem,
  Paper,
  Typography
} from "@mui/material";

import API
from "../api/authApi";

function Register() {

  const [form,setForm] =
  useState({
    name:"",
    email:"",
    password:"",
    role:"USER"
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

      await API.post(
        "/auth/register",
        form
      );

      alert(
        "Registration Successful"
      );

    } catch {

      alert(
        "Registration Failed"
      );

    }

  };

  return (

    <Paper
      sx={{
        width:450,
        margin:"80px auto",
        padding:3
      }}
    >

      <Typography
        variant="h5"
      >
        Register
      </Typography>

      <form
        onSubmit={
          handleSubmit
        }
      >

        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          onChange={
            handleChange
          }
        />

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

        <TextField
          select
          fullWidth
          margin="normal"
          name="role"
          value={form.role}
          onChange={
            handleChange
          }
        >

          <MenuItem
            value="USER"
          >
            USER
          </MenuItem>

          <MenuItem
            value="ADMIN"
          >
            ADMIN
          </MenuItem>

        </TextField>

        <Button
          type="submit"
          fullWidth
          variant="contained"
        >
          Register
        </Button>

      </form>

    </Paper>

  );
}

export default Register;