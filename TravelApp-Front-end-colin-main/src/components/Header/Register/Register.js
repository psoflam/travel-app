import React from "react";
import "./login.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function Login() {
  return (
    <React.Fragment>
      <div id="login">
        <form className="form" id="frm1">
          <TextField id="standard-basic" label="Username" variant="standard" />
          <br></br>
          <TextField id="standard-basic" label="Password" variant="standard" />
          <br></br>
          <Button variant="contained">Submit</Button>
        </form>
      </div>
    </React.Fragment>
  );
}

// First name:{
