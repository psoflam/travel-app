import React from "react";
import "./login.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function Login() {
  // const [loggedIn, setLoggedIn] = setState(false);

  // handleLoginClick() {
  //   setLoggedIn(true);
  // }

  // handleLogoutClick() {
  //   setLoggedIn(false);
  // }
  return (
    <React.Fragment>
      <div id="login">
        <form className="form" id="frm1">
          <TextField id="standard-basic" label="Username" variant="standard" />
          <br></br>
          <TextField id="standard-basic" label="Password" variant="standard" />
          <br></br>
          <Button variant="contained">Login!</Button>
          <Button variant="contained">Sign up</Button>
        </form>
      </div>
    </React.Fragment>
  );
}

// First name:{" "}
// Last name:{" "}
