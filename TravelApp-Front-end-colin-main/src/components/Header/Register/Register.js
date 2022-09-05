import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function Register(props) {
  return (
    <React.Fragment>
      <div className="register">
        <form className="form" id="frm1">
          <TextField id="standard-basic" label="Email" variant="standard" />
          <br></br>
          <TextField id="standard-basic" label="Username" variant="standard" />
          <br></br>
          <TextField id="standard-basic" label="Password" variant="standard" />
          <br></br>
          <Button variant="contained" onClick={props.onClick}>
            Submit
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}
